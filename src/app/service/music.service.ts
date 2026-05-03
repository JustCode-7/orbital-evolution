/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietär. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis für Details.
 */
import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MusicService {
  private audioCtx: AudioContext | null = null;
  private currentSource: AudioBufferSourceNode | null = null;
  private currentGain: GainNode | null = null;

  // Speicher fÃƒÂ¼r MP3-Rohdaten (wenig RAM-Verbrauch)
  private rawBuffers = new Map<string, ArrayBuffer>();
  // Speicher fÃƒÂ¼r fertig dekodierte Audio-Daten (hoher RAM-Verbrauch)
  private audioBuffers = new Map<string, AudioBuffer>();

  private playlistIds: string[] = [];
  private currentIndex = 0;
  private nextTrackTimer: any;
  private currentTrackRemainingLoops = 0;
  private currentTrackId: string | null = null;
  private isPaused = false;
  private readonly MIN_TRACK_DURATION = 600; // 10 Minuten in Sekunden
  private readonly CROSSFADE_TIME = 3.0;

  readonly playlist = [
    {id: 'synth', file: 'assets/music/monume-electronic.mp3'},
    {id: 'ambient', file: 'assets/music/space-ambient-loop.mp3'},
    {id: 'tension', file: 'assets/music/mountain-electronic.mp3'},
    {id: 'soft', file: 'assets/music/soft-corporate.mp3'},
    {id: 'upbeat', file: 'assets/music/upbeat-emotive.mp3'},
    {id: 'night', file: 'assets/music/night-detective.mp3'}
  ];

  isMusicOn = signal(false);
  isMusicReady = signal(false);

  async fetchAllTracks(): Promise<void> {
    this.isMusicReady.set(false);
    const fetchPromises = this.playlist.map(async (track) => {
      try {
        const res = await fetch(track.file);
        if (!res.ok) console.error(`404: ${track.file}`);
        const arrayBuffer = await res.arrayBuffer();
        this.rawBuffers.set(track.id, arrayBuffer);
      } catch (e) {
        console.error(`Fehler beim Laden von ${track.id}:`, e);
      }
    });

    await Promise.all(fetchPromises);
    this.playlistIds = Array.from(this.rawBuffers.keys());
    console.log('Alle MP3-Dateien im Speicher (Rohdaten).');
    this.isMusicReady.set(true);
  }

  private async getDecodedBuffer(id: string): Promise<AudioBuffer | null> {
    if (this.audioBuffers.has(id)) return this.audioBuffers.get(id)!;

    const raw = this.rawBuffers.get(id);
    if (!raw) return null;

    // Lazy Initialisierung des Contexts
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    try {
      // Wir kopieren den Buffer (.slice), damit die Rohdaten erhalten bleiben
      const decoded = await this.audioCtx.decodeAudioData(raw.slice(0));
      this.audioBuffers.set(id, decoded);
      return decoded;
    } catch (e) {
      console.error(`Dekodierungsfehler bei ${id}:`, e);
      return null;
    }
  }

  async playTrack(id: string, isLooping = false) {
    const buffer = await this.getDecodedBuffer(id);
    if (!buffer || !this.audioCtx) return;

    // Context wecken (zwingend erforderlich fÃƒÂ¼r Chrome/Safari)
    if (this.audioCtx.state === 'suspended') {
      await this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const fadeTime = this.CROSSFADE_TIME;

    const newSource = this.audioCtx.createBufferSource();
    const newGain = this.audioCtx.createGain();
    newSource.buffer = buffer;

    newSource.connect(newGain);
    newGain.connect(this.audioCtx.destination);

    // Fade-In
    newGain.gain.setValueAtTime(0, now);
    newGain.gain.linearRampToValueAtTime(0.3, now + fadeTime);

    // Fade-Out des alten Tracks
    if (this.currentGain) {
      this.currentGain.gain.setValueAtTime(this.currentGain.gain.value, now);
      this.currentGain.gain.linearRampToValueAtTime(0, now + fadeTime);
      this.currentSource?.stop(now + fadeTime);
    }

    newSource.start(now);
    this.currentSource = newSource;
    this.currentGain = newGain;
    this.currentTrackId = id;

    // Wenn es ein neuer Track ist (nicht aus einem Loop), berechnen wir die noetigen Wiederholungen
    if (!isLooping) {
      if (buffer.duration < this.MIN_TRACK_DURATION) {
        this.currentTrackRemainingLoops = Math.ceil(this.MIN_TRACK_DURATION / buffer.duration) - 1;
      } else {
        this.currentTrackRemainingLoops = 0;
      }
    }

    // NÃƒÂ¤chsten Track oder Loop planen
    if (this.nextTrackTimer) clearTimeout(this.nextTrackTimer);

    this.nextTrackTimer = setTimeout(() => {
      if (this.currentTrackRemainingLoops > 0) {
        this.currentTrackRemainingLoops--;
        this.playTrack(id, true);
      } else {
        this.playNext();
      }
    }, (buffer.duration - fadeTime) * 1000);
  }

  startAutoplay() {
    this.shufflePlaylist();
    this.currentIndex = 0;
    this.playNext();
    this.isMusicOn.set(true);
  }

  private async playNext() {
    if (this.currentIndex >= this.playlistIds.length) {
      this.shufflePlaylist();
      this.currentIndex = 0;
    }
    const nextId = this.playlistIds[this.currentIndex];
    this.currentIndex++;
    await this.playTrack(nextId);
  }

  private shufflePlaylist() {
    for (let i = this.playlistIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playlistIds[i], this.playlistIds[j]] = [this.playlistIds[j], this.playlistIds[i]];
    }
  }

  stopMusic() {
    // 1. Ganz wichtig: Den Timer für den nächsten Song stoppen!
    if (this.nextTrackTimer) {
      clearTimeout(this.nextTrackTimer);
      this.nextTrackTimer = null;
    }

    if (!this.audioCtx || !this.currentSource || !this.currentGain) return;

    this.isPaused = false;
    const now = this.audioCtx.currentTime;
    const fadeOutTime = 1.5; // Kurzer, aber sanfter Fade-Out

    // 2. Sanft ausblenden
    this.currentGain.gain.setValueAtTime(this.currentGain.gain.value, now);
    this.currentGain.gain.linearRampToValueAtTime(0, now + fadeOutTime);

    // 3. Die Quelle nach dem Fade-Out stoppen
    this.currentSource.stop(now + fadeOutTime);

    // 4. Referenzen aufrÃƒÂ¤umen
    this.currentSource = null;
    this.currentGain = null;

    console.log("Musik gestoppt und Queue geleert.");
    this.isMusicOn.set(false);
  }

  async pauseMusic() {
    if (!this.audioCtx || this.isPaused) return;
    if (this.audioCtx.state === 'running') {
      await this.audioCtx.suspend();
      this.isPaused = true;
      console.log("Musik pausiert.");
    }
  }

  async resumeMusic() {
    if (!this.audioCtx || !this.isPaused) return;
    if (this.audioCtx.state === 'suspended') {
      await this.audioCtx.resume();
      this.isPaused = false;
      console.log("Musik fortgesetzt.");
    }
  }

}
