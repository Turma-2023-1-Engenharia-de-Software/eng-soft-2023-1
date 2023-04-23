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





# **RF02 - Visualizar saldo**

#### Autor: [@CaioHPS3](https://github.com/CaioHPS3) - Caio Henrique Pinho Santos

---

#### Revisor: [Diogo Eduardo da Silva](https://github.com/DioguBrabo)

<br/>

## Caso de uso

| Item            | Descrição                                                                           |
| --------------- | ----------------------------------------------------------------------------------- |
| Caso de uso     | RF02 - Visualizar o saldo;                                                       |
| Resumo          | Visualiza o saldo para que possa saber sua situação bancaria; |
| Ator principal  | Usuário - Visualiza seu saldo;                                                    |
| Ator secundário | -                                                                                   |
| Pré-condição    | O(s) ator(es) deve ter acessado o sistema do aplicativo;                          |
| Pós-condição    | -                                                                                   |

<br/>

#### Fluxo principal

| Passos  | Descrição                                           |
| ------- | --------------------------------------------------- |
| Passo 1 | O usuário seleciona a opção de visualizar o saldo no menu principal.            |
| Passo 2 | O sistema exibe o saldo atual do usuário. |



## User story

**Persona um, usuário comum.**

| Epic                                                                                                                                    | User Story                                                                                                                                                              | Critério de aceitação                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| “Como **um usuário do aplicativo financeiro** eu quero **visualizar o meu saldo atual** para que **eu possa ter uma visão geral da minha situação financeira em um único lugar.**” | Enquanto **um usuário do aplicativo** eu preciso ser capaz de **visualizar o  meu saldo** para que **eu tenha um controle da minha situação financeira.** | Certifique-se de que o usuário é capaz de **acessar o aplicativo**. |

<br/>

## **RF07 - Visualizar despesas (valor) no mês**

<br/>

#### Autor: [João Pedro Noronha](https://github.com/jpnoronhaa)

---
#### Revisor: [Wilque Muriel do Nascimento Coelho](https://github.com/uiuqM) 

|Item             | Descrição                                                         |
| --------------- | ----------------------------------------------------------------- |
| Caso de uso     | Visualizar despesas (valor) no mês                                |
| Resumo          | Visualiza o somatório das despesas que o usário teve no mês       |
| Ator principal  | Usuário que faz uso da plataforma                                 |
| Ator secundário | Não possui                                                        | 
| Pré-condição    | É necessário que o usuário tenha uma conta na plataforma e adicionado alguma despesa                                                                               |
| Pós-condição    | Não possui                                                        | 

#### Fluxo principal
| Passos  | Descrição                                 |
| ------- | ----------------------------------------- |
| Passo 1 | Entrar no aplicativo e fazer login        |
| Passo 2 | Visualizar o valor das despesas           |
#### Campos do formulário
| Campo            | Obrigatório? | Editável? | Formato      |
| ---------------- | ------------ | --------- | ------------ |
| Despesas         | Não          | Não       | Texto        |
#### Opções do usuário
| Opção             | Descrição                                                         | Atalho |
| ----------------- | ----------------------------------------------------------------- | ------ |
| Esconder despesas | Trocar o texto que mostra o valor das despesas por um alternativo |        |
#### Relatório de usuário

| Campo      | Descrição  | Formato |
| ---------- | ---------- | ------- |
| Não possui |            |         |
#### Fluxo alternativo
| Passos    | Descrição                                               |
| --------  | ------------------------------------------------------- |
| Passo 1.1 | O ator não cadastrou nenhuma despesa                    |
| Passo 1.2 | O sistema informa que não existem despesas cadastradas  |
# User Story

**Persona um, usuário comum.**

| Epic | User Story | Critério de aceitação |
| ----- | --------- | --------------------- |
| Eu enquanto **usuario comum** quero **visualizar o valor das minhas despesas do mês** para **ter mais controle com meus próximos gastos**. | Enquanto um **usuário do aplicativo** eu preciso ser capaz de **visualizar o valor das minhas despesas ou ocultá-las** para que **eu tenha um controle da minha situação financeira**. | O usário poderá ver o valor das despesas do mês ou ocultá-las, se preferir, utilizando um botão ao lado. 

<br/>