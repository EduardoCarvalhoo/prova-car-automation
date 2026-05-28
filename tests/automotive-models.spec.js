import { test } from '@playwright/test';
import { automotiveModelsPage } from '../pages/automotive-models.page.js';
import { HomePage } from '../pages/home.page.js';
import { AutomotiveModelsPage } from '../pages/automotive-models.page.js';


test('Acessar a página de listagem de modelos automotivos do ProvaCar e validar os filtros', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page);
  const homePage = new HomePage(page);

  await homePage.access();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
  await automotiveModelsPage.validateFilters();

});

test('Acessar a página de listagem e atualizar o modelo de automóvel do fabricante ACURA, da familia NSX e molicar 07000301-4 ', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page);
  const homePage = new HomePage(page);

  await homePage.access();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
  await automotiveModelsPage.validateFilters();
  await automotiveModelsPage.updateVehicle();

});


test('Acessar a página de listagem e deletar o modelo de automóvel do fabricante Chevrolet, da familia Astra Hatch e molicar 01701825-0 ', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page);
  const homePage = new HomePage(page);

  await homePage.access();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
  await automotiveModelsPage.validateFilters();
  await automotiveModelsPage.deleteVehicle();
  await homePage.access();

});

test('Acessar a página de listagem de modelos e criar um modelo personalizado ', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page);
  const homePage = new HomePage(page);

  await homePage.access();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
  await automotiveModelsPage.createModel();


});