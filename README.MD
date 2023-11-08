# Documentação da Estrutura do Projeto

Esta documentação serve como um guia para a estrutura do projeto, que segue os princípios da Clean Architecture para garantir a manutenção e a escalabilidade. Abaixo está uma descrição de cada diretório e arquivo principal do projeto, junto com instruções de execução.

## TL;DR

- Estrutura baseada na Clean Architecture.
- Execução via Webpack e scripts NPM.
- Desenvolvimento com suporte a hot reload.

## Estrutura de Diretórios

```plaintext
root/
  ├── dist/                  # Arquivos compilados e bundles gerados pelo Webpack.
  ├── node_modules/          # Módulos e dependências do projeto.
  ├── src/
  │   ├── domain/              # Lógica de negócios central e entidades de domínio.
  │   │   ├── entities/      # Modelos de domínio da aplicação.
  │   │   ├── use_cases/     # Lógica de aplicação (regras de negócio).
  │   │   └── interfaces/    # Contratos para camadas externas adaptarem-se à lógica de negócios.
  │   ├── infrastructure/    # Implementação de detalhes externos (frameworks, DB, etc).
  │   │   ├── db/            # Acesso e manipulação do banco de dados.
  │   │   └── api/           # Configurações e endpoints do servidor API.
  │   ├── presentation/                # Interface de usuário, páginas e componentes.
  │   │   ├── components/    # Componentes React reutilizáveis.
  │   │   │   └── section.tsx   # Componente seção exemplo.
  │   │   ├── pages/         # Componentes específicos de cada página.
  │   │   ├── hooks/         # Custom hooks do React.
  │   │   │   └── useToggle.ts  # Custom hook para alternar estados.
  │   │   └── app.tsx        # Ponto de entrada da aplicação React.
  │   |── server/            # Configuração e inicialização do servidor SSR.
  │   |   └── index.tsx      # Ponto de entrada do servidor Node.js.
  │   └── app.tsx            # Construção do app.
  ├── public/                # Arquivos estáticos como HTML, imagens, etc.
  │   └── index.html         # Arquivo HTML base para a aplicação.
  ├── .gitignore             # Arquivos e diretórios ignorados pelo Git.
  ├── package.json           # Metadados do projeto e scripts de execução.
  ├── package-lock.json      # Snapshot das dependências para instalação consistente.
  ├── README.md              # Documentação introdutória do projeto.
  ├── tsconfig.json          # Configurações do compilador TypeScript.
  ├── .babelrc               # Configurações do Babel.
  ├── webpack.config.js      # Configuração do Webpack para o cliente.
  ├── webpack.server.js      # Configuração do Webpack para o SSR.
  └── yarn.lock              # Alternativa ao package-lock.json para o gerenciador de pacotes Yarn.
```

## Formas de Execução

Para executar este projeto, você pode usar os seguintes comandos NPM:

- `npm run build`: Compila tanto o cliente quanto o servidor.
- `npm start`: Inicia o servidor a partir dos arquivos compilados em `dist/`.
- `npm run dev`: Roda o processo de build e inicia o servidor e o cliente em modo de desenvolvimento com hot reload.
- `npm run dev:client`: Inicia o servidor de desenvolvimento do Webpack para o cliente.
- `npm run dev:server`: Inicia o servidor Node.js usando nodemon para reinício automático.

Certifique-se de ter todas as dependências instaladas executando `npm install` antes de tentar iniciar o projeto.
