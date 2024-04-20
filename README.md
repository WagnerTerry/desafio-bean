# 🚀 Desafio Bean Software

O intuito desse desafio é construir uma pokedex rodando em docker. Para consumir as informações foram usadas Axios, Hasura com GraphQL e o banco Postgres.

## 🔦 Amostras do projeto

![lista-pokemon](https://github.com/WagnerTerry/desafio-bean/blob/main/frontend/pokemon/assets/projeto.png)
<br />
<br />

![gif-projeto](https://github.com/WagnerTerry/desafio-bean/blob/main/frontend/pokemon/assets/video-projeto.gif)

## Vídeo do projeto

```
https://youtu.be/-8puUqzLejw
```

## 💻 Executando projeto

- Necessário ter o docker instalado na sua máquina.
  
Na raiz do projeto execute o comando:

```
docker compose up -d
```
### Hasura GraphQL

- ATENÇÃO: Necessário configurar o Hasura com GraphQL para salvar os pokemons no banco postgres, siga esses passos:

#### Conexão Hasura com Postgres

1) Abra uma nova aba e digite

```
http://localhost:8080/console
```
2) Dentro do console clique na guia DATA
3) Clique no botão Connect Database
4) Escolha o banco Postgres e clique em Connect Existing Database
5) em "Database name" digite:

```
pokemon
```

6) em "Connect Database via" marque : "Environment variable"
7) Digite no campo "Environment variable":

```
HASURA_GRAPHQL_METADATA_DATABASE_URL
```

8) Clique em Connect Database
9) Clique no database, depois na pasta public e clique no botão criar tabela
10) A tabela irá conter 3 colunas com os dados:
   - id: Int
   - name: Text
   - image: Text

11) Marque id para ser a chave primária ( Primary Key )
     
#### Criação dos endpoints

#### - GET poke/team

1) Clique na guia API
2) Depois clique na guia REST
3) Clique em Create Rest
4) Vamos criar a rota para buscar todos os pokemons salvos no banco ( no caso do seu time )
5) Digite a query comando no editor GraphQL Request:
   
```
query poke {
  team {
    id
    name
    image
  }
}
```
6) Em URL PATH, coloque:

```
poke/team
```
7) Marque o Method GET
   
   
#### - GET poke/team/:id

1) Repita o processo anterior até o editor GraphQL Request:
2) Digite a query:

```
query team_by_pk($id: Int!) {
  team_by_pk(id: $id) {
    id
    image
    name
  }
}
```

3) Em URL PATH, coloque:

```
poke/team/:id
```
4) Marque o Method GET


#### - POST poke/addpokemon

1) Repita o processo anterior até o editor GraphQL Request:
2) Digite a query:

```
mutation addPokemon($id: Int!, $name: String!, $image: String){
  insert_team_one(object: {id: $id, name: $name, image: $image}) {
    id,
    name,
    image
  }
}
```

3) Em URL PATH, coloque:

```
poke/addpokemon
```
4) Marque o Method POST

#### - DELETE poke/team/:id

1) Repita o processo anterior até o editor GraphQL Request:
2) Digite a query:

```
mutation delete_team_by_pk($id: Int!) {
  delete_team_by_pk(id: $id) {
    id
    image
    name
  }
}
```

3) Em URL PATH, coloque:

```
poke/team/:id
```
4) Marque o Method DELETE


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

Para interromper a execução digite:

```
docker compose down
```

Build da imagem com a tag/nome (vite-react-app)
- docker build -t vite-react-app:latest .

Filtrar e exibir informações sobre imagens Docker que tenham "vite-react-app" em seu nome.
- docker images | grep vite-react-app

Rodando docker para desenvolvimento
- docker run -p 8082:8082 vite-react-app:latest

