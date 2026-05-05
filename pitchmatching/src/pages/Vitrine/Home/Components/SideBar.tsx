import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

export function Sidebar() {
  const isLogado = localStorage.getItem('usuarioLogado') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    
    window.location.href = '/'; 
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img height={130} width={130} src="../src/assets/logo-temporaria-exemplo.png" alt="Logo" />
        <h2>Pitchmatching GovTech</h2>
      </div>
      
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Vitrine (Home)
        </Link>
        
        {isLogado ? (
          <>
            <Link to="/gestor" className={styles.link}>
              Dashboard
            </Link>
            
            <Link to="/gestor/nova-demanda" className={styles.link}>
              Nova Demanda
            </Link>
            
            <button 
            onClick={handleLogout} 
            className={styles.btnLogout}>
            Sair
            </button>
          </>
        ) : (
          <Link to="/login" className={styles.link}>
            Login / Acesso
          </Link>
        )}
      </nav>
    </aside>
  );
}