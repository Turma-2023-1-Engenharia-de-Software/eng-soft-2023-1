# Relatório Especificação de Requisitos

## Engenharia de software 2023.1 | Universidade Federal do Tocantins - Palmas, 2023

## Introdução

O projeto desenvolvido na disciplina Engenharia de Software do semestre 2023.1 é dividido em etapas. Primeiramente, os integrantes descrevem os casos expandidos de uso e user stories dos requisitos funcionais do sistema. Foi combinado a utilização da plataforma GitHub para gerenciar e controlar as versões do projeto, além do método Kanban para gestão ágil, por meio da ferramenta Trello. Todo o trabalho será desenvolvido no formato markdown.

## Iteração 1

- [ ] RF01 - Inserir nome de usuário. [Benedito](https://github.com/orgs/Turma-2023-1-Engenharia-de-Software/people/beneX90) Revisado por [Jeová de Sousa Barbosa](https://github.com/jeovazin1v9)
- [ ] RF02 - Visualizar saldo. [Caio Henrique Pinho Santos](https://github.com/CaioHPS3) Revisado por [Diogo Eduardo da Silva](https://github.com/DioguBrabo)
- [ ] RF03 - Visualizar extrato. [Diogo Eduardo da Silva](https://github.com/DioguBrabo) Revisado por [Mateus Alves Araujo](https://github.com/MateusAlvez)
- [ ] RF04 - Inserir despesas. [Érick Santos Marçal](https://github.com/erarich) Revisado por [Gabriel Tavares](https://github.com/GabrielUFT)
- [ ] RF05 - Inserir receita. [Ícaro Mesquita Ponce]() Revisado por [Caio Henrique Pinho Santos](https://github.com/CaioHPS3)
- [ ] RF06 - Visualizar receitas (valor) no mês. [Jeová de Sousa Barbosa](https://github.com/jeovazin1v9) Revisado por [João Pedro Noronha](https://github.com/jpnoronhaa)
- [ ] RF07 - Visualizar despesas (valor) no mês. [João Pedro Noronha](https://github.com/jpnoronhaa) Revisado por [Wilque Muriel do Nascimento Coelho](https://github.com/uiuqM)
- [ ] RF08 - Inserir conta bancária. [Luan Porto](https://github.com/98loann) Revisado por [Sophia Menezes Pontes](https://github.com/SophiaMenezes)
- [ ] RF09 - Inserir cartão de crédito. [Luis Filipe Bandeira](https://github.com/luisfilipebandeira) Revisado por [Érick Santos Marçal](https://github.com/erarich)
- [ ] RF10 - Visualizar contas bancárias. [Marcos Vinicius Barbosa e Silva](https://github.com/eziors) Revisado por [Benedito](https://github.com/orgs/Turma-2023-1-Engenharia-de-Software/people/beneX90)
- [ ] RF11 - Visualizar contas de crédito. [Sophia Menezes Pontes](https://github.com/SophiaMenezes) Revisado por [Luan Porto](https://github.com/98loann)
- [ ] RF12 - Editar despesas. [Wilque Muriel do Nascimento Coelho](https://github.com/uiuqM) Revisado por [Marcos Vinicius Barbosa e Silva](https://github.com/eziors)
- [ ] RF13 - Editar receitas. [Mateus Alves Araujo](https://github.com/MateusAlvez) Revisado por [Ícaro Mesquita Ponce]()
- [ ] RF14 - Editar conta bancária. [Gabriel Tavares](https://github.com/GabrielUFT) Revisado por [Luis Filipe Bandeira](https://github.com/luisfilipebandeira)

## Casos de uso e user stories

## **RF01 - Inserir nome de usuário**

#### Autor: [autor](link_do_perfil_do_autor)

---

#### Revisor: [revisor](link_do_perfil_do_revisor)
<br />

---
## **RF04 - Inserir Despesas**
<br />

#### Autor: [Érick Santos Marçal](https://github.com/erarich)
#### Revisor: [Gabriel Tavares](https://github.com/GabrielUFT)
<br />

### Casos de Uso
<br />

|Item             | Descrição                                                           |
| --------------- | -----------------------------------------------------------------   |
| Caso de uso     | Inserir despesa                                                     |
| Resumo          | É esperado que o usuário tenha a possibilidade de iserir as despesas|
| Ator principal  | Usuário que faz uso da plataforma                                   |
| Ator secundário | Não possui                                                          | 
| Pré-condição    | É necessário que o usuário tenha uma conta na plataforma            |
| Pós-condição    | É necessário que para inserir a conta o usuário tenha feito login   |
<br />

#### Fluxo principal

| Passos  | Descrição                                                                   |
| ------- | -----------------------------------------                                   |
| Passo 1 | Entrar no aplicativo e fazer login                                          |
| Passo 2 | Entrar na seção de Despesas                                                 |
| Passo 3 | Clicar no botão "Inserir"                                                   |
| Passo 4 | Inserir campos do formulário                                                |
| Passo 5 | Salvar                                                                      |
<br />

#### Campos do formulário

| Campo            | Obrigatório? | Editável? | Formato      |
| ---------------- | ------------ | --------- | ------------ |
| Nome             | Sim          | Sim       | Texto        |
| Data             | Sim          | Sim       | Data         |
| Conta            | Sim          | Sim       | Texto        |
| Tipo             | Sim          | Sim       | Texto        |
| Valor            | Sim          | Sim       | Numérico     |

<br />

#### Opções do usuário


| Opção         | Descrição                 | Atalho |
| ------------- | ------------------------- | ------ |
| Inserir despesa | Confirmar dados inseridos |        |
<br />

#### Relatório de usuário

| Campo                      | Descrição                                                             | Formato |
| -------------------------- | --------------------------------------------------------------------- | ------- |
| Despesa inserida com sucesso | Isso confirma e garante todo êxito na operação de inserção de despesa   | Texto   |
<br />

                                   
### User Story
<br />

**Persona um, usuário comum.**

| Epic | User Story | Critério de aceitação |
| ----- | --------- | --------------------- |
| Eu enquanto "usuário comum" quero "ter o poder de entrar no aplicativo e inserir minhas despesas".| Enquanto "usuário comum" preciso ter minhas despesas salvas na plataforma a fim de ter um controle sobre os meus gastos | Certificar que todos campos estao preenchidos

