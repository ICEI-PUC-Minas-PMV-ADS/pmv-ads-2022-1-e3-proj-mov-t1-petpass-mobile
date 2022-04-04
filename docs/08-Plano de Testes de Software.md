# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Esta seção aborda o Plano de Testes de Software a ser aplicado neste projeto. Tal plano de testes foi elaborado pelos próprios desenvolvedores da aplicação, que também serão os responsáveis pela execução dos testes no sistema e do registro dos resultados.

## Plano de Testes de Software

Requisitos para realização dos testes:

- Apicativo disponivel para utilizar em  Android e IOS;
- Smartphones (Android e/ou IOS), ou emulador Mobile
- Conectividade de Internet para acesso ao aplicativo.

Os testes funcionais a serem realizados na aplicação interativa são descritos a seguir:

### Caso teste CT-001

**Objetivo do teste:**

- Verificar a funcionalidade de criar uma conta no site.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail).

**Passos:**

    1- Acessar o aplicativo;

    2- Visualizar a homepage;

    3- Clicar no botão 'Cadastro';

    4- Visualizar a página de Cadastrar Usuário;

    5- Visualizar os campos para preenchimento com os dados do usuário;

    6- Preencher as informações a cada um dos campos e suas exigências;

    7- Clicar no botão de 'Cadastrar';

**Critérios de êxito:**

- O usuário deve conseguir criar uma conta no app;
- O usuário deve conseguir Logar na conta criada no app.

---

### Caso teste CT-002

**Objetivo do teste:**

- Verificar a funcionalidade de login do usuário.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail).

**Passos:**

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no app;

    5- Clicar no botão de Entrar;

**Critérios de êxito:**

- O usuário deve conseguir logar em sua conta;
- O redirecionamento deverá levar o usuário para a tela "Meus Pets" da aplicação.

---

### Caso teste CT-003

**Objetivo do teste:**

- Verificar a funcionalidade de criar um perfil de pet no app.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no app;

    5- Clicar no botão de Entrar;

    6- Clicar na aba Pets e no botão ‘Cadastrar Pet’;

    7- Informar os dados do pet: Nome, Idade, Cachorro/Gato, Raça, Sexo, Peso, Data de Nascimento e Registo;

    8- Clicar no botão 'Cadastrar'.

**Critérios de êxito:**

- O usuário deve conseguir criar um perfil de pet no app;

---

### Caso teste CT-004

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos perfis de pet cadastrados em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

*OBS: Esse teste deve ser feito somente após o cadastro de pelo menos um pet na conta do usuário.*

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no app;

    5- Clicar no botão de Entrar;

**Critérios de êxito:**

- O usuário deve conseguir observar todos os perfis de pet cadastrados em sua conta;

---

### Caso teste CT-005

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos detalhes do perfil de um pet cadastrado em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no site;

    5- Clicar no botão de Entrar;

    6- Na tela Meus Pets', clicar no ícone 'visualizar' do pet desejado;

    7- Clicar em ‘Voltar’ para retornar à tela 'Meus pets', com o perfil geral de todos os pets cadastrados.

**Critérios de êxito:**

- O usuário deve conseguir observar o perfil detalhado de um pet cadastrado em sua conta;

---

### Caso teste CT-006

**Objetivo do teste:**

- Verificar a funcionalidade de Gerar Relatório do Pet

**Requisitos associados:**

RF-003: O sistema deverá permitir gerar um relatório com as informações de saúde dos animais (dados, vacinas já aplicadas, datas de aplicação, etc.).

**Passos:**

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no site;

    5- Clicar no botão de Entrar;

    6- Na tela Meus Pets', clicar no ícone 'visualizar' do pet desejado;

    7- Clicar em 'Relatório'.

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

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no site;

    5- Clicar no botão de Entrar;
    
    6- Na tela Meus Pets', clicar no ícone 'visualizar' do pet desejado;

    6- Na tela do perfil do pet clicar no ícone de 'excluir pet';

    7- Clicar em 'Excluir' na janela de confirmação.

**Critérios de êxito:**

- O usuário deve conseguir excluir o perfil do pet cadastrado em sua conta;
- O redirecionamento deverá levar para a Tela Meus Pets da aplicação;
- O perfil do usuário não deve ser excluído juntamente com o perfil do Pet.

---

### Caso teste CT-008

**Objetivo do teste:**

- Verificar a funcionalidade 'Excluir conta de usuário'.

**Requisitos associados:**

RF-005: O sistema deverá permitir a exclusão da conta de usuário responsável do pet, excluindo automaticamente qualquer perfil de pet vinculado somente a ela no momento.

**Passos:**

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no site;

    5- Clicar no botão de Entrar;

    6- Na tela Meus Pets', clicar no ícone 'Perfil';

    7- Na tela do perfil do usuário, clicar em ‘Excluir’;
    
    8- Clicar em 'Excluir' na janela de confirmação.

**Critérios de êxito:**

- O usuário deve conseguir excluir a sua conta de usuário e os dos Pets associados;
- O redirecionamento deverá levar para a tela de login da aplicação.

---

### Caso teste CT-009

**Objetivo do teste:**

- Verificar o funcionamento do aplicativo nos sistemas IOS e Android.

**Requisitos associados:**

RNF-001: O aplicativo deverá funcionar nos principais sistemas operacionais mobile (Android e IOS).

**Passos:**

    1- Acessar o aplicativo pelo smartphoe com sistema operacional Android e /ou IOS;

    4- Visualizar na homepage do site e clicar no botão de 'Login';

    5- Visualizar os campos de e-mail e senha na Página de Login;

    6- Preencher os campos com o e-mail e a senha cadastrados no app;

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

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no site;

    5- Clicar no botão de Entrar;

    6- Na tela Meus Pets', clicar no ícone 'Perfil';

    7- Na tela do perfil do usuário, clicar em ‘Editar’;
    
    8- Editar os campos liberados e depois clicar em 'Salvar'.

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

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no site;

    5- Clicar no botão de Entrar;
    
    6- Na tela Meus Pets', clicar no ícone 'editar' do pet desejado;

    7- Na tela do perfil do pet, editar os campos liberados;

    8- Clicar em 'Salvar'.

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

    1- Acessar o aplicativo;

    2- Visualizar na homepage do app e clicar no botão de 'Login';

    3- Visualizar os campos de e-mail e senha na Página de Login;

    4- Preencher os campos com o e-mail e a senha cadastrados no site;

    5- Clicar no botão de Entrar;
    
    6- Na tela Meus Pets', clicar no ícone 'visualizar' do pet desejado;

    7- Na tela do perfil do pet, clicar no ícone 'adicionar vacina';

    8- Preencher os campos requeridos na tela de cadastrar vacina;
    
    9- Clicar em 'Cadastrar'.

**Critérios de êxito:**

- Ao acessar o perfil do Pet, deverá aparecer a vacina adicionada recentemente pelo usuário.

---

### Caso teste CT-013

**Objetivo do teste:**

- Verificar a funcionalidade de enviar notificação de vacinação.

**Requisitos associados:**

RF-007: O sistema deverá enviar notificações ao usuário assim que estiver próxima a data da próxima vacina de seu pet.

