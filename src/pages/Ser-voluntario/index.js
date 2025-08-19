import React, { useState } from "react";
import BackToTop from "../../components/BackToTop";
import '../../Styles/Ser-voluntario/style.css'
import '../../Styles/Ser-voluntario/voluntario-form.css'
import '../../Styles/shared/forms.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { userService } from '../../services/api';
import { API_CONFIG } from '../../config/api.config';

export default function SerVoluntario(){
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        habilidades: '',
        disponibilidade: ''
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
        if (!formData.telefone.trim()) {
            setMessage({ text: 'Por favor, informe seu telefone.', type: 'error' });
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
            // Aqui seria ideal ter um endpoint específico para voluntários
            // Por enquanto, vamos usar o serviço de usuário com um campo adicional
            await userService.create({
                nome: formData.nome,
                email: formData.email,
                telefone: formData.telefone,
                tipo: 'VOLUNTARIO',
                habilidades: formData.habilidades,
                disponibilidade: formData.disponibilidade
            });
            setMessage({ text: 'Inscrição realizada com sucesso! Entraremos em contato em breve.', type: 'success' });
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                habilidades: '',
                disponibilidade: ''
            });
        } catch (error) {
            console.error('Erro na inscrição:', error);
            setMessage({ 
                text: error.response?.data?.message || 'Erro ao realizar inscrição. Tente novamente.', 
                type: 'error' 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Header />
        <div className="mudancas-container">
            <div className="overlay"></div>
            <div className="mudanca-mundo">
                <h2>A mudança <br />  que o mundo <br /> precisa começa com <br /> sua atitude!</h2>
            </div>
            <div className="fazer-parte">
                <h2>Venha fazer <br /> parte!</h2>
                {!showForm ? (
                    <button onClick={() => setShowForm(true)}>Quero ser um voluntário</button>
                ) : (
                    <div className="voluntario-form">
                        {message.text && (
                            <div className={`message ${message.type}`}>
                                {message.text}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
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
                                <label>Telefone</label>
                                <input 
                                    type="tel" 
                                    name="telefone" 
                                    value={formData.telefone} 
                                    onChange={handleChange} 
                                    required
                                />
                            </div>
                            <div className="input">
                                <label>Habilidades</label>
                                <textarea 
                                    name="habilidades" 
                                    value={formData.habilidades} 
                                    onChange={handleChange} 
                                    placeholder="Descreva suas habilidades e experiências"
                                ></textarea>
                            </div>
                            <div className="input">
                                <label>Disponibilidade</label>
                                <select 
                                    name="disponibilidade" 
                                    value={formData.disponibilidade} 
                                    onChange={handleChange}
                                >
                                    <option value="">Selecione</option>
                                    <option value="Manhã">Manhã</option>
                                    <option value="Tarde">Tarde</option>
                                    <option value="Noite">Noite</option>
                                    <option value="Fins de semana">Fins de semana</option>
                                    <option value="Flexível">Flexível</option>
                                </select>
                            </div>
                            <div className="form-buttons">
                                <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
        <Footer />
            <BackToTop />
        </>
    )
}
