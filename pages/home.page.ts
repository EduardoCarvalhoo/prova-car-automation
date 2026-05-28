import { expect, Page } from '@playwright/test';

export class HomePage {

    constructor(private page: Page) { }

    async access() {
        await this.page.goto('https://provaqa.fandi.com.br/');
    }

    async validateHomePage() {
        await expect(this.page.getByRole('heading', { name: 'Olá, bem-vindo ao ProvaCar' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'O seu sistema para cadastro' })).toBeVisible();
        await expect(this.page.getByText('A tela tem como objetivo ser')).toBeVisible();
        await expect(this.page.getByText('Seu desafio é descrever a')).toBeVisible();
        await expect(this.page.getByText('Em caso de erro, coloque')).toBeVisible();
        await expect(this.page.getByText('Em caso de melhoria, cite')).toBeVisible();
        await expect(this.page.getByText('Após concluir esse processo')).toBeVisible();
        await expect(this.page.getByText('Preparado para o desafio?')).toBeVisible();
    }

    async clickStartButton() {
    await this.page.getByRole('button', { name: 'Começar' }).click();
  }

  async accessTemplatesScreen() {
    await expect(this.page.getByRole('img', { name: 'FANDI' })).toBeVisible();
  }

}  