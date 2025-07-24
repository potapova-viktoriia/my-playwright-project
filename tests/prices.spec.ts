import { test, expect } from '@playwright/test';

test('Переход на ЦЕНЫ и раскрытие раздела Имплантология', async ({ page }) => {
  await page.goto('https://www.artstom.cz/ru/');

  // Закрыть куки-баннер, если он есть
  const cookiesBtn = page.getByRole('button', { name: /я согласен/i });
  if (await cookiesBtn.isVisible()) {
    await cookiesBtn.click();
  }

  // Клик по "ЦЕНЫ"
  await page.locator('#navbar').getByRole('link', { name: 'ЦЕНЫ' }).click();

  // Клик по разделу "Имплантология"
  const implantSection = page.getByRole('button', { name: 'Имплантология' });
  await implantSection.click();

  // Проверка, что после раскрытия появилось слово "Имплантология"
  await expect(page.locator('h2', { hasText: 'Имплантология' })).toBeVisible();
});
