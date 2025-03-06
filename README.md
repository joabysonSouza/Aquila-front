# 🦅 App Aquila

O **App Aquila** é uma aplicação baseada em **Next.js**, que permite salvar e recuperar **coordenadas em um mapa interativo** utilizando a biblioteca **react-leaflet**. A aplicação pode ser executada tanto localmente quanto dentro de um ambiente **Docker**.

## 🛠️ Tecnologias Utilizadas

- **Next.js** (React + TypeScript)
- **react-leaflet** (para exibir o mapa)
- **Tailwind CSS** (para estilização)
- **Docker & Docker Compose** (para containerização)

---

## 🚀 Como Rodar o Projeto

### 🔹 Rodando Localmente

#### 📌 **Pré-requisitos**

- **Node.js** (recomendado: v18+)

#### 📌 **Passos para rodar**

1. **Clone o repositório**:

   ```sh
   git clonehttps://github.com/joabysonSouza/Aquila-front.git
   cd app-aquila
   ```

   2. **Instale as dependências**:

   ```sh
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:

   ```sh
   npm run dev
   ```

3. **Acesse a aplicação** no navegador:
   ```
   http://localhost:3000
   ```

---

### 🔹 Rodando com Docker

#### 📌 **Pré-requisitos**

- **Docker** e **Docker Compose** instalados

#### 📌 **Passos para rodar**

1. **Clone o repositório**:

   ```sh
   git clonehttps://github.com/joabysonSouza/Aquila-front.git
   cd app-aquila
   ```

   3. **Suba os containers**:

   ```sh
   docker-compose up -d
   ```

2. **Acesse a aplicação** no navegador:
   ```
   http://localhost:3000
   ```

Para parar os containers, use:

```sh
docker-compose down
```
---
