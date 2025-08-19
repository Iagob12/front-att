import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Styles/Cadastro/style.css'
import '../../Styles/shared/forms.css'
import logo from '../../assets/Cadastro/logo.png';
import facebook from '../../assets/Cadastro/facebook.png'
import google from '../../assets/Cadastro/google.png'
import apple from '../../assets/Cadastro/apple.png'
import { authService } from '../../services/api';
import { API_CONFIG } from '../../config/api.config';

export default function Cadastro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.nome.trim()) {
            setMessage({ text: 'Por favor, informe seu nome completo.', type: 'error' });
            return false;
        }
        if (!formData.email.trim() || !API_CONFIG.VALIDATION.EMAIL_REGEX.test(formData.email)) {
            setMessage({ text: 'Por favor, informe um e-mail válido.', type: 'error' });
            return false;
        }
        if (!formData.senha.trim() || formData.senha.length < API_CONFIG.VALIDATION.PASSWORD_MIN_LENGTH) {
            setMessage({ text: `A senha deve ter pelo menos ${API_CONFIG.VALIDATION.PASSWORD_MIN_LENGTH} caracteres.`, type: 'error' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setMessage({ text: '', type: '' });

        try {
            await authService.register(formData.nome, formData.email, formData.senha);
            setMessage({ text: 'Cadastro realizado com sucesso! Redirecionando para o login...', type: 'success' });
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Erro no cadastro:', error);
            setMessage({ 
                text: error.response?.data?.message || 'Erro ao realizar cadastro. Tente novamente.', 
                type: 'error' 
            });
        } finally {
            setLoading(false);
        }
    };

    const redirectToLogin = () => {
        navigate('/login');
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
                    <h1>Cadastrar-se</h1>
                    {message.text && (
                        <div className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="input">
                                <label>Nome Completo</label>
                                <input 
                                    name="nome" 
                                    value={formData.nome} 
                                    onChange={handleChange} 
                                    required
                                />
                            </div>
                            <div className="input">
                                <label>E-mail</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required
                                />
                            </div>
                            <div className="input">
                                <label>Senha</label>
                                <input 
                                    type="password" 
                                    name="senha" 
                                    value={formData.senha} 
                                    onChange={handleChange} 
                                    required
                                    minLength={API_CONFIG.VALIDATION.PASSWORD_MIN_LENGTH}
                                />
                            </div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Cadastrando...' : 'Cadastrar-se'}
                            </button>
                            <p>ou faça login com</p>
                            <div className="opcoes-login">
                                <img src={facebook} alt="Cadastrar com Facebook" />
                                <img src={google} alt="Cadastrar com Google" />
                                <img src={apple} alt="Cadastrar com Apple" />
                            </div>
                            <div className="cadastre-se-aqui">
                                <p>Já tem uma conta? <span onClick={redirectToLogin}>Faça login aqui</span></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}