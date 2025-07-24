import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Переход по ссылке «Контакты» открывает страницу контактов', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.openContacts();

  await expect(page).toHaveURL(/\/ru\/kontakty\/?$/i);
  await expect(page.getByRole('heading', { name: /Контакты/i }))
    .toBeVisible();
});
