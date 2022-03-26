# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Esta seção aborda o Plano de Testes de Software a ser aplicado neste projeto. Tal plano de testes foi elaborado pelos próprios desenvolvedores da aplicação, que também serão os responsáveis pela execução dos testes no sistema e do registro dos resultados.

## Plano de Testes de Software

Requisitos para realização dos testes:

- Apicativo disponivel para utilizar em  Android e IOS;
- Smartphenos (Android e/ou IOS), ou emulador Mobile
- Conectividade de Internet para acesso ao aplicativo.

Os testes funcionais a serem realizados na aplicação interativa são descritos a seguir:

### Caso teste CT-001

**Objetivo do teste:**

- Verificar a funcionalidade de criar uma conta no site.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a homepage do site;

    5- Clicar no botão 'Cadastro';

    6- Visualizar a página de Cadastrar Usuário;

    7- Visualizar os compos para preenchimento com os dados do usuário;

    8- Preencher as informações a cada um dos campos e suas exigências;

    9- Clicar no botão de 'Criar';

**Critérios de êxito:**

- O usuário deve conseguir criar uma conta no site;
- O usuário deve conseguir Logar na conta criada no site.

---

### Caso teste CT-002

**Objetivo do teste:**

- Verificar a funcionalidade de login do usuário.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

**Critérios de êxito:**

- O usuário deve conseguir logar em sua conta;
- O redirecionamento deverá levar o usuário para o DashBoard (Tela principal) da aplicação.

---

### Caso teste CT-003

**Objetivo do teste:**

- Verificar a funcionalidade de criar um perfil de pet no site.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Clicar na aba Pets e no botão ‘Adicionar Pet’ no menu à esquerda;

    9- Informar os dados do pet: Nome, Idade, Cachorro/Gato, Raça, Sexo, Peso, Data de Nascimento e Registo;

    10- Clicar no botão 'Adicionar'.

**Critérios de êxito:**

- O usuário deve conseguir criar um perfil de pet no site;

---

### Caso teste CT-004

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos perfis de pet cadastrados em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Clicar na aba 'Pets' no menu à esquerda para ser direcionado a página 'Meus Pets';

**Critérios de êxito:**

- O usuário deve conseguir observar todos os perfis de pet cadastrados em sua conta;

---

### Caso teste CT-005

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos detalhes do perfil de um pet cadastrado em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Clicar na aba 'Pets' no menu à esquerda para ser direcionado a página 'Meus Pets';

    9- Clicar no botão ‘Visualizar’ no perfil do pet desejado;

    10- Clicar em ‘Voltar’ para retornar ao menu com o perfil geral de todos os pets cadastrados.

**Critérios de êxito:**

- O usuário deve conseguir observar o perfil detalhado de um pet cadastrado em sua conta;

---

### Caso teste CT-006

**Objetivo do teste:**

- Verificar a funcionalidade de Gerar Relatório do Pet

**Requisitos associados:**

