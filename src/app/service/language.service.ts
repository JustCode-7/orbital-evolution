/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietÃ¤r. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis fÃ¼r Details.
 */
import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languages: any = {};
  currentLang = signal<string>('de');

  private initPromise: Promise<void>;

  constructor() {
    this.initPromise = this.loadLanguages();
    const savedLang = localStorage.getItem('selected_language');
    if (savedLang) {
      this.currentLang.set(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (['de', 'en'].includes(browserLang)) {
        this.currentLang.set(browserLang);
      } else {
        this.currentLang.set('de');
      }
    }
  }

  public async initialize(): Promise<void> {
    return this.initPromise;
  }

  private async loadLanguages() {
    try {
      const response = await fetch('assets/language.json');
      this.languages = await response.json();
    } catch (error) {
      console.error('Could not load languages', error);
    }
  }

  setLanguage(lang: string) {
    this.currentLang.set(lang);
    localStorage.setItem('selected_language', lang);
  }

  translate(key: string, params: any[] = []): string {
    const lang = this.currentLang();
    if (!this.languages[lang]) return key;

    const keys = key.split('.');
    let result = this.languages[lang];

    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key;
      }
    }

    if (typeof result === 'string' && params.length > 0) {
      params.forEach((param, index) => {
        result = result.replace(`{${index}}`, param);
      });
    }

    return result;
  }

  // Helper for templates
  get t() {
    return (key: string, params: any[] = []) => this.translate(key, params);
  }
}
