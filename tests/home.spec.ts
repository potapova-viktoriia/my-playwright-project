import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Главная страница содержит заголовок h2 с названием клиники', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();

  // закрываем куки-баннер, если он появился
  const cookiesBtn = page.getByRole('button', { name: /я согласен/i });
  if (await cookiesBtn.isVisible()) {
    await cookiesBtn.click();
    await expect(cookiesBtn).toBeHidden();
  }
  await expect(home.heroTitle).toBeVisible();
  await expect(home.heroTitle).toContainText('Стоматологическая клиника «АртСтом»');
});
