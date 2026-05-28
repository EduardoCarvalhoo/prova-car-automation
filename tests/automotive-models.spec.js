import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';
import { AutomotiveModelsPage } from '../pages/automotive-models.page.js';

test('Acessar a página de listagem de modelos automotivos do ProvaCar e validar os filtros', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page); // Inicializa o Page Object de Modelos
  const homePage = new HomePage(page); // Inicializa o Page Object da Home

  await homePage.access(); // Acessa o site
  await homePage.clickStartButton(); // Navega para a área de desafios
  await homePage.accessTemplatesScreen(); // Confirma acesso à tela de modelos
  await automotiveModelsPage.validateFilters(); // Executa e valida a aplicação de diversos filtros de busca
});

test('Acessar a página de listagem e atualizar o modelo de automóvel do fabricante ACURA, da familia NSX e molicar 07000301-4 ', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page);
  const homePage = new HomePage(page);

  await homePage.access();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
  await automotiveModelsPage.validateFilters(); // Filtra o veículo específico para edição
  await automotiveModelsPage.updateVehicle(); // Realiza a atualização dos dados do veículo
});

test('Acessar a página de listagem e deletar o modelo de automóvel do fabricante Chevrolet, da familia Astra Hatch e molicar 01701825-0 ', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page);
  const homePage = new HomePage(page);

  await homePage.access();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
  await automotiveModelsPage.validateFilters(); // Filtra o veículo antes de deletar
  await automotiveModelsPage.deleteVehicle(); // Aciona a remoção do veículo da listagem
});

test('Acessar a página de listagem de modelos e criar um modelo personalizado ', async ({ page }) => {
  const automotiveModelsPage = new AutomotiveModelsPage(page);
  const homePage = new HomePage(page);

  await homePage.access();
  await homePage.clickStartButton();
  await homePage.accessTemplatesScreen();
  await automotiveModelsPage.createModel(); // Preenche o formulário de criação de um novo modelo e salva
});