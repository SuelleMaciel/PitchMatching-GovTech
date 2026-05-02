import React from 'react';
// 1. Importamos a nossa Sidebar Oficial que criamos lá na Vitrine
import { Sidebar } from '../../Vitrine/Home/Components/SideBar'; 
import styles from './GestorLayout.module.css';

interface GestorLayoutProps {
  children: React.ReactNode;
}

const GestorLayout: React.FC<GestorLayoutProps> = ({ children }) => {
  
  return (
    <div className={styles.container}>
      
      <Sidebar />
      
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <span className={styles.pageTitle}>Dashboard</span>
          <div className={styles.userArea}>
            <span>Olá, gestor</span>
            <div className={styles.avatar}>GE</div>
           </div>
        </header>
        <section className={styles.content}>
          {children}
        </section>
      </main>
    </div>
  );
};

export default GestorLayout;