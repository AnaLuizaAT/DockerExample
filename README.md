📝 Projeto de Armazenamento de Frases com Docker, Node.js, MySQL e Nginx

📋 Descrição

Este projeto é uma aplicação full stack que permite aos usuários inserir frases em um formulário web, armazená-las em um banco de dados MySQL e visualizá-las em uma interface web dinâmica. O projeto utiliza Node.js no backend, Nginx para servir o frontend e Docker para containerizar todos os serviços, facilitando a execução e o deploy da aplicação.


🎯 Funcionalidades
Enviar novas frases para o banco de dados.
Exibir as frases armazenadas na interface web.
Mostrar os 5 últimos registros por padrão, com a opção de exibir todos.
Alternar entre exibir menos e exibir mais registros.


🛠️ Tecnologias Utilizadas
Docker: Para criar e gerenciar os containers do projeto.
Node.js: Para criar a API no backend e se comunicar com o banco de dados.
Express.js: Framework para criar o servidor backend.
MySQL: Banco de dados relacional para armazenar as frases.
Nginx: Servidor web para servir o frontend.
HTML/CSS/JavaScript: Construção da interface de usuário (frontend).
Docker Compose: Orquestração dos diferentes serviços do projeto.


🚀 Como Rodar o Projeto
Pré-requisitos
Ter o Docker e o Docker Compose instalados na sua máquina.


Passos para execução
Clone o repositório:
git clone <...DockerExample>
cd DockerExample

Inicie os containers: 
Execute o seguinte comando para rodar os serviços do projeto:
docker-compose up --build

Isso vai compilar e iniciar os três containers: frontend, backend e db (MySQL).

Acesse a aplicação:
Abra o navegador e vá para: http://localhost:8080
Agora você pode enviar frases e visualizá-las na interface web.

Como o projeto está estruturado
/backend: Contém o código Node.js do backend que lida com as requisições HTTP e interage com o banco de dados MySQL.
/frontend: Contém os arquivos index.html e styles.css, que formam a interface web do usuário.
/db: Contém o arquivo SQL de inicialização do banco de dados.


⚙️ Endpoints da API

POST /add: Envia uma frase para ser armazenada no banco de dados.

Body (JSON):
{
  "phrase": "Sua frase aqui"
}

GET /phrases: Retorna todas as frases armazenadas no banco de dados em formato JSON.

📂 Estrutura do Projeto
bash
Copiar código
├── backend
│   ├── app.js              # Código principal do backend
│   ├── package.json        # Dependências do backend
│   ├── waitForDB.sh        # Script para garantir que o banco de dados esteja pronto antes do backend iniciar
├── frontend
│   ├── index.html          # Página web principal
│   ├── styles.css          # Arquivo CSS para estilização
├── db
│   ├── init.sql            # Script de inicialização do banco de dados
├── docker-compose.yml       # Arquivo de configuração do Docker Compose
└── README.md                # Documentação do projeto


🛠️ Scripts Disponíveis
Iniciar os containers:
docker-compose up --build


Parar os containers:
docker-compose down


Acessar o banco de dados MySQL dentro do container:
docker exec -it <nome_do_container_db> mysql -u root -p
