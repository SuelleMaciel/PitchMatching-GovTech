import React, { useState } from 'react';
import styles from './NovaDemanda.module.css';

interface DemandaForm {
  titulo: string;
  areaTematica: string;
  prazo: string;
  orcamento: string;
  descricao: string;
}

const NovaDemanda: React.FC = () => {
  const [formData, setFormData] = useState<DemandaForm>({
    titulo: '',
    areaTematica: '',
    prazo: '',
    orcamento: '',
    descricao: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com POST /demandas enviando o formData
    console.log('Enviando para o Back-end:', formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.tituloSecundario}>Criar Nova Demanda</h2>
      <p>Descreva a necessidade do seu órgão para atrair GovTechs.</p>

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Título *</label>
          <input 
            type="text" 
            placeholder="Ex.: Plataforma de agendamento para UBSs" 
            onChange={e => setFormData({...formData, titulo: e.target.value})}
            required 
          />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Área Temática *</label>
            <select onChange={e => setFormData({...formData, areaTematica: e.target.value})} required>
              <option value="">Selecione...</option>
              <option value="saude">Saúde</option>
              <option value="infra">Infraestrutura</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Prazo *</label>
            <input type="date" onChange={e => setFormData({...formData, prazo: e.target.value})} required />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Orçamento estimado (R$) *</label>
          <input type="number" placeholder="Ex.: 50000" onChange={e => setFormData({...formData, orcamento: e.target.value})} required />
        </div>

        <div className={styles.inputGroup}>
          <label>Descrição *</label>
          <textarea 
            rows={5} 
            placeholder="Detalhe o problema e resultados esperados..."
            onChange={e => setFormData({...formData, descricao: e.target.value})}
            required
          />
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn}>Cancelar</button>
          <button type="submit" className={styles.submitBtn}>Publicar Demanda</button>
        </div>
      </form>
    </div>
  );
};

export default NovaDemanda;
