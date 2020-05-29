# consorcio2-delivrier-Back-End
Courrier and package delivery platform

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Antes de ejecutar la aplicación

Para lograr la conexión a la base de datos, es necesario crear un archivo `ormconfig.json` en la ruta raiz del proyecto el cual debe tener la siguiente estructura:

```json
{
  "type": "<MANEJADOR DE BASE DE DATOS>",
  "host": "<HOST DE CONEXIÓN A LA BASE DE DATOS>",
  "port": <NÚMERO DEL PUERTO DEL HOST>,
  "username": "<USUARIO DE LA BASE DE DATOS>",
  "database": "<NOMBRE DE LA BASE DE DATOS>",
  "password": "<CONTRASEÑA DEL USUARIO PARA LA CONEXIÓN A LA BASE DE DATOS>",
  "entities": ["<UBICACIÓN DE LAS ENTIDADES GENERADAS POR TYPEORM LUEGO DE LA COMPILACIÓN>"]
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
