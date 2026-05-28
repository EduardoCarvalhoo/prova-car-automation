import { expect, Page } from '@playwright/test';

export class AutomotiveModelsPage {

    constructor(private page: Page) { }

    async validateFilters() {

        await this.page.locator('.form-group').filter({ hasText: 'Tipo:' }).locator('select').selectOption('1');
        await this.page.locator('.form-group').filter({ hasText: 'Fabricante:' }).locator('select').selectOption('1');
        await this.page.locator('.form-group').filter({ hasText: 'Família:' }).locator('select').selectOption('6682');
        await this.page.locator('.form-group').filter({ hasText: 'Molicar:' }).locator('input').fill('07000301-4');
        await this.page.locator('.form-group').filter({ hasText: 'Modelo:' }).locator('input').fill('Esse campo não funciona');
        await this.page.locator('.form-group').filter({ hasText: 'Cadastro Manual:' }).locator('select').selectOption('0');
        await this.page.locator('.form-group').filter({ hasText: 'Ativo:' }).locator('select').selectOption('0');
    }

    async updateVehicle() {
        await this.page.locator('[data-bind*="EditarModelo"]').first().click();
        await this.page.locator('.form-group').filter({ hasText: 'Cilindradas' }).locator('input').fill('3000');
        await this.page.getByRole('button', { name: 'Salvar' }).click();
        await expect(this.page.getByText('Modelo Atualizado com sucesso')).toBeVisible();
    }
}