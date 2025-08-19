import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login/style.css'
import logo from '../../assets/Cadastro/logo.png'
import facebook from '../../assets/Cadastro/facebook.png'
import google from '../../assets/Cadastro/google.png'
import apple from '../../assets/Cadastro/apple.png'
import { authService } from '../../services/api';
import { API_CONFIG } from '../../config/api.config';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Validar campos obrigatórios
            if (!formData.email.trim() || !formData.senha.trim()) {
                throw new Error('Todos os campos são obrigatórios');
            }

            // Validar email
            if (!API_CONFIG.VALIDATION.EMAIL_REGEX.test(formData.email)) {
                throw new Error('Email inválido');
            }

            // Fazer login
            await authService.login(formData);
            
            setMessageType('success');
            setMessage('Login realizado com sucesso! Redirecionando...');
            
            // Redirecionar para página inicial após login
            setTimeout(() => {
                navigate('/inicial');
            }, 1500);

        } catch (error) {
            setMessageType('error');
            setMessage(error.message || 'Erro ao fazer login');
        } finally {
            setLoading(false);
        }
    };

    const handleCadastrar = () => {
        navigate('/cadastro');
    };

    return (
        <>
            <div className="container-cadastro">
                <div className="img-pessoas">
                    <div className="overlay"></div>
                    <div className="topo">
                        <img src={logo} alt="Logo da ONG" />
                        <p>Fazer o Bem <br /> Faz Muito Bem</p>
                    </div>
                    <h2>Quem ajuda <br /> transforma <br /> vidas.</h2>
                </div>
                <div className="cadastro">
                    <h1>Login</h1>
                    
                    {message && (
                        <div className={`message ${messageType}`}>
                            {message}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="inputs">
                        <div className="input">
                            <label>E-mail</label>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Digite seu e-mail"
                                required
                            />
                        </div>
                        <div className="input">
                            <label>Senha</label>
                            <input 
                                type="password"
                                name="senha"
                                value={formData.senha}
                                onChange={handleInputChange}
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                        
                        <p>ou faça login com</p>
                        <div className="opcoes-login">
                            <img src={facebook} alt="Login com Facebook" />
                            <img src={google} alt="Login com Google" />
                            <img src={apple} alt="Login com Apple" />
                        </div>
                        
                        <div className="cadastre-se-aqui">
                            <p>Não tem uma conta? <span className="cadastre-se-aqui" onClick={handleCadastrar}>Cadastre-se aqui</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}