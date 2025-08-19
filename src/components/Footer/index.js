import React from 'react';
import logo from "../../assets/Footer/logo.png";
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../Styles/Footer/style.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="localizacao">
                <div className='identificacao'>
                    <div className="logo">
                        <img src={logo} alt="Logo da ONG" />
                    </div>
                    <h3>Voluntários pro bem</h3>
                </div>
                <div className="redes-sociais">
                    <a className="icone" href="https://www.instagram.com/voluntariosprobem/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a className="icone" href="https://www.facebook.com/voluntariosprobem" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a className="icone" href="https://wa.me/colocar-numero" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.483482722575!2d-46.501774977030145!3d-23.585104509436984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce679ff2449f6d%3A0x4d5056f0913dc6f9!2sVolunt%C3%A1rios%20Torcendo%20pro%20Bem!5e0!3m2!1spt-BR!2sbr!4v1753485819461!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className='sobre'>
                <h4>Sobre</h4>
                <nav className='navegacao-footer'>
                    <ul>
                        <li><Link to="/inicial">Home</Link></li>
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/sobre-nos">Quem Somos?</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/como-ajudar">Como Ajudar?</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='ajuda'>
                <h4>Ajuda</h4>
                <nav className='navegacao-footer'>
                    <ul>
                        <li><Link to="/suporte">Suporte</Link></li>
                        <li><Link to="/fale-conosco">Fale Conosco</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='termos'>
                <h4>Termos</h4>
                <nav className='navegacao-footer'>
                    <ul>
                        <li><Link to="/politica-privacidade">Política de Privacidade</Link></li>
                        <li><Link to="/termos-servico">Termos de Serviço</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}