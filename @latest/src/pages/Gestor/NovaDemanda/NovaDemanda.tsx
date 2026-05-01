// pages/Gestor/NovaDemanda/NovaDemanda.tsx
import React, { useState } from 'react';
import styles from './NovaDemanda.module.css';

const NovaDemanda: React.FC = () => {
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    area: 'Saúde',
    orcamento: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demanda enviada para o Maranhão:", form);
    alert("Demanda cadastrada com sucesso!");
  };

  return (
    <div className={styles.formCard}>
      <h2>Estruturar Novo Desafio</h2>
      <p>Preencha os dados abaixo para que universidades e startups possam propor soluções.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Título do Desafio</label>
        <input 
          type="text" 
          placeholder="Ex: Sistema de Gestão de Resíduos"
          onChange={(e) => setForm({...form, titulo: e.target.value})}
        />

        <label>Descrição Detalhada</label>
        <textarea 
          placeholder="Descreva o problema que precisa de solução..."
          onChange={(e) => setForm({...form, descricao: e.target.value})}
        />

        <div className={styles.row}>
          <div>
            <label>Área Temática</label>
            <select onChange={(e) => setForm({...form, area: e.target.value})}>
              <option>Saúde</option>
              <option>Educação</option>
              <option>Segurança</option>
              <option>Infraestrutura</option>
            </select>
          </div>
          <div>
            <label>Orçamento Estimado (R$)</label>
            <input 
              type="number" 
              onChange={(e) => setForm({...form, orcamento: e.target.value})}
            />
          </div>
        </div>

        <button type="submit" className={styles.btnPublicar}>Publicar na Vitrine</button>
      </form>
    </div>
  );
};

export default NovaDemanda;