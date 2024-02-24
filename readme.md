# Passo a passo para usar o projeto localmente

## Primeiro se certificar que tem um server do rabbitmq rodando em sua máquina

Em um macbook seria os seguintes comandos para instalar o rabbitmq
```
brew install rabbitmq
```
E o seguinte comando para startar o server
```
brew services start rabbitmq
```

## Instalar as depêndencias do projeto

No console digite ```pnpm i``` na pasta raiz de todo o projeto, em seguida digite  ```bash install_dependencies.sh```, se o script não funcionar em sua máquina entre em cada pasta do microserviço e digite ```pnpm i``` para instalar as depêndencias de cada projeto separadamente.

## Iniciando os serviços

No terminal da pasta raiz digite ```pnpm start```para iniciar todos os serviços.

Banco de dados usado: MongoDB
Database: microservices

## Rotas:

### Session-Service:
Url: http://localhost:3001/session

Método: **Post**

Body:

    "email": "teste@gmail.com",
    "password": "123456"
  

  Nessa rota você precisara informar o email e a senha de uma sessão que exista no seu banco de dados Mongo, na collection sessions, não tem a opção de criar seção na API, seria função de um administrador que não foi incluido no projeto inicialmente

  Com o token gerado você pegará ele, vai copiar e colar em Authorization no Postman ou outro app de requisições que você esteja utilizando para **todas as rotas seguintes**, lembrando que o formato é **Bearer Token**.

### Address-Service:
Url: http://localhost:3001/address

Método: **Patch**

Body:

    "email": "teste@gmail.com",
    "cep": "12345-123"
 

Nessa rota você colocará um email de um usuário cadastrado, e o cep, o cep será usado na api viacep que trará dados daquele cep e atualizará os dados de endereço na collection users.
Essa rota retornará o endereço atualizado.

### Register-Service:
Url: http://localhost:3001/register

Método: **Post**

Body:

    "name": "teste",
    "email":"email2254@email.com",
    "cpf": "1234567890",
    "street": "exemplo",
    "number": "234",
    "neighborhood": "tarefa",
    "city": "prova",
    "state": "ADA",
    "country": "internet"

Nessa rota você poderá registrar novos usuários na collection users, mas não poderá registrar usuários com emails identicos.
Será enviado um email para o usuário confirmando o registro.**(FAKE)**
Essa rota retornará o id do usuário.

### Order-Service:
Url: http://localhost:3001/order

Método: **Post**

Body:

    "user_id": "65da1b08751c9d938bef056c",
    "description":"meu teste"

Nessa rotá você poderá registrar ordens de serviços, que serão salvas na collection orders, a descrição da ordem será enviada para o email cadastrado do usuário confirmando a ordem, por enquanto também é um envio **(FAKE)**. Essa rotá irá retornar o id da ordem

Obs: Eu fiquei tentado a colocar um envio SMTP mas quase todos tinham que cadastrar um cartão e erá temporário vou deixar pra próxima, obrigado pelas aulas professor.