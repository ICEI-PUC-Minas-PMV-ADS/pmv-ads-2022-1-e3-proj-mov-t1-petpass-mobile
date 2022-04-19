-- Criação do banco de dados
create database Petpass;
use Petpass;

-- Criando as tabelas do banco de dados
create table Usuario (
idUsuario char(6) primary key, 
nome char(20), 
email char(50), 
senha char(8)
);

create table Pet (
idPet char(8) primary key, 
nomePet char(20), 
tipoPet char(5), 
idadePet int(2), 
sexoPet char(10), 
racaPet char(10), 
pesoPet decimal(3,1), 
dataNasc date,
idUsuario_Pet char(6),
constraint FK_Pet_Usuario foreign key (idUsuario_Pet) references Usuario(idUsuario)
);

create table Vacina (
idVacina char(10) primary key, 
nomeVacina char(20), 
tipoPetVacinado char(5), 
doseVacina char(10), 
dataAplicacao date, 
idadeAplicacao int(2),
idPet_Vac char(8),
constraint FK_Vacina_Pet foreign key (idPet_Vac) references Pet(idPet)
);
