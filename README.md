# Desafio Bean Software

## Frontend

### Dependências
- npm create vite@latest
- npm install axios

### comandos docker
Build da imagem com a tag/nome (vite-react-app)
- docker build -t vite-react-app:latest .

Filtrar e exibir informações sobre imagens Docker que tenham "vite-react-app" em seu nome.
- docker images | grep vite-react-app

Rodando docker
- docker run -p 8080:8080 vite-react-app:latest

### docs
- https://hasura.io/docs/latest/getting-started/docker-simple/

### api
- https://pokeapi.co/api/v2/pokemon/?limit=1302