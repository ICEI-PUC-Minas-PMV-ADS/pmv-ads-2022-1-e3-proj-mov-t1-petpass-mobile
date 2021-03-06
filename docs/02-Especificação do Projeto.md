# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição do problema e os pontos mais relevantes a serem tratados no escopo deste projeto foram consolidados na forma de personas e histórias de usuários, para melhor entendimento das necessidades do cliente e de seu público alvo.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas abaixo.

### Priscila Amaral

- **Idade:** 32 anos
- **Ocupação:** Dona de um abrigo de animais
- **Motivação:** Encontrar um lar para animais abandonados.
- **História:** Desde pequena, Priscila sempre teve animais de estimação. Daí veio sua inspiração para se tornar uma médica veterinária pois, diante do seu amor pelos bichinhos, passou a dedicar sua vida a cuidar deles. Fundou um abrigo para acolher animais abandonados, ou em situação de rua, e incentiva a adoção dos mesmos.
- **Necessidade:** Um de seus desejos é ter um meio mais prático para registrar as informações importantes sobre a vacinação dos animais que se encontram em seu abrigo, já que são muitos.

![Priscila Amaral](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Persona_Priscila%20Amaral.jpg?raw=true)

### Elena Lima

- **Idade:** 40 anos
- **Ocupação:** Advogada e Empresária
- **Motivação:** Com seu hotelzinho de animais, visa prestar o melhor serviço a eles e garantir a satisfação dos donos.
- **História:** Após se formar como advogada, Elena resolveu investir em um setor que está em crescimento, o de hotel de animais. Desde sempre amou seus diversos pets e quis conciliar essa característica com a vontade de crescer financeiramente.
- **Necessidade:** Conhecer os registros de vacinas dos animais antes de hospedá-los em seu hotel.

![Elena Lima](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Persona_Elena%20Lima.jpg?raw=true)

### Fernanda Amorim

- **Idade:** 33 anos
- **Ocupação:** Analista Contábil em uma empresa multinacional
- **Motivação:** Cuidar bem dos seus pets para proporcionar a eles uma boa qualidade de vida.
- **História:** Desde a infância Sempre gostou da companhia de animais e agora resolveu adotar um cachorro e um gato de rua.
- **Necessidade:** Gostaria de ter um local onde possa armazenar as informações referente as vacinas que já foram aplicadas em cada um dos seus pets (nome da vacina, data de aplicação, etc.).

![Fernanda Amorim](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Persona_Fernanda%20Amorim.jpg?raw=true)

### Carlos Silva

- **Idade:** 70 anos
- **Ocupação:** Professor aposentado
- **Motivação:** Ter um modo mais fácil de registrar os dados de vacinação de seu cachorro e de seu gato.
- **História:** Desde pequeno Carlos teve animais diversos. Quando se aposentou, aos 65 anos, resolveu adotar um gato e um cachorro para sua companhia. Hoje em dia vive com esses animais e tem a intenção de mantê-los saudáveis e com cronogramas vacinais em dia.
- **Necessidade:** Como sempre perde os cartões de vacinação de seus animais, Carlos deseja um local onde possa guardar e acessar os dados vacinais de seus animais de maneira fácil, prática e intuitiva.

![Carlos Silva](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Persona_Carlos%20Silva.jpg?raw=true)

### Jorge Lima

- **Idade:** 42 anos
- **Ocupação:** Assistente de clínica veterinária
- **Motivação:** Ter um ambiente digital para registrar os dados dos pacientes e seus cadastros de vacinação e medicamentos.
- **História:** Desde pequeno Jorge conviveu com os animais, pois seu pai é dono de uma clínica veterinária. Atualmente, Jorge é estudante de medicina veterinária e trabalha como assistente de seu pai na clínica de sua família.
- **Necessidade:** Jorge está trabalhando para modernizar os processos burocráticos da clínica e viu a oportunidade de digitalizar o primeiro cadastro dos pacientes. Dessa forma os dados dos animais estariam disponíveis também na forma digital, bem como seu cronograma de vacinação.

