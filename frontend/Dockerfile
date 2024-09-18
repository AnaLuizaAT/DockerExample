# Usar uma imagem base do Nginx para servir arquivos estáticos
FROM nginx:alpine

# Copiar o arquivo HTML para a pasta padrão do Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/

# Expor a porta 80, onde o Nginx vai rodar
EXPOSE 80