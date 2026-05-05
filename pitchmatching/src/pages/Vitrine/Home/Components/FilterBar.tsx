import { useState } from 'react';
import styles from './FilterBar.module.css';

export function FilterBar() {
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [valor, setValor] = useState('');
  const [prazo, setPrazo] = useState('');

  function handleLimparFiltros() {
    setArea('');
    setLocal('');
    setValor('');
    setPrazo('');
  }

  return (
    <div className={styles.filterContainer}>
      <span className={styles.label}>Filtrar por:</span>
      
      <select 
        className={`${styles.select} ${styles.selectArea}`}
        value={area}
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="">Todas as Áreas</option>
        <option value="saude">Saúde</option>
        <option value="educacao">Educação</option>
        <option value="meio_ambiente">Meio Ambiente</option>
        <option value="seguranca">Segurança Pública</option>
      </select>

      <select 
        className={`${styles.select} ${styles.selectLocal}`}
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      >
        <option value="">Qualquer Local</option>
        <option value="sao_luis">São Luís</option>
        <option value="imperatriz">Imperatriz</option>
        <option value="balsas">Balsas</option>
      </select>

      <select 
        className={`${styles.select} ${styles.selectValor}`}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      >
        <option value="">Qualquer Valor</option>
        <option value="ate_100k">Até R$ 100.000</option>
        <option value="100k_300k">R$ 100k a R$ 300k</option>
        <option value="acima_300k">Acima de R$ 300k</option>
      </select>

      <select 
        className={`${styles.select} ${styles.selectPrazo}`}
        value={prazo}
        onChange={(e) => setPrazo(e.target.value)}
      >
        <option value="">Qualquer Prazo</option>
        <option value="ate_30">Até 30 dias</option>
        <option value="ate_60">Até 60 dias</option>
        <option value="mais_60">Mais de 60 dias</option>
      </select>

      <button 
        className={styles.btnLimpar} 
        onClick={handleLimparFiltros}
      >
        Limpar filtros
      </button>
    </div>
  );
}