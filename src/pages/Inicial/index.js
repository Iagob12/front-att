import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackToTop from "../../components/BackToTop";
import '../../Styles/Inicial/conteudo-inicial/style.css';
import '../../Styles/Inicial/atividades/style.css';
import '../../Styles/Inicial/transformando/style.css';
import '../../Styles/Inicial/notificacoes/style.css';
import '../../Styles/Inicial/loading.css';
import '../../Styles/shared/forms.css';

import Header from '../../components/Header';
import { eventoService } from '../../services/api';
import integrantes from '../../assets/Inicial/integrantes.png';
import kickbox from '../../assets/Inicial/kickbox.png';
import formasAjuda from '../../assets/Inicial/formas-ajuda.png';
import Footer from '../../components/Footer';

export default function Inicial() {
    const [atividades, setAtividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAtividades = async () => {
            try {
                const response = await eventoService.getAll();
                // Limitando a 3 atividades para exibição
                setAtividades(response.data.slice(0, 3));
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar atividades:', error);
                setError('Não foi possível carregar as atividades. Tente novamente mais tarde.');
                setLoading(false);
            }
        };

        fetchAtividades();
    }, []);

    const navigate = useNavigate();
    
    const handleVoluntarioClick = () => {
        navigate('/ser-voluntario');
    };

    return (
        <>
            <Header />
            <main className="container">
                <div className="conteudo-inicial">
                    <article className='voluntario'>
                        <h1>Fazer o bem <br /> faz muito <br /> bem!</h1>
                        <p>A ONG Voluntários Torcendo para o Bem atua há anos fazendo o bem para a comunidade local, promovendo eventos e campanhas em prol da população. Venha fazer parte desse movimento!</p>
                        <button onClick={handleVoluntarioClick}>Quero ser um voluntário</button>
                    </article>
                    <div className='img-integrantes'>
                        <img src={integrantes} alt="Integrantes da ONG" />
                    </div>
                </div>
                <section className="atividades">
                    <h1>Conheça nossas atividades</h1>
                    <div className='linha'></div>
                    {loading ? (
                        <p className="loading-message">Carregando atividades...</p>
                    ) : error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <div className='atividades-container'>
                            {atividades.length > 0 ? (
                                atividades.map((atividade, index) => (
                                    <div className='card' key={atividade.id || index}>
                                        <img src={kickbox} alt={atividade.titulo || 'Imagem da atividade'} />
                                        <h3>{atividade.titulo || 'Nome da atividade'}</h3>
                                    </div>
                                ))
                            ) : (
                                // Fallback para quando não há atividades disponíveis
                                <>
                                    <div className='card'>
                                        <img src={kickbox} alt="Imagem da atividade" />
                                        <h3>Nome da atividade</h3>
                                    </div>
                                    <div className='card'>
                                        <img src={kickbox} alt="Imagem da atividade" />
                                        <h3>Nome da atividade</h3>
                                    </div>
                                    <div className='card'>
                                        <img src={kickbox} alt="Imagem da atividade" />
                                        <h3>Nome da atividade</h3>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </section>
                <section className='transformando-vidas'>
                    <div className='img-transformando'></div>
                    <h1>Transformando Vidas</h1>
                    <div className='linha'></div>
                    <div className='formas-ajuda'>
                        <img src={formasAjuda} alt="Transformando Vidas" />
                    </div>
                    <button>Conheça nossa história!</button>
                </section>
                <section className='notificacoes'>
                    <div className='informacoes'>
                        <h1>Fique por dentro!</h1>
                        <p>receba a notificação dos nosso eventos e fique <br /> por dentro!</p>
                    </div>
                    <input type="email" placeholder='Seu e-mail aqui' />
                </section>
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}