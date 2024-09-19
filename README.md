# Armazenamento de Frases com Docker, Node.js, MySQL e Nginx

Este projeto é uma aplicação web simples para armazenar e visualizar frases. Utilizamos **Node.js** e **Express** no backend, **MySQL** como banco de dados, **Nginx** para servir o frontend e **Docker** para containerizar todos os serviços, garantindo que o projeto possa ser executado de maneira consistente em qualquer ambiente.

## Funcionalidades
- **Inserir Frases**: Permite que o usuário insira frases que são armazenadas no banco de dados.
- **Exibir Últimas 5 Frases**: Exibe apenas as últimas 5 frases na página inicial.
- **Mostrar Mais / Mostrar Menos**: Permite alternar entre visualizar todas as frases ou apenas as últimas 5.

## Tecnologias Utilizadas
- **Node.js** com Express: Backend responsável por gerenciar as requisições e interagir com o banco de dados.
- **MySQL**: Banco de dados relacional utilizado para armazenar as frases.
- **Nginx**: Servidor web utilizado para servir o frontend.
- **Docker**: Ferramenta de containerização para garantir a consistência do ambiente.
- **Docker Compose**: Orquestração dos containers do backend, frontend e banco de dados.
- **HTML, CSS, JavaScript**: Utilizados para a construção da interface do usuário.

## Estrutura do Projeto

O projeto é composto por três containers principais:
1. **Backend** (Node.js + Express): Gerencia as requisições e se comunica com o banco de dados MySQL.
2. **Frontend** (Nginx): Serve a interface de usuário estática.
3. **Banco de Dados** (MySQL): Armazena as frases inseridas pelos usuários.

## Requisitos

Antes de rodar o projeto, certifique-se de ter os seguintes programas instalados:
- **Docker**: [Instale o Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Instale o Docker Compose](https://docs.docker.com/compose/install/)

## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório para sua máquina:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd <DIRETORIO_DO_PROJETO>
    ```

3. Execute o Docker Compose para construir os containers e rodar a aplicação:
    ```bash
    docker-compose up --build
    ```

4. Acesse a aplicação no navegador:
    ```
    http://localhost:8080
    ```


![image](https://github.com/user-attachments/assets/c4659b5d-8d6f-4d5b-8baf-863ce544605b)


## Endpoints da API

O backend expõe alguns endpoints RESTful:

1. **Adicionar uma frase**: 
    - Método: `POST`
    - Rota: `/add`
    - Descrição: Adiciona uma nova frase ao banco de dados.
    - Exemplo de corpo da requisição:
      ```json
      {
        "phrase": "Aqui está uma nova frase!"
      }
      ```

2. **Listar todas as frases**: 
    - Método: `GET`
    - Rota: `/phrases`
    - Descrição: Retorna todas as frases armazenadas no banco de dados.

## Como Contribuir

Contribuições são bem-vindas! Se você deseja melhorar o projeto ou corrigir algum problema, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça o commit das suas alterações:
    ```bash
    git commit -m "Minha nova feature"
    ```
4. Envie suas alterações para o repositório:
    ```bash
    git push origin minha-feature
    ```
5. Abra um **Pull Request**.

---

Sinta-se à vontade para fazer melhorias no projeto e explorar novas funcionalidades!
