import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
  const [busca, setBusca] = useState('');

  function handlePesquisar(event: React.FormEvent) {
    event.preventDefault();
    console.log("O usuário pesquisou: ", busca)
    //aqui vou implementar a conexão com os cards depois mas o console mostra q funciona
  }

  return (
    <form className={styles.searchContainer} onSubmit={handlePesquisar}>
      <input 
        type="text" 
        className={styles.input}
        placeholder="Buscar demandas por palavras-chave..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Pesquisar
      </button>
    </form>
  );
}