# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

### Caso teste CT-001

**Objetivo do teste:**

- Verificar a funcionalidade de criar uma conta no site.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail).

---

### Caso teste CT-002

**Objetivo do teste:**

- Verificar a funcionalidade de login do usuário.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail).

---

### Caso teste CT-003

**Objetivo do teste:**

- Verificar a funcionalidade de criar um perfil de pet no app.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Resultado do Teste:**

A aplicação atendeu ao objetivo do teste.
Ao clicar no botão "+" o usuário é direcionado para a tela "Cadastrar Pet" do sistema onde é possivel inserir as informações básicas do pet.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/066ff9b0d4185c483f9af6c2a156c12f65b97b25/docs/img/cadastrar%20pet.jpeg" width=25% alt="![caso03]">

---

### Caso teste CT-004

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos perfis de pet cadastrados em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Resultado do Teste:**

A aplicação atendeu ao objetivo do teste.
Na tela "Meus Pets" é possivel visualizar os pets que se encontram cadastrados no sistema para uma deteminada conta de usuário.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/316ce54ae93daf1c8cdcfe47df4973f105bb3d8a/docs/img/visualiza%20perfis.jpeg" width=25% alt="![caso04]">

---

### Caso teste CT-005

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos detalhes do perfil de um pet cadastrado em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Resultado do Teste:**

A aplicação atendeu ao objetivo do teste.
Ao clicar na foto do pet na página "Meus Pets" o usuário e direcionado para a página "InfoPet" onde é possivel visualizar as informaçoes detalhadas do animal.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/0f068b423c00394cd4c9b5065a4b6e9064bfeaed/docs/img/detalhes%20pet2.jpeg" width=25% alt="![caso051]">

---

### Caso teste CT-006

**Objetivo do teste:**

- Verificar a funcionalidade de Gerar Relatório do Pet

**Requisitos associados:**

RF-003: O sistema deverá permitir gerar um relatório com as informações de saúde dos animais (dados, vacinas já aplicadas, datas de aplicação, etc.).

**Resultado do Teste:**

A aplicação atendeu ao objetivo do teste.
Ao clicar na foto do pet na página "Meus Pets" o usuário e direcionado para a página "InfoPet" onde é possivel visualizar um relatório das vacinas aplicadas no no pet.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/0f068b423c00394cd4c9b5065a4b6e9064bfeaed/docs/img/detalhes%20pet.jpeg" width=25% alt="![caso05]">

---

### Caso teste CT-007

**Objetivo do teste:**

- Verificar a funcionalidade de Excluir o perfil de um Pet associado ao usuário.

**Requisitos associados:**

RF-004: O sistema deverá permitir a exclusão do perfil do pet, sem excluir a conta do responsável.

---

### Caso teste CT-008

**Objetivo do teste:**

- Verificar a funcionalidade 'Excluir conta de usuário'.

**Requisitos associados:**

RF-005: O sistema deverá permitir a exclusão da conta de usuário responsável do pet, excluindo automaticamente qualquer perfil de pet vinculado somente a ela no momento.

---

### Caso teste CT-009

**Objetivo do teste:**

- Verificar o funcionamento do aplicativo nos sistemas IOS e Android.

**Requisitos associados:**

RNF-001: O aplicativo deverá funcionar nos principais sistemas operacionais mobile (Android e IOS).

---

### Caso teste CT-010

**Objetivo do teste:**

- Verificar a funcionalidade de Editar perfil do usuário.

**Requisitos associados:**

RF-006: O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados.

---

### Caso teste CT-011

**Objetivo do teste:**

- Verificar a funcionalidade de Editar perfil do pet.

**Requisitos associados:**

RF-006: O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados.

---

### Caso teste CT-012

**Objetivo do teste:**

- Verificar a funcionalidade de adicionar uma vacina ao perfil do Pet.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Resultado do Teste:**

A aplicação atendeu ao objetivo do teste.
Ao clicar no botao "Cadastrar Vacina" o usuário e direcionado para a página de mesmo nome onde é possivel inserir as informaçoes sobre a vacina aplicada ao animal.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/76bc2d1b1990c8e82b959b03b5d980db5dca267e/docs/img/cadastrar%20vacina.jpeg" width=25% alt="![caso012]">

---

### Caso teste CT-013

**Objetivo do teste:**

- Verificar a funcionalidade de enviar notificação de vacinação.

**Requisitos associados:**

RF-007: O sistema deverá enviar notificações ao usuário assim que estiver próxima a data da próxima vacina de seu pet.

**Resultado do Teste:**

Funcionalidade não implementada até o momento. 
