# Usa uma imagem leve do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o resto dos arquivos da aplicação para o container
COPY . .

# Expõe a porta que será usada pela aplicação
EXPOSE 3000

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
