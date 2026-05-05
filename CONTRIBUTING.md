# Guia de Contribuição - PITCHMATCHING GOVTECH

Este documento serve para organizar o fluxo de trabalho da nossa equipe e garantir que o Front-end e o Back-end caminhem juntos.

## A Equipe
* **Front-end:** Paulo e Suelle
* **Back-end:** Eulália e Pâmela
---

## Stack Tecnológica
* **Front-end:** React & TypeScript
* **Back-end:** A definir
* **Banco de Dados (indispensável) :** A definir

---

## Fluxo do Git
Para evitar conflitos, nunca trabalhamos diretamente na branch `main`.

1.  **Criação de Branch:** Crie uma branch para a tarefa em que você vai trabalhar:
2.  **Commits:** Escreve mensagens de claras (ex: `feat: criando componente de card para a vitrine`).
3.  **Pull Requests (PR):** Ao terminar, abre um PR para a `main`.

---

## Organização de Tarefas (MVP)
Dividiremos o desenvolvimento com base nas funcionalidades principais da plataforma:

### 1. Gestão de Demandas (Foco: Setor Público)
* **Back:** Criar CRUD de demandas e lógica de upload de editais.
* **Front:** Criar formulário de cadastro guiado e painel do gestor.

### 2. Vitrine de Inovação (Foco: Solucionadores)
* **Back:** Criar sistema de busca e filtros (área, valor, prazo).
* **Front:** Criar a visualização em "cards" e os filtros inteligentes.

### 3. Sistema de Match e Comunicação
* **Back:** Lógica de notificações e chat básico entre as partes.
* **Front:** Interface do chat e painel do proponente.

---
## O que é o CRUD de Demandas?
Para o nosso projeto, o Back-end será responsável por criar as rotas que permitem as quatro operações básicas no banco de dados para as **Demandas de Inovação**:

* **C - Create (Criar):** Rota para o Gestor Público cadastrar uma nova demanda (título, órgão, orçamento e tal).
* **R - Read (Ler):** Rota para buscar as demandas e exibi-las na "Vitrine Pública" ou no "Painel do Gestor".
* **U - Update (Atualizar):** Rota para editar informações de uma demanda já existente (ex: mudar o prazo ou corrigir a descrição).
* **D - Delete (Deletar):** Rota para excluir uma demanda do sistema caso seja necessário.
---

## Padronização
* **Nomenclatura:** Usaremos `camelCase` (esseTipo) para variáveis e `PascalCase` (EsseTipo) para componentes (Front).

---

## Para começar
1.  Clonar o repositório
2.  Instalar as dependências (se já tiver)
3.  Crie a sua branch

---

## Para testar

1. Abra a pasta do projeto (PitchMatching-GovTech) pelo vsCode (ou outra IDE) e abra o terminal
2. Digite <code> cd pitchmatching </code>
3. Digite <code> npm install </code>
4. Digite <code> npm install react-router-dom </code>
5. Digite <code> npm run dev </code>
6. Clique no link que gera no terminal
