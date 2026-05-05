import React from 'react';
import styles from './Dashboard.module.css';
import { mockDemandas } from '../../../utils/mockDemandas';

export interface Demanda {
  id: string;
  titulo: string;
  categoria: string;
  prazo: string;
  status: 'Em Análise' | 'Aberto' | 'Concluído';
}

const Dashboard: React.FC = () => {
    const minhasDemandas = mockDemandas;
    const qtdDemandasAbertas = minhasDemandas.filter(demanda => demanda.status === 'Aberto').length;

    const getStatusStyle = (status: string) => {
        switch(status) {
            case 'Em Análise': return styles.badgeWarning;
            case 'Aberto': return styles.badgeInfo;
            case 'Concluído': return styles.badgeSuccess;
            default: return styles.badgeDefault;
        }
        };

  return (
    <div className={styles.container}>
      <div className={styles.welcomeRow}>
        <div>
          <h2 className={styles.tituloSecundario}>Bem-vindo ao seu painel</h2>
          <p>Acompanhe suas demandas e métricas de impacto.</p>
        </div>
        <button className={styles.createBtn}>+ Criar Nova Demanda</button>
      </div>

      <div className={styles.metricsGrid}>
        <MetricCard label="TEMPO MÉDIO DE RESPOSTA" value="3,2 dias" footer="Tempo entre publicação e proposta." />
        <MetricCard label="IMPACTO ESTIMADO" value="12.500 cidadãos" footer="População potencialmente beneficiada." />
        <MetricCard label="DEMANDAS ABERTAS" value={qtdDemandasAbertas.toString()} footer="Aguardando análise de GovTechs." />
      </div>

      <div className={styles.tableCard}>
        <h3>Minhas Demandas</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>TÍTULO</th>
              <th>CATEGORIA</th> 
              <th>PRAZO (Dias)</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {minhasDemandas.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.titulo}</td>
                <td>{item.categoria}</td> 
                <td>{item.prazo} dias</td>
                <td><span className={getStatusStyle(item.status)}>{item.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, footer }: { label: string, value: string, footer: string }) => (
  <div className={styles.metricCard}>
    <span className={styles.metricLabel}>{label}</span>
    <span className={styles.metricValue}>{value}</span>
    <span className={styles.metricFooter}>{footer}</span>
  </div>
);

export default Dashboard;
