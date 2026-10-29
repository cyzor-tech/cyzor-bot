# Arquitetura

O Cyzor Bot utiliza um monorepo npm workspaces: frontend React/Vite, API NestJS e contratos compartilhados.

## Princípios

- Simulação por padrão; nenhum endpoint de ordem real implementado.
- Segredos exclusivamente no servidor, nunca no frontend ou no repositório.
- Separação futura entre coleta de mercado, estratégias, motor de execução e risco.
- Cada ordem precisará de validação de risco, idempotência e auditoria.
- Operações reais só após aprovação explícita, testes e travas de perdas.
