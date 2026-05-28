import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';

test('Acessar a página inicial do ProvaCar e validar os componentes', async ({ page }) => {

  const homePage = new HomePage(page); // Inicializa o Page Object da Home
  await homePage.access(); // Acessa a URL inicial do desafio
  await homePage.validateHomePage(); // Valida se todos os elementos visuais e textos estão presentes
  await homePage.clickStartButton(); // Inicia o fluxo clicando no botão de começar
  await homePage.accessTemplatesScreen(); // Verifica se a transição para a tela de modelos ocorreu com sucesso
});