![Jorge Lima](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Persona_Jorge%20Lima.jpg?raw=true)

## Histórias de Usuários

A partir da compreensão do cotidiano das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                                                           | PARA ... `MOTIVO/VALOR`                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priscila Amaral      | registrar informações básicas dos animais (dados)                                                            | facilitar o controle para adoção.                                                                                                                                                     |
| Priscila Amaral      | controlar de forma mais prática a vacinação                                                                  | manter atualizadas as vacinas que já foram dadas.                                                                                                                                     |
| Elena Lima           | consultar os dados de vacinação dos animais                                                                  | aceitar hospedá-los no meu hotel com maior segurança.                                                                                                                                 |
| Fernanda Amorim      | encontrar uma solução para programar as datas de aplicação das vacinas dos meus pets                         | não pôr em risco a saúde dos meus animais.                                                                                                                                            |
| Fernanda Amorim      | encontrar uma solução digital que me permita ter o controle de quais vacinas já foram aplicados em meus pets | não precisar depender apenas da carteira física de vacinação.                                                                                                                         |
| Carlos Silva         | encontrar uma aplicação onde seja fácil registrar informações básicas de vacinação dos animais               | tornar mais fácil o controle das vacinas, pois tenho dificuldade em lembrar onde guardei os cartões de vacinação e também não tenho muita familiaridade em acessar _sites_ complexos. |
| Jorge Lima           | encontrar uma aplicação onde eu possa fazer o registro dos animais (pacientes) que vêm à minha clínica       | tornar mais fácil o controle das vacinas, mantendo também no formato digital os registros dos pacientes.

## Modelagem do Processo de Negócio 

A modelagem do processo de negócio foi feita utilizando-se a notação BPMN (*Business Process Model Notation*), gerando um fluxograma para cada situalção.

### Análise da Situação Atual

Atualmente, o procedimento de registro oficial de um pet exige que o tutor leve o animal ao veterinário para que este o examine, dê as primeiras vacinas e prepare sua carteira de vacinação física. Esse processo é feito totalmente de forma manual, sendo o tutor do pet a pessoa responsável por guardar o cartão físico de vacinação durante toda a vida de seu melhor amigo, sempre carregando-o consigo nas consultas ao veterinário e em eventuais viagens com seu pet.

O fluxograma abaixo ilustra este processo:

![Processo atual](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Processo%20sem%20o%20Pet%20Pass_.PNG?raw=true)

### Descrição Geral da Proposta

A proposta do Pet Pass mobile é tornar parte do processo de registro e acompanhamento do esquema vacinal dos pets mais automatizada, flexível e de fácil acesso. Com o Pet Pass, o proprio tutor do pet poderá fazer seu registro assim que adotar seu melhor amigo, levando, posteriormente, para o veterinário conferir as informações e adicionar os dados de vacinação. Todas as informações do pet poderão ficar armazenadas no aplicativo e relatórios atualizados poderão ser emitidos para o acampanhamento do veterinário, ou apresentação em aeroportos, hotéis, etc. Além disso o sistema também dará lembretes ao usuário sobre as datas das próximas vacinas.

O fluxograma abaixo ilustra o novo processo, utilizando o PetPass mobile como ferramenta:

![Processo com o Pet Pass](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Processo%20com%20Pet%20Pass_.PNG?raw=true)

Para entender melhor o funcionamento interno dos processos que ocorrem dentro do aplicativo do Pet Pass, foi elaborado um fluxograma de processo da aplicação.

![Fluxograma de Processo do Pet Pass_1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Diagrama%20processo_1.PNG?raw=true)
![Fluxograma de Processo do Pet Pass_2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Diagrama%20processo_2.PNG?raw=true)
![Fluxograma de Processo do Pet Pass_3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Diagrama%20processo_3.PNG?raw=true)
![Fluxograma de Processo do Pet Pass_4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Diagrama%20processo_4.PNG?raw=true)

## Indicadores de Desempenho

