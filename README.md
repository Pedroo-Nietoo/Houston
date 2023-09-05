# Houston 🚀
_Melhorando hábitos, transformando sonhos!_

<br>

## Tech

O projeto utiliza vários projetos de código aberto para funcionar corretamente:

- [React Native](https://reactnative.dev/) - Aplicação para Android e IOS.
- [ReactJS](https://react.dev/) - Sistema web responsivo para diferentes plataformas.
- [NestJS](https://nestjs.com/) - API e sistema de Back-End do projeto.
- [Docker](https://www.docker.com/) - Containerização dos ambientes de teste e produção do projeto.
- [Swagger](https://swagger.io/) - Design, Desenvolvimento, Documentação, Teste e Virtualização da API. 
- [JWT](https://jwt.io/) - Sistema de autenticação/autorização de usuário.
- [Jest](https://jestjs.io/pt-BR/) - Testes da aplicação.
- [PostgreSQL](https://www.postgresql.org/) - Banco de Dados relacional do projeto.

E é claro que o próprio projeto é open source com um [repositório público](https://github.com/Pedroo-Nietoo/Projeto) no GitHub.

<br>

## Instalação

Houston precisa do [Node.js](https://nodejs.org/) em sua versão v10+ para rodar.

Instale todas as dependências necessárias e inicie o servidor:

```sh 
# Na pasta do projeto

# Para instalar as dependências da API e rodá-la
cd api
npm i
npm run start
```
### *Atenção*
Para rodar a API localmente, certifique-se de alterar o arquivo `.env` do projeto para as especificações do seu banco de dados. No exemplo abaixo, é utilizado o usuário `postgres` com a senha `postgres` na porta local 5432. Além disso, tem-se o nome do banco como `minhaDB`.
```sh 
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/minhaDB?schema=public"
```

<br>

Como modelo para substituir as informações pelas suas, segue abaixo um link com os espaços onde se deve substituir. 
```sh 
DATABASE_URL="postgresql://<seuUsuario>:<suaSenha>@localhost:<porta>/<nomeDoBanco>?schema=public"
```

<br>

Caso deseje rodar através do Docker, vá para a seção [Docker](https://github.com/Pedroo-Nietoo/Projeto/README.md) abaixo.

<br>

```
# Na pasta do projeto

# Para instalar as dependências do Front-End e rodá-lo
cd frontend
npm i
npm start
```


## Docker

Houston é muito fácil de instalar e implantar em um contêiner Docker.

Por padrão, o Docker irá expor a porta 3000 para rodar a API, então altere isso dentro do
docker-compose se necessário. Quando estiver pronto, basta usar o Dockerfile para
construir a imagem.

```sh
cd api
docker build.
```

Isso criará a imagem do Houston e extrairá as dependências necessárias.

Uma vez feito isso, execute a imagem Docker e use os comandos de _script_ fornecidos no app para subir e rodar os contêineres:

```sh
./scripts/run-dev.sh up
```

<br>

## Licença

[MIT](https://opensource.org/license/mit/)

