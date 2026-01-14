# Projeto de Gerenciamento de Tarefas

Projeto de exemplo com **Next.js** (frontend) e **.NET Core** (backend) para gerenciamento de tarefas.
Permite criar, editar, excluir e filtrar tarefas por status.

---

## Pré-requisitos

* [Node.js](https://nodejs.org/) v18+
* npm ou yarn
* [.NET SDK](https://dotnet.microsoft.com/en-us/download) v7+
* SQL Server

---

## Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
API disponível em `https://localhost:5121`.

### 2. Frontend (Next.js)

```bash
cd ../frontend
npm install   # ou yarn install
NEXT_PUBLIC_API_URL=http://localhost:5121
npm run dev   # ou yarn dev
```

Frontend disponível em `http://localhost:3000`.

---

## Testes

Frontend:

```bash
npm run dev
```

---

## Banco de Dados

* Banco: **SQL Server**
* Tabelas: `Tasks` e `Status`
* Relação: `Task.StatusId → Status.Id`

Exemplo de `Status`:

| Id | Nome        |
| -- | ----------- |
| 1  | Pendente    |
| 2  | EmProgresso |
| 3  | Concluida   |

---

## Observações

* Rode a **API primeiro**, depois o frontend.
* Use **Insomnia** ou **Postman** para testar a API.
* Frontend consome os endpoints via Axios.