# Desafio Técnico Radar

 O desafio consiste em montar um frontend utilizando ReactJS e a biblioteca antd para cadastrar pessoas. Onde deverá ter listagem, criação, edição, exclusão. Na listagem, fazer paginação e filtro. No cadastro e edição fazer validação nos campos, todos são obrigatórios, além de formato de e-mail e número de caracteres do telefone. O filtro deverá ter dois campos: nome e email. Fazer a lógica para buscar por nome e/ou e-mail.

## Executando o projeto
 
 ```bash 
  # Clonando o projeto
  git clone https://github.com/brenofelips/desafio-radar.git

  # Frontend
  cd desafio-radar-frontend
  npm install
  npm run dev

  # Docker
  cd postgres-docker
  docker-compose up

  # Backend
  cd desafio-radar-backend
  mvn clean install -D skipTests
  mvn spring-boot:run
 ```

> IMPORTANTE: É necessário executar o comando `docker-compose up -d` antes de executar os comandos para rodar o backend.

## Versões

```bash
Java -> 17.0.12
Docker -> 26.1.4
React -> 18.3.1
Antd -> 5.19.2 
```
