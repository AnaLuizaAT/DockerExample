# Usar a imagem Node.js como base
FROM node:14

# Instalar o netcat (nc)
RUN apt-get update && apt-get install -y netcat

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o código da aplicação e o script de espera
COPY . .

# Tornar o script de espera executável
RUN chmod +x waitForDB.sh

# Expor a porta usada pela aplicação
EXPOSE 3000

# Usar o script de espera antes de rodar o servidor
CMD ["./waitForDB.sh", "npm", "start"]
