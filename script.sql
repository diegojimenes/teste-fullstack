CREATE TABLE Jogador (
    id int NOT NULL,
    nome varchar(30),
	  idade int,
    PRIMARY KEY (id)
);

CREATE TABLE Partidas (
    id int NOT NULL,
    jogador1_id int,
	  jogador2_id int,
    pontos_jogador1 int NOT NULL,
    pontos_jogador2 int NOT NULL,
    duracao int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (jogador1_id) REFERENCES Jogador(id),
    FOREIGN KEY (jogador2_id) REFERENCES Jogador(id)
);

INSERT INTO `Jogador` (`id`, `nome`, `idade`) VALUES (1, 'Nadal', 10);
INSERT INTO `Jogador` (`id`, `nome`, `idade`) VALUES (2, 'Murray', 12);
INSERT INTO `Jogador` (`id`, `nome`, `idade`) VALUES (3, 'Federer', 13);

INSERT INTO `Partidas` (`id`, `jogador1_id`, `jogador2_id`,`pontos_jogador1`, `pontos_jogador2`, `duracao`) VALUES (1, 1, 2,20,11,95 );
INSERT INTO `Partidas` (`id`, `jogador1_id`, `jogador2_id`,`pontos_jogador1`, `pontos_jogador2`, `duracao`) VALUES (2, 1, 2,20,11,91 );
INSERT INTO `Partidas` (`id`, `jogador1_id`, `jogador2_id`,`pontos_jogador1`, `pontos_jogador2`, `duracao`) VALUES (3, 1, 2,20,5,80 );

INSERT INTO `Partidas` (`id`, `jogador1_id`, `jogador2_id`,`pontos_jogador1`, `pontos_jogador2`, `duracao`) VALUES (4, 1, 3,20,11,95 );
INSERT INTO `Partidas` (`id`, `jogador1_id`, `jogador2_id`,`pontos_jogador1`, `pontos_jogador2`, `duracao`) VALUES (5, 1, 3,16,15,96 );
INSERT INTO `Partidas` (`id`, `jogador1_id`, `jogador2_id`,`pontos_jogador1`, `pontos_jogador2`, `duracao`) VALUES (6, 1, 3,2,7,70 );

select j.nome, j2.nome
from partidas p
inner join jogador j on p.jogador1_id = j.id
inner join jogador j2 on p.jogador2_id = j2.id
where (p.pontos_jogador1 + p.pontos_jogador2) > 30 
and p.duracao > 90
group by p.jogador1_id, p.jogador2_id
having COUNT(p.id) >= 2;