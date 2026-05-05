import { CardDemanda } from './CardDemanda';
import styles from './DemandaGrid.module.css';

import { type Demanda } from '../../../../utils/mockDemandas'; 

interface DemandaGridProps {
  demandas: Demanda[];
}

export function DemandaGrid({ demandas }: DemandaGridProps) {
  if (demandas.length === 0) {
    return (
      <div className={styles.vazio}>
        <p>Nenhuma demanda encontrada no momento.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {demandas.map((demanda) => (
        <CardDemanda 
          key={demanda.id}
          categoria={demanda.categoria}
          titulo={demanda.titulo}
          orgao={demanda.orgao}
          prazo={demanda.prazo}
          valor={demanda.valor}
        />
      ))}
    </div>
  );
}