import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/global.css'; 

import { Sidebar } from './pages/Vitrine/Home/Components/SideBar'; 
import { VitrineHome } from './pages/Vitrine/Home/VitrineHome';

import Login from './pages/Login/Login';

import GestorLayout from './pages/Gestor/Layout/GestorLayout';
import Dashboard from './pages/Gestor/Dashboard/Dashboard';
import NovaDemanda from './pages/Gestor/NovaDemanda/NovaDemanda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Vitrine */}
        <Route path="/" element={
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ marginLeft: '260px', width: '100%', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
              <VitrineHome />
            </main>
          </div>
        } />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Pagina do gestor */}
        <Route path="/gestor" element={
          <GestorLayout>
            <Dashboard />
          </GestorLayout>
        } />

        {/* Página de nova demanda para o gestor */}
        <Route path="/gestor/nova-demanda" element={
          <GestorLayout>
            <NovaDemanda />
          </GestorLayout>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;