/**
 * COPYRIGHT (C) 2026 JustCode-7 (JustCode-7)
 * ALLE RECHTE VORBEHALTEN. / ALL RIGHTS RESERVED.
 * Dieses Projekt ist proprietÃ¤r. Nutzung, Modifikation oder Kopie nur mit schriftlicher Genehmigung.
 * Siehe LICENSE-Datei im Root-Verzeichnis fÃ¼r Details.
 */
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NavigationEnd, NavigationStart, provideRouter, Router } from '@angular/router';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show and hide loading indicator on router navigation events', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const router = TestBed.inject(Router);

    expect(app.isLoading()).toBe(false);

    // Simulate navigation start
    (router.events as any).next(new NavigationStart(1, '/'));
    fixture.detectChanges();
    expect(app.isLoading()).toBe(true);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.app-loading-indicator')).toBeTruthy();

    // Simulate navigation end
    (router.events as any).next(new NavigationEnd(1, '/', '/'));
    fixture.detectChanges();
    expect(app.isLoading()).toBe(false);
    expect(compiled.querySelector('.app-loading-indicator')).toBeFalsy();
  });
});
