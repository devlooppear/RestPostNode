# RestPostNode
Olá! Este é um projeto de API utilizando Vercel e Node.js para gerenciar uma lista de carros. Neste projeto, você encontrará um servidor Node.js com uma API RESTful que permite realizar operações CRUD (Create, Read, Update, Delete) em uma tabela de carros armazenada em um banco de dados PostgreSQL. Vamos começar!

## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js: O ambiente de tempo de execução JavaScript para executar o servidor.
- npm: O gerenciador de pacotes do Node.js. Geralmente é instalado automaticamente com o Node.js.
- PostgreSQL: O banco de dados relacional utilizado para armazenar os dados dos carros.
## Configuração do Projeto
### Clonando o Repositório (utilizando Github Desktop):

- Abra o Github Desktop e faça login em sua conta do GitHub.
- No canto superior esquerdo, clique em "File" e selecione "Clone Repository...".
- Escolha o repositório do projeto e selecione a pasta de destino em seu computador.
- Clique no botão "Clone" para clonar o repositório em sua máquina.
## Instalando Dependências:

- Abra o terminal (ou prompt de comando) e navegue até o diretório do projeto clonado.
- Execute o comando npm install para instalar todas as dependências do projeto.
## Configurando o Banco de Dados:

- Certifique-se de que o PostgreSQL esteja instalado e executando em sua máquina.
- Crie um novo banco de dados para o projeto e anote o nome do banco, o nome do usuário e a senha de acesso.
- Configurando as Variáveis de Ambiente:

- Renomeie o arquivo .env.example para `.env`:
```
DATABASE_URL= postgres://<seu_usuario>:<sua_senha>@localhost:5432/carros_db
```

- Abra o arquivo .env e configure as seguintes variáveis:
    - DATABASE_URL: A URL de conexão com o banco de dados PostgreSQL. Substitua pelos dados de conexão corretos.
- Executando as Migrações do Banco de Dados:

- No terminal, execute o comando:
```
npx prisma migrate dev
```
para aplicar as migrações e criar a tabela de "carro" no banco de dados.
- Executando o Servidor
- Agora que o projeto está configurado, você pode iniciar o servidor e testar a API. No terminal, execute o seguinte comando:

```
npm run dev
```

- O servidor será iniciado e estará pronto para receber solicitações em http://localhost:3737.(Você também pode executar: "node index.js" estando dentro deste diretório caso não dê certo npm run dev)

## Endpoints da API
Aqui estão os principais endpoints da API que você pode acessar para gerenciar a lista de carros:

- GET /carros: Retorna uma lista com todos os carros cadastrados.
- POST /carros: Cria um novo carro com base nos dados fornecidos no corpo da solicitação.
- GET /carros/:id: Retorna os detalhes de um carro específico com base no ID fornecido.
- PUT /carros/:id: Atualiza os dados de um carro específico com base no ID fornecido.
- DELETE /carros/:id: Exclui um carro específico com base no ID fornecido.
## Contribuindo
Se você quiser contribuir com este projeto, fique à vontade para abrir issues, enviar pull requests ou fornecer feedback.
Este projeto está adaptado para ser colocado em produção, no original utilizei com https://neon.tech/ e vercel https://vercel.com/. Recomendo que dê uma olhada na documentação da Vercel caso queira testar colocar em produção.

Espero que este guia seja útil para você começar com o projeto! Se tiver alguma dúvida, não hesite em perguntar. Bom trabalho! 😊