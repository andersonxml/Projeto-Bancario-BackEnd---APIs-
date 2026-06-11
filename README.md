# 🏦 Bank API

API bancária desenvolvida com **Node.js**, **TypeScript** e **Prisma ORM**, simulando operações de uma instituição financeira real, incluindo autenticação, gerenciamento de contas e transações.


Este projeto foi criado com o objetivo de aprofundar conhecimentos em:

* Arquitetura de APIs REST
* Autenticação e autorização com JWT
* Modelagem de banco de dados relacional
* Regras de negócio bancárias
* Boas práticas com TypeScript
* Segurança de aplicações backend

---

## 📋 Funcionalidades

### 🔐 Autenticação

* [x] Estrutura de autenticação
* [x] Cadastro de usuários
* [x] Login JWT
* [x] Middleware de autenticação
* [ ] Recuperação de senha

### 🏦 Contas Bancárias

* [ ] Criação de conta
* [ ] Consulta de saldo
* [ ] Controle de saldo
* [ ] Extrato

### 💸 Transações

* [ ] Depósito
* [ ] Saque
* [ ] Transferência entre contas

---

## 🛠️ Tecnologias

* Node.js
* TypeScript
* Express
* Prisma ORM
* MySQL
* Zod
* JWT
* bcrypt

---

## 📂 Estrutura do Projeto

```txt
src/
├── modules/
│   └── auth/
│   └── ...
├── shared/
│   └── database/
│   └── middlewares/
├── generated/
│   └── prisma/
├── app.ts
└── server.ts
```

---

## ⚙️ Executando o Projeto

### Clone o repositório

```bash
git clone https://github.com/andersonxml/bank-api.git
```

### Instale as dependências

```bash
npm install
```

### Configure as variáveis de ambiente

```env
DATABASE_URL=
JWT_SECRET=
```

### Execute as migrations

```bash
npx prisma migrate dev
```

### Inicie a aplicação

```bash
npm run dev
```

---

## 📈 Status do Projeto

Projeto em desenvolvimento.

Atualmente focado na implementação do módulo de autenticação e estruturação das regras de negócio para contas bancárias e transações.

---

## 👨‍💻 Autor

Anderson Melo

* LinkedIn: linkedin.com/in/andersonxml
* GitHub: github.com/andersonxml
