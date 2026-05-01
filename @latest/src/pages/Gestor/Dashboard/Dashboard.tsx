// pages/Gestor/Dashboard/Dashboard.tsx
import React from 'react';
import styles from './Dashboard.module.css'; // Crie este arquivo na pasta Dashboard

const Dashboard: React.FC = () => {
  // Dados fictícios para exemplo
  const demandas = [
    { id: 1, titulo: "Digitalização de Prontuários", status: "Aberto", impacto: "Alto" },
    { id: 2, titulo: "Otimização de Tráfego Urbano", status: "Em Análise", impacto: "Médio" },
  ];

  return (
    <div className={styles.dashContainer}>
      {/* Cards de Métricas */}
      <div className={styles.metricsGrid}>
        <div className={styles.card}>
          <h3>Tempo Médio</h3>
          <p>15 dias</p>
        </div>
        <div className={styles.card}>
          <h3>Economia Estimada</h3>
          <p>R$ 1.2M</p>
        </div>
      </div>

      <div className={styles.actionHeader}>
        <h2>Minhas Demandas</h2>
        <button className={styles.btnNova}>+ Criar Nova Demanda</button>
      </div>

      {/* Tabela de Demandas */}
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Status</th>
            <th>Impacto</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {demandas.map(item => (
            <tr key={item.id}>
              <td>{item.titulo}</td>
              <td><span className={styles.statusBadge}>{item.status}</span></td>
              <td>{item.impacto}</td>
              <td><button className={styles.btnVisualizar}>Ver Detalhes</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;