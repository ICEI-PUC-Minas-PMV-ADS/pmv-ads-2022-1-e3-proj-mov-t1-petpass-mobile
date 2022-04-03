
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## Diagrama de Fluxo

O diagrama apresenta o estudo do fluxo de interação do usuário com o sistema interativo e  muitas vezes sem a necessidade do desenho do design das telas da interface. Isso permite que o design das interações seja bem planejado e gere impacto na qualidade no design do wireframe interativo que será desenvolvido logo em seguida.

O diagrama de fluxo pode ser desenvolvido com “boxes” que possuem internamente a indicação dos principais elementos de interface - tais como menus e acessos - e funcionalidades, tais como editar, pesquisar, filtrar, configurar - e a conexão entre esses boxes a partir do processo de interação. 

A seguir, tem-se o Diagrama de Fluxo contruído para a aplicação do Pet Pass.

![Diagrama_de_Fluxo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e2-proj-int-t3-petpass/blob/main/docs/img/Diagrama%20de%20Fluxo.png?raw=true)

## Wireframes

São protótipos usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.

A imagem abaixo mostra uma visão geral dos Wireframes da aplicação Pet Pass e seu fluxo de usuário:

![Wireframe](https://github.com/gabrielsantos-gsp/pmv-ads-2021-2-e2-proj-int-t3-petpass/blob/main/docs/img/Wireframe.png?raw=true)

### Telas iniciais:

- **Homepage:** Tela de apresentação, que também proporciona ao usuário o conhecimento inicial das funcionalidades e objetivos do projeto.
- **Tela de Login:** Tela responsável pela autenticação de clientes cadastrados no sistema. Caso o cliente tenha esquecido a senha de acesso ele será direcionado a tela para recuperação.
- **Tela de Cadastro do Usuário:** Tela responsável pelo cadastro de novos usuários no sistema.

![Telas Iniciais]()

### Telas intermediárias:

Dão uma visão geral da aplicação, após autenticação do usuário. Na imagem são mostradas três telas: a primeira mostra o ambiente do Pet Pass sem nenhum pet cadastrado; a segunda mostra a mesma tela, porém com diversos pets cadastrados; a terceira mostra a tela de visualização do perfil do usuário, onde este poderá também editar suas informações de cadastro.

![Telas Intermediárias]()

### Telas de cadastro:

São as telas onde serão feitos os cadatros dos pets e das vacinas. Nelas constam todos os campos para preenchimento das informações necessárias para criar o perfil do pet e sua carteira vacinal.

![Telas de cadastro]()

### Telas de edição:

Tela que inicialmente convida o usuário a realizar o cadastro de um Pet. Após o cadastro é possível observar uma visualização resumida do perfil do Pet, contendo as opções de: visualização (detalhada), edição, exclusão e relatório do pet.

![Telas de edição]()

### Telas de exclusão:

Tela responsável pelo cadastro do perfil Pet, associado ao perfil do usuário, no sistema. Possui os atributos: nome, idade, raça, sexo, peso e a opção de escolha entre gato e cachorro.

![Telas de exclusão]()

### Tela de Relatório:

Tela que inicialmente convida o usuário a realizar o cadastro de uma vacina, associando-a a um Pet já cadastrado previamente por ele. Após o cadastro é possível observar uma visualização resumida do perfil do Pet relacionado à Vacina cadastrada, contendo as opções de: visualização (detalhada), edição, exclusão de vacina.

![Tela de Relatório]()

### Tela Cadastrar Vacina:

Tela responsável pela associação de uma vacina existente no banco de dados do sistema a um Pet previamente cadastrado, associado ao perfil do usuário, no sistema. Possui os atributos: nome do Pet, descrição da vacina, dose, data de aplicação e idade de aplicação.

![Tela Cadastrar Pets](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e2-proj-int-t3-petpass/blob/main/docs/img/cadastrarVacinas.PNG?raw=true)

### Tela Editar Perfil Pet:

Tela responsável por realizar a edição dos dados cadastrados inicialmente no perfil Pet: alteração de nome, idade, raça, sexo, peso e a opção de escolha entre gato e cachorro.

![Tela Editar Pet](img/ct11-editar-pet.png)

### Tela Excluir Perfil Pet:

Tela responsável por realizar a exclusão do perfil do Pet associado a um usuário no sistema.

![Tela Excluir Pet](img/Teste07-et4.PNG)

### Tela Gerar Relatório:

Tela utilizada para gerar o relatório de vacinação do Pet selecionados.

![Tela Gerar Relatório](img/Teste06-et4.PNG)
