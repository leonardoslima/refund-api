# 🚀 Refund API

API para gerenciamento de solicitações de reembolso. Esta API permite criar usuários, autenticar sessões, gerenciar solicitações de reembolso e realizar upload de arquivos.

## 📑 Índice

- [📥 Instalação](#-instalacao)
- [⚙️ Configuração](#️-configuracao)
- [🔗 Endpoints](#-endpoints)
  - [👤 Usuários](#-usuarios)
  - [🔑 Sessões](#-sessoes)
  - [💰 Reembolsos](#-reembolsos)
  - [📤 Uploads](#-uploads)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)

---

## 📥 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/refund-api.git
   cd refund-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados:
   ```bash
   npx prisma migrate dev
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

## ⚙️ Configuração

### 🔧 Variáveis de Configuração

- **🔑 JWT Secret**: Configurado no arquivo [`src/configs/auth.ts`](src/configs/auth.ts).
- **📂 Upload de Arquivos**: Configurado no arquivo [`src/configs/upload.ts`](src/configs/upload.ts).

---

## 🔗 Endpoints

### 👤 Usuários

#### ✨ Criar Usuário
**POST** `/users`

**Body**:
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "employee | manager"
}
```

**Respostas**:
- ✅ **201**: Usuário criado com sucesso.
- ❌ **400**: Erro de validação.

---

### 🔑 Sessões

#### 🔓 Autenticar Usuário
**POST** `/sessions`

**Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

**Respostas**:
- ✅ **200**: Retorna o token JWT e os dados do usuário.
- ❌ **401**: Credenciais inválidas.

---

### 💰 Reembolsos

#### ➕ Criar Reembolso
**POST** `/refunds`

**Headers**:
```json
{
  "Authorization": "Bearer <token>"
}
```

**Body**:
```json
{
  "name": "string",
  "category": "food | others | services | transport | accommodation",
  "amount": "number",
  "filename": "string"
}
```

**Respostas**:
- ✅ **201**: Reembolso criado com sucesso.
- ❌ **401**: Não autorizado.

#### 📄 Listar Reembolsos
**GET** `/refunds`

**Headers**:
```json
{
  "Authorization": "Bearer <token>"
}
```

**Query Params**:
- `name` (opcional): Filtrar por nome.
- `page` (opcional): Número da página.
- `perPage` (opcional): Registros por página.

**Respostas**:
- ✅ **200**: Lista de reembolsos.
- ❌ **401**: Não autorizado.

#### 🔍 Detalhar Reembolso
**GET** `/refunds/:id`

**Headers**:
```json
{
  "Authorization": "Bearer <token>"
}
```

**Respostas**:
- ✅ **200**: Detalhes do reembolso.
- ❌ **401**: Não autorizado.

---

### 📤 Uploads

#### ⬆️ Fazer Upload de Arquivo
**POST** `/uploads`

**Headers**:
```json
{
  "Authorization": "Bearer <token>"
}
```

**Form Data**:
- `file`: Arquivo a ser enviado.

**Respostas**:
- ✅ **200**: Retorna o nome do arquivo salvo.
- ❌ **400**: Erro de validação.
- ❌ **401**: Não autorizado.

---

## 📂 Estrutura do Projeto

```plaintext
refund-api/
├── prisma/
│   ├── dev.db
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── configs/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── providers/
│   ├── routes/
│   ├── types/
│   └── utils/
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## 🛠️ Tecnologias Utilizadas

- **🟢 Node.js**: Ambiente de execução.
- **⚡ Express**: Framework para construção de APIs.
- **🛢️ Prisma**: ORM para manipulação do banco de dados.
- **🗄️ SQLite**: Banco de dados utilizado.
- **✅ Zod**: Validação de dados.
- **📁 Multer**: Upload de arquivos.
- **🔐 JWT**: Autenticação baseada em tokens.
- **🔑 Bcrypt**: Criptografia de senhas.
