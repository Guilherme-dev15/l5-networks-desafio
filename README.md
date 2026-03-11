# 🧪 Rick & Morty Dashboard SPA

Single Page Application desenvolvida em **Angular** como parte do desafio técnico para a vaga de **Desenvolvedor Frontend na L5 Networks**.

A aplicação consome a API pública do **Rick & Morty** para exibir **personagens e episódios** em um **layout de dashboard interativo**, permitindo navegação entre listagens, visualização de detalhes e busca dinâmica.

---

# 👨‍💻 Autor

**Guilherme dos Anjos Macedo**

Formação: Análise e Desenvolvimento de Sistemas – UNICID

---

# 🚀 Deploy

A aplicação está hospedada na Vercel.

🔗 Acesse o projeto online  
https://rickmorty-4vlcxnozg-guilherme-dev15s-projects.vercel.app

---
# 🎥 Demonstração

![Preview do Projeto](https://raw.githubusercontent.com/Guilherme-dev15/l5-networks-desafio/refs/heads/main/Rick%20Morty.gif)

---

# 📌 Funcionalidades

### ✔️ Layout de Dashboard
- Cabeçalho fixo
- Menu lateral para navegação
- Estrutura organizada entre páginas

### ✔️ Listagem de Personagens
- Consumo da API do Rick & Morty
- Implementação de **scroll infinito**

### ✔️ Listagem de Episódios
- Exibição dos episódios da série
- Scroll infinito para melhor experiência de navegação

### ✔️ Páginas de Detalhes
Rotas dinâmicas para exibir informações completas:

```
/characters/:id
/episode/:id
```

### ✔️ Barra de Busca Global
- Disponível nas páginas de listagem
- Filtra personagens ou episódios dinamicamente
- Mantém o termo buscado ao navegar entre páginas

### ✔️ Histórico de Navegação
- Registro das rotas visitadas
- Persistência utilizando **localStorage**

### ✔️ Página de Perfil (Opcional)
- Página adicional criada como bônus no desafio

### 🚧 Responsividade
- Estrutura parcialmente responsiva
- Alguns ajustes ainda podem ser feitos para telas menores

---

# 🛠 Tecnologias Utilizadas

- **Angular 20**
- **TypeScript**
- **SCSS**
- **RxJS**
- **Angular Material**
- **ngx-infinite-scroll**

---

# 📂 Estrutura do Projeto

```
src/
 ├── app/
 │   ├── core/              # Serviços e modelos compartilhados
 │   ├── features/          # Módulos principais da aplicação
 │   ├── shared/            # Componentes reutilizáveis
 │   ├── app.routes.ts      # Definição das rotas
 │   └── app.component.ts   # Componente raiz da aplicação
 │
 ├── assets/                # Arquivos estáticos
 └── styles/                # Estilos globais
```

---

# ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Guilherme-dev15/l5-networks-desafio.git
```

### 2. Acesse a pasta do projeto

```bash
cd l5-networks-desafio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o servidor de desenvolvimento

```bash
ng serve
```

### 5. Acesse no navegador

```
http://localhost:4200
```

---

# 📡 API Utilizada

A aplicação consome dados da API pública:

https://rickandmortyapi.com/

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins de **avaliação técnica**.
