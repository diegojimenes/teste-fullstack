## 1. Qual a saída do algoritmo?

uma lista de numeros primos paginada e ordenada

## 2. Você julga que este código é limpo? Aponte quais erros o programador cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug escondido no código

codigo mal organizado, altamente acoplado, desnecessariamente complexo e nomes de variaveis incompreensíveis.

## 4. Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código.

bons exemplos de middlewares que evitam repetição de código, são middlewares para autentição e tratamento de permissões. assim evitando que em todo end-point tenhamos que fazer todas essas verificações manualmente.

## 5. Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), quais as vantagens e desvantagens de cada abordagem?

__ORM__

a maior vantagem de um ORM na minha opnião é a agilidade que ele nos da com deixando o codigo mais descritivo e liberando o dev para se preocupar com a logica de negocio. e como desvantagem ele pode gerar uma boa queda na perfomace, por acabar gerando algumas queries que são não muito otimizadas.

__QUERY BUILDER__

com um query builder ainda temos um codigo bem descritivo e com ele conseguimos resolver varios problemas de performace que um ORM pode causar, mas como desvantagem precisamos de um conhecimento um pouco maior em SQL por ele não ser uma abstração tão alto nivel quanto um ORM

## 6. Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.

-- script para popular as tabelas

```sql
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

```

-- query com os resultados

```sql
select j.nome, j2.nome
from partidas p
inner join jogador j on p.jogador1_id = j.id
inner join jogador j2 on p.jogador2_id = j2.id
where (p.pontos_jogador1 + p.pontos_jogador2) > 30 
and p.duracao > 90
group by p.jogador1_id, p.jogador2_id
having COUNT(p.id) >= 2;
```
