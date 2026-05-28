// @ts-check
import { test, expect } from '@playwright/test';

test('Acessar o ProvaCar', async ({ page }) => {
  await page.goto('https://provaqa.fandi.com.br/');

  await expect(page.getByRole('heading', { name: 'Olá, bem-vindo ao ProvaCar' })).toBeVisible();
  await page.getByRole('button', { name: 'Começar' }).click();
});

