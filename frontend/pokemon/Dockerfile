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
