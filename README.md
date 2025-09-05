# Desafio Frontend – Rick & Morty SPA

Esta é uma **Single Page Application (SPA)** desenvolvida em **Angular** como parte do desafio técnico para a vaga de Desenvolvedor Frontend na **L5 Networks**.  
A aplicação consome a [API do Rick & Morty](https://rickandmortyapi.com/) para exibir informações sobre **personagens** e **episódios** em um layout de dashboard.

---

##  Autor  
**Guilherme dos Anjos Macedo**

---

##  Deploy  
A aplicação está hospedada na Vercel:  
🔗 [Acesse o projeto online](https://rickmorty-4vlcxnozg-guilherme-dev15s-projects.vercel.app/characters/4)

---



##  Funcionalidades Implementadas

A aplicação atende a todos os requisitos obrigatórios e opcionais do desafio:

- [✔️] **Layout de Dashboard**  
  - Cabeçalho e menu lateral fixos asseguram navegação clara e consistente.

- [✔️] **Listagem de Personagens**  
  - Mostra personagens com **scroll infinito** para carregamento contínuo.

- [✔️] **Listagem de Episódios**  
  - Também possui **scroll infinito** para a navegação fluida.

- [✔️] **Páginas de Detalhes**  
  - Rotas específicas `/characters/:id` e `/episode/:id` apresentam detalhes completos ao clicar.

- [✔️] **Roteamento Angular**  
  - Navegação entre páginas gerenciada pelo sistema de rotas do Angular.

- [✔️] **Barra de Busca Global**  
  - Exibida somente nas páginas de listagem.  
  - Filtra dinamicamente os resultados ativos — personagens ou episódios.  
  - O termo buscado permanece mesmo após navegação entre as listagens.

- [✔️] **Histórico de Navegação**  
  - Registra todas as rotas visitadas.  
  - Utiliza **localStorage** para manter o histórico mesmo após recarregamento.

- [✔️] **Página de Perfil (Opcional)**  
  - Uma página estática adicional criada como bônus.

- [🚧] **Responsividade**  
  - Responsivo em essência; ainda precisa de ajustes para dispositivos menores.

---

##  Tecnologias Utilizadas

- **Angular 20** (Standalone Components) — modularidade e organização.  
- **TypeScript** — segurança, tipagem e clareza no código.  
- **SCSS** — estilos estruturados com variáveis e organização.  
- **RxJS** — reatividade e gerenciamento de estados assíncronos.  
- **Angular Material** — componentes de UI consistentes e acessíveis.  
- **ngx-infinite-scroll** — rolagem infinita eficiente para listagens.

---

##  Estrutura do Projeto

```plaintext
src/
 ├── app/
 │   ├── core/              # Serviços, modelos e infraestruturas compartilhadas
 │   ├── features/          # Módulos: personagens, episódios, perfil
 │   ├── shared/            # Componentes reutilizáveis e utilitários
 │   ├── app.routes.ts      # Definição das rotas principais
 │   └── app.component.ts   # Componente raiz com layout base
 ├── assets/                # Imagens, ícones e arquivos estáticos
 └── styles/                # Estilos globais (SCSS)


## ⚙️ Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/rick-morty-spa.git
   cd rick-morty-spa
Instale as dependências:

bash
Copy code
npm install
Inicie o servidor local:

bash
Copy code
ng serve
Acesse no navegador:

arduino
Copy code
http://localhost:4200
