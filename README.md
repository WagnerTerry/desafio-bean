# 🚀 Desafio Bean Software

O intuito desse desafio é construir uma pokedex rodando em docker. Para consumir as informações foram usadas Axios, Hasura com GraphQL e o banco Postgres.

## 🔦 Amostras do projeto

![acessar-credencial](https://github.com/WagnerTerry/NLW-UNITE_React_Native/blob/main/assets/readmeImages/get-ticket.png)
![cadastrar-ingresso](https://github.com/WagnerTerry/NLW-UNITE_React_Native/blob/main/assets/readmeImages/register.png)
![tela-splash](https://github.com/WagnerTerry/NLW-UNITE_React_Native/blob/main/assets/readmeImages/splash.png)
<img src="https://github.com/WagnerTerry/NLW-UNITE_React_Native/blob/main/assets/readmeImages/ticket.jpeg" alt="ingresso" width="390px">

## 💻 Executando projeto

Na raiz do projeto execute o comando:

```
docker compose up -d
```


## 🛠️ Tecnologias

- ViteJS
- React
- Axios
- Docker
- Hasura
- GraphQL
- Postgres 

## 📦 Dependências
- Criar projeto com o comando:
```
npm create vite@latest
```
- Requests com Axios

```
npm install axios
```

## 🎮 PokeAPI
- https://pokeapi.co/api/v2/pokemon/?limit=1302

## 📄 Documentação docker
- https://hasura.io/docs/latest/getting-started/docker-simple/

### comandos docker
Build da imagem com a tag/nome (vite-react-app)
- docker build -t vite-react-app:latest .

Filtrar e exibir informações sobre imagens Docker que tenham "vite-react-app" em seu nome.
- docker images | grep vite-react-app

Rodando docker
- docker run -p 8082:8082 vite-react-app:latest

