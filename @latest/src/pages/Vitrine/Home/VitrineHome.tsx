import styles from './VitrineHome.module.css';
import { FilterBar } from '../Home/Components/FilterBar'
import { SearchBar } from '../Home/Components/SearchBar';
import { DemandaGrid } from '../Home/Components/DemandaGrid';

import { mockDemandas } from '../../../utils/mockDemandas'; 

export function VitrineHome() {
  
  const demandasPublicas = mockDemandas.filter(demanda => demanda.status === 'Aberto'); // na vitrine só aparecem os que estão em aberto

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Plataforma Aberta de Inovação Pública</h1>
        <p>Conectando os desafios do setor público às melhores soluções tecnológicas do Maranhão.</p>
        <div className={styles.buscaContainer}>
          <SearchBar />
        </div>
      </header>

      <main className={styles.conteudo}>
        <FilterBar />
        <DemandaGrid demandas={demandasPublicas} />
      </main>
    </div>
  );
}