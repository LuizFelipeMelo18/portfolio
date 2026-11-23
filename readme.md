# Portfólio · Luiz Felipe Melo

Portfólio em Angular com interface de área de trabalho inspirada no Arch Linux e no Hyprland.

## Estado desta etapa

- Barra inferior com logo do sistema, janelas abertas, idioma PT/EN e relógio.
- Menu do sistema com busca e acesso aos nove aplicativos.
- Janelas com foco, arraste, minimizar, maximizar e fechar.
- Aplicativo **Sobre** em formato fastfetch, com informações profissionais.
- **Projetos**, **Stacks** e **Contato** usam os dados já presentes no portfólio.
- **Personalizar** permite trocar o wallpaper entre oito opções e mantém a escolha no navegador.
- **Experiência e formação**, **Biblioteca**, **Personal** e **Media Player** já abrem como janelas e aguardam suas etapas de conteúdo.
- URLs antigas como `/works`, `/about-me` e `/contacts` abrem o aplicativo correspondente dentro do desktop.

## Desenvolvimento

```bash
npm install
npm start
```

Abra `http://localhost:4200`. Para verificar:

```bash
npm test -- --watch=false
npm run build
```

Os aplicativos e o gerenciador de janelas ficam em `src/app/features/home/`. Os textos em PT/EN ficam em `src/app/core/i18n/`, e os dados dos projetos em `src/app/core/data/projects.ts`.
