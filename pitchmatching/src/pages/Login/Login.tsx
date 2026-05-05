import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [erro, setErro] = useState(''); 
  
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    setErro('');

    if (email === 'gestor@gov.br' && password === '123456') {
      
      localStorage.setItem('usuarioLogado', 'true'); 
      
      navigate('/gestor'); 
      
    } else {
      setErro('E-mail ou senha incorretos. Tente gestor@gov.br e 123456');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <section className={styles.leftSide}>
        <div className={styles.logoArea}>
          <span>PITCHMATCHING</span>
          <h1>GovTech</h1>
        </div>
        <p className={styles.tagline}>
          Conectando gestores públicos a soluções tecnológicas que transformam serviços e geram impacto real para a sociedade.
        </p>
        <footer className={styles.copy}>
          © 2026 Pitchmatching GovTech
        </footer>
      </section>

      <section className={styles.rightSide}>
        <div className={styles.loginCard}>
          <h2>Acessar painel</h2>
          <p>Entre com suas credenciais para acessar o painel.</p>

          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="seu.nome@orgao.gov.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.loginBtn}>
              Entrar
            </button>
          </form>

          <div className={styles.devNote}>
            Autenticação em desenvolvimento. 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
