// pages/Gestor/Layout/GestorLayout.tsx
import React from 'react';
import styles from './GestorLayout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const GestorLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>GovTech</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Minhas Demandas</li>
            <li>Mensagens</li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        <header className={styles.header}>
          <h1>Painel do Gestor Público</h1>
          <button className={styles.btnSair}>Sair</button>
        </header>
        <section className={styles.pageBody}>
          {children}
        </section>
      </main>
    </div>
  );
};

export default GestorLayout;