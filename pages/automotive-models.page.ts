import { expect, Page, Locator } from '@playwright/test';

export class AutomotiveModelsPage {

    constructor(private page: Page) { }

    async validateFilters() { // Valida a funcionalidade de filtros preenchendo diversos campos de busca
        await this.page.locator('.form-group').filter({ hasText: 'Tipo:' }).locator('select').selectOption('1');
        await this.page.locator('.form-group').filter({ hasText: 'Fabricante:' }).locator('select').selectOption('1');
        await this.page.locator('.form-group').filter({ hasText: 'Família:' }).locator('select').selectOption('6682');
        await this.page.locator('.form-group').filter({ hasText: 'Molicar:' }).locator('input').fill('07000301-4');
        await this.page.locator('.form-group').filter({ hasText: 'Modelo:' }).locator('input').fill('Esse campo não funciona');
        await this.page.locator('.form-group').filter({ hasText: 'Cadastro Manual:' }).locator('select').selectOption('0');
        await this.page.locator('.form-group').filter({ hasText: 'Ativo:' }).locator('select').selectOption('0');
    }

    async updateVehicle() { // Realiza a edição e atualização de um veículo existente e valida a mensagem de sucesso
        await this.page.locator('[data-bind*="EditarModelo"]').first().click();
        await this.page.locator('.form-group').filter({ hasText: 'Cilindradas' }).locator('input').fill('3000');
        await this.page.getByRole('button', { name: 'Salvar' }).click();
        await expect(this.page.getByText('Modelo Atualizado com sucesso')).toBeVisible();
    }

    async deleteVehicle() { // Aciona a funcionalidade de exclusão de um modelo de veículo
        await this.page.locator('[data-bind*="RemoverModelo"]').first().click();
    }

    async createModel() { // Executa o fluxo completo de criação de um novo modelo de veículo
        await this.page.locator('#botaoNovoVeiculo').click();
        await this.page.locator('#novoFabricante').selectOption('32');
        await this.page.locator('[data-bind*="options: NovoModelo.FamiliaFiltrado"]').selectOption('150');
        await this.page.locator('[data-bind*="value: NovoModelo.Molicar"]').fill('123456');
        await this.page.locator('[data-bind="value: NovoModelo.Modelo"]').fill('Civic');
        await this.page.locator('[data-bind*="NovoModelo.CombustivelSelecionado"]').selectOption('GG');

        const portasInput = this.page.locator('[data-bind*="portaMask: NovoModelo.Portas"]')
        await this.clearAndFill(portasInput, '4');

        const cilindradasInput = this.page.locator('[data-bind*="anoVeiculoMask: NovoModelo.AnoInicio"]');
        await this.clearAndFill(cilindradasInput, '2025');

        const anoFimInput = this.page.locator('[data-bind*="value: NovoModelo.AnoFim"]');
        await this.clearAndFill(anoFimInput, '2026');

        await this.page.locator('[data-bind*="integerMask: NovoModelo.Cilindradas"]').fill('150');
        await this.page.locator('[data-bind*="integerMask: NovoModelo.Cavalos"]').fill('500');
        await this.page.locator('#btnSalvar').click();
        await expect(this.page.getByText('Modelo Cadastrado com sucesso')).toBeVisible();
    }

    async clearAndFill(locator: Locator, value: string): Promise<void> { // Método auxiliar para limpar campos antes de preenchê-los
        await locator.clear();
        await locator.fill(value);
    }
}