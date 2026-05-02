import styles from './CardDemanda.module.css';

interface CardDemandaProps {
  categoria: string;
  titulo: string;
  orgao: string;
  prazo: number;
  valor: number;
}

export function CardDemanda({ categoria, titulo, orgao, prazo, valor }: CardDemandaProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.description}>{orgao}</p>
      </div>
      
      <div className={styles.content}>
        <p><strong>Categoria:</strong> {categoria}</p>
        <p><strong>Prazo:</strong> {prazo} dias</p>
        <p><strong>Orçamento:</strong> R$ {valor.toLocaleString('pt-BR')}</p>
      </div>

      <div className={styles.footer}>
        <button className={styles.btnSecondary}>Ver detalhes</button>
        <button className={styles.btnPrimary}>Tenho interesse</button>
      </div>
    </div>
  );
}