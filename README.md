# Desafio Front-end

Bem-vindo ao desafio frontend. Seu objetivo é criar uma aplicação para gerenciar aluguel de motos e entregadores.

Os projetos Desafio Front-end e [Desafio Back-end]() estão relacionados entre si como SPA e API.

## A Estrutura

O projeto usa como base o __Nuxt UI Minimal Starter__.

Dê uma olhada em [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) e [Nuxt UI docs](https://ui.nuxt.com) para aprender mais.

## Configuração

Tenha certeza que instalou as dependências:

```bash
# make
make install
```

Ou direto do projeto:

```bash
# npm
cd ./app
npm install
```

## Servidor de Desenvolvimento

Inicio o servidor de desenvolvimento em `http://localhost:3000`:

```bash
# make
make run dev
```

Ou direto do projeto:

```bash
# npm
cd ./app
npm run dev
```

## Produção

Compile a aplicação para produção:

```bash
# npm
cd ./app
npm run build
```

Previsualize a compilação de produção:

```bash
# npm
cd ./app
npm run preview
```

## Classes TypeScript

As classes estão em './app/clients.cs são geradas automaticamente pelo NSwag do projeto Desafio_BackEnd e copiadas manualmente nesse projeto.

Dê uma olhada em [documentação de deployment](https://nuxt.com/docs/getting-started/deployment) para mais informações.
