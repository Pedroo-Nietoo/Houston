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

E é claro que o próprio projeto é open source com um [repositório público](https://github.com/Pedroo-Nietoo/Houston) no GitHub.

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
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/minhaDB"
```

<br>

Utilize o modelo abaixo para substituir os parâmetros da URL pelos dados do seu computador. 

```sh 
DATABASE_URL="postgresql://<seuUsuario>:<suaSenha>@localhost:<porta>/<nomeDoBanco>"
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

<br>

```
# Na pasta do projeto

# Para instalar as dependências do App e rodá-lo
cd app
npm i
npm start
```

<br>

## Docker

Houston é muito fácil de instalar e implantar em um contêiner Docker.

Por padrão, o Docker irá rodar sua aplicação como um todo na nuvem (desde o banco de dados, API, serviço Web do Front-End e outros). Para isso, altere o arquivo `.env` da seguinte maneira:

```sh
DATABASE_URL="postgresql://houstonAdmin:houstonAdmin@postgres:5432/minhaDB"
```

Com isso, o projeto deixará de buscar o banco de dados rodando no `localhost` e irá começar a buscar pelo postgres, rodando na nuvem na porta `:5432`. Após isso, utilize os comandos para rodar o docker no projeto.

```sh
cd api
docker build.
```

Isso criará os contêineres do Houston e extrairá as dependências necessárias.

Uma vez feito isso, execute a aplicação atrabés do docker Docker usando os comandos de _script_ fornecidos na pasta `api/scripts` para subir e rodar os contêineres:

```sh
./scripts/run-dev.sh up
```

<br>

## Licença

[MIT](https://opensource.org/license/mit/)

