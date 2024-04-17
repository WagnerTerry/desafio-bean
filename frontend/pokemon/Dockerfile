# Primeira Etapa (BUILD_IMAGE):
# imagem node
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app

# copiando package.json
COPY package.json .

# instalando todos os pacotes
RUN npm install

# copinado os arquivos restantes
COPY . .

# build projeto
RUN npm run build


# Segunda Etapa (PRODUCTION_IMAGE)
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app

# copiando dist
COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080

# copiando package.json
COPY package.json .
COPY vite.config.ts .

# instalando typescript
RUN npm install typescript

CMD [ "npm", "run", "preview" ]