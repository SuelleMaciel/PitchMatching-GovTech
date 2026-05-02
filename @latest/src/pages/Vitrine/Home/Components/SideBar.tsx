import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img height={130} width={130} src="../src/assets/logo-temporaria-exemplo.png"></img>
        <h2>Pitchmatching GovTech</h2>
      </div>
      
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Vitrine (Home)
        </Link>
        
        <Link to="/login" className={styles.link}>
          Login / Acesso
        </Link>
      </nav>
    </aside>
  );
}