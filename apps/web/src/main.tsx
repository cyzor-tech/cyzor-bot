import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return <main><header><div className="eyebrow">CYZOR / AUTOMATION</div><h1>Cyzor Bot</h1><p>Painel inicial de pesquisa e simulação de estratégias.</p></header><section className="grid"><article><span>Ambiente</span><strong>Simulação</strong></article><article><span>Status do robô</span><strong>Parado</strong></article><article><span>Corretora</span><strong>Deriv (não conectada)</strong></article></section><section className="panel"><h2>Próximas etapas</h2><p>Conectar dados de mercado, configurar estratégias, criar o simulador de ordens e implementar limites de risco antes de qualquer operação real.</p></section></main>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