RF-003: O sistema deverá permitir gerar um relatório com as informações de saúde dos animais (dados, vacinas já aplicadas, datas de aplicação, etc.).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site *(https://petpass20211214211928.azurewebsites.net/)*;

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Clicar na aba 'Pets' no menu à esquerda para ser direcionado a página 'Meus Pets';

    9- Clicar no botão ‘Relatório’ do perfil do pet desejado;

    10- Clicar em ‘Voltar’ para retornar ao menu com o perfil geral de todos os pets cadastrados;

    11- Clicar em ‘Imprimir’ para imprimir o relatório.

**Critérios de êxito:**

- O usuário deve conseguir gerar uma versão para impressão do relatório;
- O relatório deve conter todas as informações dos Pets selecionados pelo usuário.

---

### Caso teste CT-007

**Objetivo do teste:**

- Verificar a funcionalidade de Excluir o perfil de um Pet associado ao usuário.

**Requisitos associados:**

RF-004: O sistema deverá permitir a exclusão do perfil do pet, sem excluir a conta do responsável.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Clicar na aba 'Pets' no menu à esquerda para ser direcionado a página 'Meus Pets';

    9- Clicar no botão ‘Deletar’ do perfil do pet desejado;

    10- O usuário será direcionado para a página Delete;

    11- Clicar no botão ‘Delete’ para confirmação da exclusão;

    12- Visualizar a página Meus Pets atualizada;

**Critérios de êxito:**

- O usuário deve conseguir excluir o perfil do pet cadastrado em sua conta;
- O redirecionamento deverá levar para a Tela Meus Pets da aplicação;
- O perfil do usuário não deve ser excluído juntamente com o perfil do Pet.

---

### Caso teste CT-008

**Objetivo do teste:**

- Verificar a funcionalidade Excluir conta de usuário.

**Requisitos associados:**

RF-005: O sistema deverá permitir a exclusão da conta de usuário responsável do pet, excluindo automaticamente qualquer perfil de pet vinculado somente a ela no momento.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Visualizar a tela DashBoard, clicar no texto 'Olá, Usuário' no campo superior direito;

    9- Visualizar a tela Editar Perfil e selecionar a opção 'Excluir Perfil';

    10- Clicar em 'Confirmar' na tela de exclusão;

    11- Visualizar a mensagem de confirmação;

**Critérios de êxito:**

- O usuário deve conseguir excluir a sua conta de usuário e os dos Pets associados;
- O redirecionamento deverá levar para o DashBoard (Tela principal do site) da aplicação.

---

### Caso teste CT-009

**Objetivo do teste:**

- Verificar o funcionamento do aplicativo nos sistemas IOS e Android.

**Requisitos associados:**

RNF-001: O aplicativo deverá funcionar nos principais sistemas operacionais mobile (Android e IOS).

**Passos:**

    1- Acessar o aplicativo pelo smartphoe com sistema operacional Android e /ou IOS;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Executar as principais funcionalidades do sistema: Cadastrar Pet, Cadastrar Vacina, Editar Perfil de Usuário, Excluir Pet, Excluir Perfil de Usuário, Gerar Relatório, etc;

**Critérios de êxito:**

- O sistema responde corretamente em todos os navegadores testados.

---

### Caso teste CT-010

**Objetivo do teste:**

- Verificar a funcionalidade de Editar perfil do usuário.

**Requisitos associados:**

RF-006: O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Visualizar a tela DashBoard, clicar no texto 'Olá, Usuário' no campo superior direito;

    9- Visualizar a tela Editar Perfil e alterar os campos desejados;

    10- Clicar em 'Salvar' na tela de exclusão;

    11- O usuário será direcionado para a tela de Detalhes;

**Critérios de êxito:**

- O usuário deve conseguir logar em sua conta;
- O usuário deve conseguir acessar o seu perfil com seus dados;
- O usuário deve conseguir salvar as alterações feitas;

---

### Caso teste CT-011

**Objetivo do teste:**

- Verificar a funcionalidade de Editar perfil do pet.

**Requisitos associados:**

RF-006: O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Clicar na aba ‘Pets’ no menu à esquerda;

    9- Clicar na opção ‘Editar’ no perfil do pet desejado;

    10- Alterar os dados desejados em cada campo específico;

    11-  Clicar em 'Salvar alterações';

    12- Caso deseje cancelar as alterações, clicar em 'Voltar'.

**Critérios de êxito:**

- O usuário deve conseguir acessar o perfil do pet;
- O usuário deve conseguir salvar as alterações feitas;

---

### Caso teste CT-012

**Objetivo do teste:**

- Verificar a funcionalidade de adicionar uma vacina ao perfil do Pet.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://petpass20211214211928.azurewebsites.net/);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no site;

    7- Clicar no botão de Entrar;

    8- Clicar na aba ‘Vacinas’ no menu à esquerda;

    9- Clicar no botão ‘Adicionar Vacina’ e

    10- Selecionar o perfil do pet desejado e preencher o restante dos campos solicitados;

    11- Clicar em 'Salvar';

**Critérios de êxito:**

- Ao acessar o perfil do Pet, deverá aparecer a vacina adicionada recentemente pelo usuário.

---

### Caso teste CT-013

**Objetivo do teste:**

- Verificar a funcionalidade de enviar notificação de vacinação.

**Requisitos associados:**

RF-007: O sistema deverá enviar notificações ao usuário assim que estiver próxima a data da próxima vacina de seu pet.

**Passos:**