Os indicadores estabelecidos para a avaliação do desempenho do aplicativo do Pat Pass, após sua disponibilização na Play Store e na Apple Store, são detalhados a seguir:

![Indicadores de desempenho](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Indicadores%20de%20desempenho.PNG?raw=true)

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

A abordagem utilizada na priorização dos requisitos para o desenvolvimento do Pet Pass mobile foi a técnica de Escala de Três Níveis que, independente das nomenclaturas adotadas ou dos possíveis valores sugeridos, possibilita classificar os requisitos em três níveis: Alto, Médio e Baixo. Assim, a técnica da Escala de Três Níveis busca delimitar o universo de possíveis valores desse atributo para tais possibilidades, de modo que a prioridade seja uniformizada e melhor entendida por todos do time. 

Visto que esta é uma técnica bastante simples, é comum que sejam estabelecidos os níveis de prioridade de acordo com dois aspectos principais: importância e urgência. Assim, forma-se um quadrante, capaz de criar prioridades que combinem esses aspectos. A imagem a seguir ilustra essa divisão em quadrantes.

![Classificação de Requisitos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Cassificacao_requisitos.PNG?raw=true)

### Requisitos Funcionais

A tabela abaixo apresenta os requisitos funcionais do projeto, identificando a prioridade em que os mesmos devem ser entregues, de acordo com a técnica da Escala de Três Níveis.

| ID     | Descrição do Requisito  | Prioridade |
| ------ | ----------------------- | ---------- |
| **RF-001** | **O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet associado ao seu e-mail.** | **ALTA** |
| RF-002 | O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação). | ALTA |
| RF-003 | O sistema deverá permitir gerar um relatório com as informações de saúde dos animais (dados do pet, vacinas aplicadas, datas de aplicação, etc.).| ALTA |
| RF-004 | O sistema deverá permitir a exclusão do perfil do pet, sem excluir a conta do responsável. | MÉDIA |
| RF-005 | O sistema deverá permitir a exclusão da conta do usuário responsável pelo pet, excluindo também qualquer perfil de pet vinculado a ela. | MÉDIA |
| RF-006 | O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados e das vacinas aplicadas. | ALTA |
| RF-007 | O sistema deverá enviar notificações ao usuário assim que estiver próxima a data da próxima vacina de seu pet. | BAIXA |

### Requisitos não Funcionais

A tabela abaixo apresenta os requisitos não funcionais que o projeto deverá atender, identificando a prioridade em que os mesmos devem ser entregues, de acordo com a técnica da Escala de Três Níveis.

| ID      | Descrição do Requisito  | Prioridade |
| ------- | ----------------------- | ---------- |
| RNF-001 | O sistema deverá funcionar nos principais sistemas Mobile, como Android e IOS | ALTA |
| RNF-004 | A segurança no armazenamento e na manipulação dos dados do dono e do pet deve seguir as diretrizes da Lei Geral de Proteção de Dados (LGPD). | MÉDIA |
| RNF-005 | O sistema deverá ser intuitivo e de fácil utilização, para atender também ao público idoso.| ALTA |
| RNF-006 | O sistema deverá estar disponível para acesso 24h por dia, exceto quando em manutenção. | BAIXA |
| RNF-007 | O sistema deverá disponibilizar as informações cadastrais do responsável e do pet apenas para o usuário responsável pela conta e para a equipe de desenvolvimento e manutenção do software | MÉDIA |

## Restrições

As questões que limitam a execução deste projeto e que se configuram como obrigações claras para seu desenvolvimento são apresentadas na tabela abaixo.

| ID     | Restrição                                                                                                  |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| RE-001 | O sistema deverá ser entregue pronto e funcional ao final do semestre letivo.                              |
| RE-002 | O sistema deverá ser uma aplicação Mobile.                                                                 |
| RE-003 | O sistema deverá utilizar uma Web API para fazer persistência de dados de uma aplicação móvel.             |
| RE-004 | O sistema deverá permitir apenas o cadastro de cães e gatos num primeiro momento.                          |
| RE-005 | O sistema deverá ser elaborado pelos próprios alunos, não podendo subcontratar o serviço de terceiros.     |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o primeiro esboço da aplicação a ser desenvolvida, feito após a etapa elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

