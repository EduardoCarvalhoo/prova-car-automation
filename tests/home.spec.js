import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';

test('Acessar a página inicial do ProvaCar e validar os componentes', async ({ page }) => {

  const homePage = new HomePage(page);
  await homePage.access();
  await homePage.validateHomePage();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
});