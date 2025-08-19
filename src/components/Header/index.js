import React from 'react';
import logo from '../../assets/Header/logo.png';
import '../../Styles/Header/style.css'
import { useNavigate, Link } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleCadastroClick = () => {
        navigate('/cadastro');
    };
    
    const handleDoarClick = () => {
        navigate('/como-ajudar');
    };

    return (
        <header className="header">
            <img src={logo} className="logo" alt="Logo da ONG" onClick={() => navigate('/inicial')} style={{cursor: 'pointer'}} />
            <nav className="navegacao">
                <ul>
                    <li><Link to="/eventos">Eventos</Link></li>
                    <li><Link to="/sobre-nos">Quem Somos?</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/como-ajudar">Como ajudar</Link></li>
                </ul>
            </nav>
            <div className="botoes">
                <button className='doar' onClick={handleDoarClick}>Doe agora</button>
                <button className='cadastrar' onClick={handleCadastroClick}>Cadastrar-se →</button>
            </div>
        </header>
    );
}