A seguir, é representado o Diagrama de Casos de Uso do sistema Pet Pass mobile:

![Diagrama de Casos de Uso](https://github.com/gabrielsantos-gsp/pmv-ads-2021-2-e2-proj-int-t3-petpass/blob/main/docs/img/Diagrama_Caso_de_Uso.png?raw=true)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamentos entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. A matriz contempla todos os elementos relevantes que fazem parte do sistema, bem como os *stakeholders* envolvidos no projeto.

A figura a seguir mostra a matriz de rastreabilidade do projeto do PetPass mobile

![Matriz de rastreabilidade_3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Matriz%20Rastreab_3_1.PNG?raw=true)
![Matriz de rastreabilidade_2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Matriz%20Rastreab_2_1.PNG?raw=true)
![Matriz de rastreabilidade_1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Matriz%20Rastreab_1.PNG?raw=true)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições e Partes Interessadas. Para desenvolver projetos, um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

Para construir um bom diagrama deve-se partir de um conjunto de atividades definidas, sequenciando-as de acordo com as dependências conhecidas entre si, estimando as durações das atividades individualmente e desenvolvendo a estrutura do projeto, em termos das tarefas e suas interações. É preciso também definir uma abordagem de ciclo de vida mais adequada ao projeto em questão.

A seguir encontr-se o diagrama de redes do projeto do Pet Pass mobile.

![Diagrama de Redes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Diagrama_De_Redes.png?raw=true)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

A seguir encontr-se o diagrama de Gantt do projeto do Pet Pass mobile, utilizado com ferramenta de gerenciamento do cronograma do projeto.

![Gráfico de Gantt_1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Cronograma%20do%20projeto.png?raw=true)
![Gráfico de Gantt_2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Grafico_de_Grantt2.png?raw=true)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

A Gestão do Código Fonte e a Divisão de Papéis da equipe, bem como o ambiente utilizada para o gerenciamento de recursos, encontram-se detalhados no tópico de Metodologia.

A seguir, é descrito o planejamento que auxiliará e direcionará a gestão de recursos durante o projeto.

**Planejar o gerenciamento de recursos**					
- Planejar como será feita a gestão de recursos do projeto					
- Consultar opinião especializada sobre esse tipo de projeto					
- Obter documentações necessárias para o desenvolvimento do projeto					
- Atribuir funções às pessoas da equipe					
- Planejar o cronograma de trabalho					
					
**Estimar os recursos das atividades**					
- Analisar quais os recursos necessários para realização das atividades e quantificar					
- Recursos humanos: desenvolvedores e gestores do projeto					
- Recursos materiais: cinco computadores com editores de código fonte instalados					
- Acesso ao Figma					
- Aulas PUC-Minas					
					
**Adquirir recursos**				
- Acesso das aulas da Puc via matrícula de alunos					
- Acesso ao figma por contas vinculadas (gmail)					
- Alunos e componentes do projeto atuam como desenvolvedores e gestores					
- Utilização de computadores dos alunos do projeto 					
					
**Desenvolver a equipe**					
- Treinamento da equipe em React Native					
- Treinamento da equipe em gerenciamento de projetos					
- Treinamento na utilização do Figma					
- Soft skills					
					
**Gerenciar a equipe**					
- Atualizar a documentação 					
- Atualizar outros fatores que podem influenciar no desenvolvimento do projeto					
- Atualização do plano de gerenciamento do projeto					
					
**Controlar os recursos**					
- Informações sobre o desempenho e andamento do trabalho					
- Atualizaçõe sobre o plano de gerenciamento derecursos

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

Nesse contexto, segue abaixo o orçamento estimado para o desenvolvimento do projeto de implantação do Pet Pass mobile.

![Orçamento do projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-petpass-mobile/blob/main/docs/img/Custo%20de%20projeto.PNG?raw=true)
