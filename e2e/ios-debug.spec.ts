import {expect, test} from '@playwright/test';

test('Navigate from Intro to game view, Start-Button sollte auf iOS reagieren', async ({page}) => {
  // 1. Gehe zu deiner App
  await page.goto('/');

  // 2. Warte, bis der Start-Button sichtbar ist
  const missonStartBtn = page.getByText('MISSION STARTEN', {exact: true}).first();
  await expect(missonStartBtn).toBeVisible();

  await missonStartBtn.tap();

  await page.waitForURL('/game');

  // 2. Warte, bis der Start-Button sichtbar ist
  const startBtn = page.getByText('START', {exact: true}).first();
  await expect(startBtn).toBeVisible();

  await startBtn.tap();

  // 3. PRÜFUNG: Das Menü-Modal muss verschwinden
  // Da dein HTML @if (!gameActive) nutzt, wird das Element komplett aus dem DOM entfernt
  const modal = page.locator('.menu-modal');
  await expect(modal).toBeHidden();

  // 4. PRÜFUNG: Ist der Canvas sichtbar?
  const canvas = page.locator('#gameCanvas');
  await expect(canvas).toBeVisible();

  // 5. PRÜFUNG: Ist die 3D-Sonne geladen?
  // Wir prüfen, ob die Komponente <app-3d> im DOM existiert
  const sunLayer = page.locator('app-3d');
  await expect(sunLayer).toBeAttached();

  // Optional: Screenshot zur visuellen Kontrolle im Test-Bericht
  await page.screenshot({path: 'e2e/test-results/ios-game-started.png'});
});

test('Full Game Loop: Start, Shield, Touch and Crash', async ({page}) => {
  await page.goto('/game');

  // 1. Starten
  const startBtn = page.getByText('START', {exact: true}).first();
  await startBtn.tap();
  await expect(page.locator('.menu-modal')).toBeHidden();

  // 2. Interaktion: Einen Touch auf dem Screen halten (Schiff bewegen)
  // Wir simulieren einen Touch in der Mitte des Screens
  await page.mouse.move(200, 400);
  await page.mouse.down(); // Drücken
  await page.waitForTimeout(1000); // 1 Sekunde fliegen
  await page.mouse.up();   // Loslassen

  // 3. Schild-Button drücken
  // Nutze hier den Selektor für deinen Schild-Button (z.B. .shield-button-container)
  const shieldBtn = page.locator('.shield-button-container');
  // Wir prüfen erst, ob er da ist
  if (await shieldBtn.count() > 0) {
    // force: true umgeht die Stabilitätsprüfung von Playwright
    // trial: true prüft vorher kurz, ob er überhaupt klickbar wäre
    await shieldBtn.tap({force: true});
    console.log('Shield-Button wurde (erzwungen) gedrückt');
  }

  // 4. "In die Sonne stürzen"
  // Wir warten einfach, bis das Game Over (winState oder gameActive = false) eintritt.
  // Da die Sonne das Schiff anzieht, passiert das von allein.
  // Wir warten max. 30 Sekunden auf das Wiedererscheinen des Modals
  const modal = page.locator('.menu-modal-content');
  await expect(modal).toBeVisible({timeout: 30000});

  // 5. Beweis-Check: Erscheint der "NEUER START" Text?
  await expect(page.getByText(/START/i)).toBeVisible();

  // Kleiner Puffer für das Video-Ende
  await page.waitForTimeout(1000);
});
