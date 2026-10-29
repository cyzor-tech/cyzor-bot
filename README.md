# Cyzor Bot

Plataforma modular para pesquisa e simulação de estratégias de trading, com foco inicial na Deriv.

## Estrutura planejada
- `apps/web`: React + Vite
- `apps/api`: NestJS
- `packages/shared`: modelos TypeScript
- `docs`: arquitetura e segurança
- `.github/workflows`: integração contínua

Por segurança, a base começa em modo de simulação e não executa ordens reais.
