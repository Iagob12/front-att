import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicial from './pages/Inicial';
import Eventos from './pages/Eventos';
import SobreNos from './pages/Sobre-nos';
import Blog from './pages/Blog'
import ComoAjudar from './pages/Como-ajudar'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import SerVoluntario from './pages/Ser-voluntario'

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota padrão - redireciona para cadastro */}
        <Route path="/" element={<Navigate to="/cadastro" replace />} />
        
        {/* Rota de cadastro - página inicial do site */}
        <Route path="/cadastro" element={<Cadastro />} />
        
        {/* Rota de login */}
        <Route path="/login" element={<Login />} />
        
        {/* Outras rotas */}
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/como-ajudar" element={<ComoAjudar />} />
        <Route path="/ser-voluntario" element={<SerVoluntario />} />
        
        {/* Rota para qualquer caminho não encontrado - redireciona para cadastro */}
        <Route path="*" element={<Navigate to="/cadastro" replace />} />
      </Routes>
    </Router>
  );
}

export default App;