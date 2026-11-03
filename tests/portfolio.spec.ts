import { expect, test } from '@playwright/test';

test('homepage loads with fonts, no horizontal overflow, or browser errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Seriousabout play.');
  await page.evaluate(() => document.fonts.ready);
  expect(await page.evaluate(() => document.fonts.check('600 16px Manrope'))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.locator('.project-card')).toHaveCount(4);
  await page.screenshot({ path: `test-results/home-${test.info().project.name}.png`, fullPage: true });
  expect(errors).toEqual([]);
});

test('remix changes the scene and announces the new arrangement', async ({ page }) => {
  await page.goto('/');
  const flower = page.locator('[data-toy="flower"]');
  const original = await flower.getAttribute('transform');
  await page.getByRole('button', { name: 'Remix the playground' }).click();
  await expect(flower).not.toHaveAttribute('transform', original!);
  await expect(page.locator('[data-play-status]')).toHaveText('A DIFFERENT ANGLE. A NEW POSSIBILITY.');
  await page.getByRole('button', { name: 'Remix the playground' }).click();
  await page.getByRole('button', { name: 'Remix the playground' }).click();
  await expect(flower).toHaveAttribute('transform', 'translate(291 151) rotate(0)');
});

test('playground shapes can be moved and turned with the keyboard', async ({ page }) => {
  await page.goto('/');
  const screen = page.getByRole('button', { name: 'Screen idea.', exact: false });
  await screen.focus();
  await page.keyboard.press('ArrowRight');
  await expect(screen).toHaveAttribute('transform', 'translate(176 297) rotate(0)');
  await page.keyboard.press('Enter');
  await expect(screen).toHaveAttribute('transform', 'translate(176 297) rotate(30)');
});

test('pointer dragging changes a toy position', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'Keyboard and Remix cover the mobile-friendly alternative; mouse drag is desktop-only.');
  await page.goto('/');
  const ball = page.locator('[data-toy="ball"]');
  const bounds = await ball.boundingBox();
  expect(bounds).not.toBeNull();
  const before = await ball.getAttribute('transform');
  await page.mouse.move(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);
  await page.mouse.down();
  await page.mouse.move(bounds!.x + bounds!.width / 2 - 60, bounds!.y + bounds!.height / 2 + 40, { steps: 8 });
  await page.mouse.up();
  await expect(ball).not.toHaveAttribute('transform', before!);
});

test('touch dragging moves a toy without scrolling the page', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Touch input uses the mobile project.');
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const ball = page.locator('[data-toy="ball"]');
  await ball.evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
  const bounds = (await ball.boundingBox())!;
  const before = await ball.getAttribute('transform');
  const scrollBefore = await page.evaluate(() => scrollY);
  const cdp = await page.context().newCDPSession(page);
  const x = bounds.x + bounds.width / 2;
  const y = bounds.y + bounds.height / 2;
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x - 25, y: y + 30 }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect(ball).not.toHaveAttribute('transform', before!);
  expect(await page.evaluate(() => scrollY)).toBe(scrollBefore);

  // Empty space remains a normal scrolling surface, not a full-stage scroll trap.
  const stage = (await page.locator('.toy-svg').boundingBox())!;
  const emptyX = stage.x + 6;
  const emptyY = stage.y + stage.height * .8;
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: emptyX, y: emptyY }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: emptyX, y: emptyY - 60 }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(scrollBefore);
  await cdp.detach();
});

test('layout fits narrow phones and intermediate screen sizes', async ({ page }) => {
  for (const width of [320, 375, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${width}px`).toBe(true);
  }
});

test('all project stories are reachable and distinguish personal scope and credits', async ({ page }) => {
  await page.goto('/');
  const hrefs = await page.locator('.project-link').evaluateAll((links) => links.map((link) => link.getAttribute('href')!));
  for (const href of hrefs) {
    const response = await page.goto(href);
    expect(response?.status()).toBe(200);
    await expect(page.getByText('MY CONTRIBUTION', { exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'A team effort.' })).toBeVisible();
    await expect(page.getByText('A NOTE ON THE VISUALS')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test('résumé can be printed without the site navigation', async ({ page }) => {
  await page.goto('/resume');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Kent Timothy');
  await expect(page.getByRole('button', { name: 'Print / save PDF' })).toBeVisible();
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.site-header')).toBeHidden();
  await expect(page.locator('#print-resume')).toBeHidden();
  await expect(page.getByRole('heading', { name: 'Experience', exact: true })).toBeVisible();
});

test('reduced motion is honoured', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await page.getByRole('button', { name: 'Remix the playground' }).click();
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
});

test('core portfolio remains readable without JavaScript', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('[data-shuffle]')).toBeHidden();
  await expect(page.locator('.toy-svg')).toHaveAttribute('role', 'img');
  await page.getByRole('link', { name: 'Galilean Mission', exact: true }).click();
  await expect(page.getByText('MY CONTRIBUTION', { exact: true })).toBeVisible();
  await context.close();
});
