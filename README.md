# Inside Gestão de Eventos

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Nodejs](https://img.shields.io/badge/node.js-v21.4.0-green)
![Npm](https://img.shields.io/badge/npm-v10.2.4-blue)

### Tecnologias

* [Node.js](https://nodejs.org/) - Ambiente de desenvolvimento para construir a aplicação usando a linguagem de programação Javascript.
* [Npm](https://www.npmjs.com/) - Gerenciador de pacotes e automação de build.

## Configuração

Etapa 1 - Instale as dependências necessárias para execução do projeto.

```bash
npm install
```

Etapa 2 - Crie um arquivo .env para informar algumas keys importantes como a `SECRET` para validar o JWT, `PORT` para dizer qual é porta de execução do projeto e `EXPIRES_IN` para dizer quando expira o token.

```
PORT=3000
SECRET=secret
EXPIRES_IN='1h'
```

Etapa 3 - Subir a aplicação
```bash
npm start
```

Etapa (opcional) - Subir a aplicação em ambiente de desenvolvimento
```bash
npm run dev
```