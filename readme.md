# Goat_me Challenge - Repositório do Backend

## Objetivo do desafio!

Como um estabelecimento esportivo (Quadras, academias, complexos esportivos e etc)
gostaria de cadastrar as atividades esportivas, e horários livres para treino no meu
estabelecimento e exibi-los através de uma agenda para que os atletas possam vê-los de
forma rápida e organizada.
Critérios de aceitação:
- As atividades esportivas devem ter os campos:
  - nome
  - descrição
  - data
  - horário início e fim
- recorrência - A atividade poderá acontecer uma única vez ou de semanalmente
durante um número X de semanas a ser definido pelo estabelecimento esportivo na
tela de cadastro
- As atividades esportivas cadastradas deverão ser exibidas na agenda com a cor
amarela colorindo desde o horário inicio até o fim como segue no exemplo abaixo
- Os horários livres para treinos devem ser exibidos na cor verde.


## Rodando o código!

Para rodar o código basta ter o docker/docker-compose ou o node instalado em seu computador e criar um arquivo .env em seu projeto (copiar e colar o conteúdo .env.example resolve a situação)

``` docker
//utilizando docker 
docker-compose up -d //pronto!

------------------------------------------------------------------------------------

//utilizando o node com o yarn
yarn

yarn dev /pronto!

```

Feito esses passos, o backend ficará disponível no endereço http://localhost:3000. O Frontend deste teste se encontra nesse [repositório](https://github.com/Azuos0/goatme_calendar_frontend).