import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from '../src/pages/Vitrine/Home/Components/SideBar.tsx';
import '../src/assets/global.css'; 
import { VitrineHome } from './pages/Vitrine/Home/VitrineHome.tsx';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '260px', width: '100%', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
          <Routes>
            <Route path="/" element={<VitrineHome />} />
            
            <Route path="/login" element={
              <div style={{ padding: '40px' }}>
                <h1>Página de Login</h1>
                <p>Aqui entrará o formulário para o Gestor ou Proponente acessar o sistema.</p>
              </div>
            } />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;