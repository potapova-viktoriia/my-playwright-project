import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroTitle: Locator;
  readonly navBar: Locator;
  readonly contactsLink: Locator;
  readonly navPrices: Locator;
  readonly sectionImplant: Locator;
  readonly titleImplant: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.heroTitle = page.locator('h2').filter({ hasText: 'Стоматологическая клиника «АртСтом»' });          // первый крупный заголовок
    this.navBar = page.locator('nav');             
    this.contactsLink = this.navBar
      .getByRole('link', { name: 'Контакты' }).first();
    this.navPrices = page.getByRole('link', { name: 'ЦЕНЫ' });
    this.sectionImplant = page.getByRole('button', { name: 'Имплантология' });
    this.titleImplant = page.locator('h2', { hasText: 'Имплантология' });
  }

  /** Открыть главную страницу (RU-версия) */
  async goto() {
    await this.page.goto('https://www.artstom.cz/ru/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  /** Переход на страницу «Контакты» */
  async openContacts() {
    await this.contactsLink.click();
    await this.page.waitForLoadState('networkidle');
  }
}
