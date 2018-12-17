# Pitzi Ruby Challenge Frontend API

Desenvolvimento de SPA para integração com [API](https://github.com/monoxchd/pitzi-backend-api) de registro de assinaturas

## Iniciando o projeto

Esse projeto foi desenvolvido para ser rodado em máquina local. Após clonar o repositório e verificar se Node.js e npm estão instalados corretamente, será necessário apenas entrar no local onde o repositório foi clonado e realizar os seguintes passos

```
npm install
```

```
npm start
```

## Requests para API

O SPA foi otimizado para funcionar junto à API através de uma pré-instalação via Heroku, mas caso seja nessário mudar o local de onde a API está sendo executada, será necessário atualizar a variável ROOT_URL em /src/actions/index.js
