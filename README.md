# Prova Car Automation

Este projeto contém testes automatizados utilizando o framework [Playwright](https://playwright.dev/).

## 🚀 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* npm (geralmente vem com o Node.js)

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/EduardoCarvalhoo/prova-car-automation.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd prova-car-automation
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Instale os navegadores do Playwright:
   ```bash
   npx playwright install
   ```

## 🛠️ Executando os Testes

Você pode executar os testes de várias maneiras:

* **Executar todos os testes (Modo Headless - padrão):**
  ```bash
  npm test
  ```

* **Executar testes em modo UI (Interface Gráfica):**
  ```bash
  npm run test:ui
  ```

* **Executar e ver o navegador (Modo Headed):**
  ```bash
  npx playwright test --headed
  ```

* **Executar testes e abrir o relatório automaticamente:**
  ```bash
  npm run report
  ```

* **Executar testes em um navegador específico (ex: Chromium):**
  ```bash
  npx playwright test --project=chromium
  ```

## 🎥 Gravando Novos Testes

O projeto possui scripts facilitadores para gravação de testes:

* **Gravar e salvar no arquivo específico:**
  ```bash
  npm run record:spec
  ```

* **Abrir o codegen genérico:**
  ```bash
  npm run record
  ```

## 🏗️ Arquitetura e Page Objects

Este projeto utiliza o padrão **Page Objects** para organizar os seletores e as interações com a página, facilitando a manutenção e o reaproveitamento de código.

As classes de página estão localizadas no diretório `pages/`:

*   **`HomePage`**: Gerencia as interações com a página inicial, validações de texto de boas-vindas e navegação inicial.
*   **`AutomotiveModelsPage`**: Gerencia a tela de modelos automotivos, incluindo:
    *   Filtragem de veículos.
    *   Criação de novos modelos.
    *   Edição e Exclusão de veículos.
    *   Auxiliares para limpeza e preenchimento de campos com máscara.

## 📁 Estrutura do Projeto

* `pages/`: Contém as classes de Page Objects (`.js`).
* `tests/`: Contém os arquivos de teste `.spec.js`.
* `playwright.config.js`: Configurações globais do Playwright.
* `package.json`: Dependências e scripts do projeto.
