import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import "../../Styles/Eventos/style.css"
import alimento from "../../assets/Eventos/alimento.png";
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { eventoService } from '../../services/api';
import '../../Styles/shared/forms.css';
import '../../Styles/Inicial/loading.css';


export default function Eventos() {
    const navigate = useNavigate();
    const [eventos, setEventos] = useState([]);
    const [campanhas, setCampanhas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const handleSaibaMaisClick = (id) => {
        // Aqui poderia navegar para uma página de detalhes do evento/campanha
        alert('Detalhes do evento/campanha serão implementados em breve!');
    };

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await eventoService.getAll();
                // Separando eventos e campanhas
                const eventosData = response.data.filter(evento => evento.tipo === 'EVENTO' || !evento.tipo);
                const campanhasData = response.data.filter(evento => evento.tipo === 'CAMPANHA');
                
                setEventos(eventosData);
                setCampanhas(campanhasData);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
                setError('Não foi possível carregar os eventos. Tente novamente mais tarde.');
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);

    const formatarData = (dataString) => {
        if (!dataString) return 'Data a definir';
        
        try {
            const data = new Date(dataString);
            return data.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
        } catch (error) {
            return dataString;
        }
    };

    return (
        <>
            <Header />
            <div className="img-eventos"></div>
            <main className="container">
                <h1>Eventos</h1>
                <div className="linha"></div>

                {loading ? (
                    <p className="loading-message">Carregando eventos...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    <div className="lista-eventos">
                        {eventos.length > 0 ? (
                            eventos.map((evento, index) => (
                                <div className="card-evento" key={evento.id || index}>
                                    <img src={alimento} alt={evento.titulo || 'Evento'} />
                                    <div className="informacoes">
                                        <h2>{evento.titulo || 'Evento'}</h2>
                                        <p> <FaMapMarkerAlt /> Localização: {evento.local || 'A definir'}</p>
                                        <p> <FaCalendar /> Data: {formatarData(evento.data)}</p>
                                        <button className="saiba-mais" onClick={() => handleSaibaMaisClick(1)}>Saiba mais</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Fallback para quando não há eventos disponíveis
                            <>
                                <div className="card-evento">
                                    <img src={alimento} alt="Evento" />
                                    <div className="informacoes">
                                        <h2>Evento de Natal</h2>
                                        <p> <FaMapMarkerAlt /> Localização: Praça Central</p>
                                        <p> <FaCalendar /> Data: 25 de Dezembro</p>
                                        <button className="saiba-mais" onClick={() => handleSaibaMaisClick(2)}>Saiba mais</button>
                                    </div>
                                </div>
                                <div className="card-evento">
                                    <img src={alimento} alt="Evento" />
                                    <div className="informacoes">
                                        <h2>Evento de Natal</h2>
                                        <p> <FaMapMarkerAlt /> Localização: Praça Central</p>
                                        <p> <FaCalendar /> Data: 25 de Dezembro</p>
                                        <button className="saiba-mais" onClick={() => handleSaibaMaisClick(3)}>Saiba mais</button>
                                    </div>
                                </div>
                                <div className="card-evento">
                                    <img src={alimento} alt="Evento" />
                                    <div className="informacoes">
                                        <h2>Evento de Natal</h2>
                                        <p> <FaMapMarkerAlt /> Localização: Praça Central</p>
                                        <p> <FaCalendar /> Data: 25 de Dezembro</p>
                                        <button className="saiba-mais" onClick={() => handleSaibaMaisClick(4)}>Saiba mais</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </main>
            <section className="campanhas">
                <h1>Campanhas</h1>
                <div className="linha"></div>

                {loading ? (
                    <p className="loading-message">Carregando campanhas...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    <div className="lista-campanhas">
                        {campanhas.length > 0 ? (
                            campanhas.map((campanha, index) => (
                                <div className="card-campanha" key={campanha.id || index}>
                                    <img src={alimento} alt={campanha.titulo || 'Campanha'} />
                                    <div className="info-campanha">
                                        <h2>{campanha.titulo || 'Campanha'}</h2>
                                        <span> <FaCalendar />{campanha.periodo || 'Período a definir'}</span>
                                    </div>
                                    <button className="saiba-mais" onClick={() => handleSaibaMaisClick(5)}>Saiba mais</button>
                                </div>
                            ))
                        ) : (
                            // Fallback para quando não há campanhas disponíveis
                            <>
                                <div className="card-campanha">
                                    <img src={alimento} alt="Campanha" />
                                    <div className="info-campanha">
                                        <h2>Campanha de Alimentos</h2>
                                        <span> <FaCalendar />Seg à Sex</span>
                                    </div>
                                    <button className="saiba-mais" onClick={() => handleSaibaMaisClick(6)}>Saiba mais</button>
                                </div>
                                <div className="card-campanha">
                                    <img src={alimento} alt="Campanha" />
                                    <div className="info-campanha">
                                        <h2>Campanha de Alimentos</h2>
                                        <span> <FaCalendar />Seg à Sex</span>
                                    </div>
                                    <button className="saiba-mais" onClick={() => handleSaibaMaisClick(7)}>Saiba mais</button>
                                </div>
                                <div className="card-campanha">
                                    <img src={alimento} alt="Campanha" />
                                    <div className="info-campanha">
                                        <h2>Campanha de Alimentos</h2>
                                        <span> <FaCalendar />Seg à Sex</span>
                                    </div>
                                    <button className="saiba-mais" onClick={() => handleSaibaMaisClick(8)}>Saiba mais</button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </section>

            <Footer />
            <BackToTop />
        </>
    )
}