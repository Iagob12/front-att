import React from 'react';
import BackToTop from "../../components/BackToTop";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../Styles/Sobre-nos/style.css';

//Import das Imagens 
import integrantes from '../../assets/Sobre-nos/integrantes.png';
import imgAlimentos from '../../assets/Sobre-nos/alimentos.png';
import imgPandemia from '../../assets/Sobre-nos/imgPandemia.png';
import imgSede from '../../assets/Sobre-nos/imgSede.png';
import imgPapaiNoel from '../../assets/Sobre-nos/imgPapaiNoel.png';
import iconMissao from '../../assets/Sobre-nos/iconMissao.png';
import iconVisao from '../../assets/Sobre-nos/iconVisao.png';
import iconValores from '../../assets/Sobre-nos/iconValores.png';
import fundadores from '../../assets/Sobre-nos/fundadoresOng.png';

export default function SobreNos() {
    return (
        <>
            <Header />
            <div className="img-sobreNos"></div>
            <section>
                <h1>Nossa História</h1>
                <div className="linha"></div>
                <div className="texto-sobreNos">
                    <img src={integrantes} alt="Integrantes da ONG" />
                    <p>A <span className='texto-destaque'> ONG Voluntários Torcendo Pro Bem </span> foi fundada em 2015 por um grupo de amigos com o objetivo de <span className='texto-destaque'> ajudar pessoas em situação de rua </span>, através da entrega de sopas e roupas todas as terças-feiras à noite. Com o tempo, o projeto cresceu e passou a realizar ações solidárias em datas comemorativas como <span className='texto-destaque'>Natal, Páscoa e Dia das Crianças, além de campanhas de doação de sangue.</span>
                    </p>
                </div>
            </section>
            <main className="container">
                <h1>Nossa História</h1>
                <div className="linha"></div>

                <section className="historia">
                    <article className="card-historia">
                        <div className="ano-acontecimento">
                            <p>2015</p>
                        </div>
                        <div className="descricao">
                            <img src={imgAlimentos} alt="Alimentos arrecadados" />
                            <div className="acontecimento-esquerda">
                                <h2>Início das Atividades</h2>
                                <p>Iniciou com as entregas de sopa todas as terças-feiras à noite</p>
                            </div>
                        </div>
                    </article>

                    <article className="card-historia">
                        <div className="ano-acontecimento">
                            <p>2020</p>
                        </div>
                        <div className="descricao">
                            <div className="acontecimento-direita">
                                <h2>Pandemia</h2>
                                <p>Mesmo na pandemia, seguiramos com as entregas de sopa e cestas básicas</p>
                            </div>
                            <img src={imgPandemia} alt="Doação de cestas básicas na pandemia" />
                        </div>
                    </article>

                    <article className="card-historia">
                        <div className="ano-acontecimento">
                            <p>2023</p>
                        </div>
                        <div className="descricao">
                            <img src={imgSede} alt="Imagem da Sede construída" />
                            <div className="acontecimento-esquerda">
                                <h2>Construção da Sede</h2>
                                <p>Com apoio do vereador Gilson Barreto, a sede foi construída e passou a oferecer diversas atividades sociais gratuitas</p>
                            </div>
                        </div>
                    </article>

                    <article className="card-historia">
                        <div className="ano-acontecimento">
                            <p>2024</p>
                        </div>
                        <div className="descricao">
                            <div className="acontecimento-direita">
                                <h2>Eventos</h2>
                                <p>Continuamos a realizar eventos de Natal, Páscoa e Dia das Crianças em prol da comunidade</p>
                            </div>
                            <img src={imgPapaiNoel} alt="Eventos realizados" />
                        </div>
                    </article>

                    <article className="card-historia">
                        <div className="ano-acontecimento">
                            <p>2025</p>
                        </div>
                        <div className="descricao">
                            <img src={imgSede} alt="Imagem do projeto Raízes do Bem" />
                            <div className="acontecimento-esquerda">
                                <h2>Projetos</h2>
                                <p>Raízes do Bem visa valorizar a história do bairro e preservar a Praça local.</p>
                            </div>
                        </div>
                    </article>
                </section>
            </main >
            <section className="missoes">
                <article className="missao">
                    <img src={iconMissao} alt="Missão" />
                    <h2>Missão</h2>
                    <p>Promover inclusão social e dignidade por meio da solidariedade, cultura e cidadania, oferecendo oportunidades a crianças, jovens e famílias em situação de vulnerabilidade.</p>
                </article>
                <article className="missao">
                    <img src={iconVisao} alt="Visão" />
                    <h2>Visão</h2>
                    <p>Ser referência em ações voluntárias e projetos comunitários que inspiram transformação social, construindo uma sociedade mais justa, unida e comprometida com o bem comum.</p>
                </article>
                <article className="missao">
                    <img src={iconValores} alt="Valores" />
                    <h2>Valores</h2>
                    <p>Solidariedade, Respeito, Gratuidade, Compromisso, Transparência, Cultura e educação</p>
                </article>
            </section>
            <section className="equipe">
                <h1>Equipe</h1>
                <div className="linha"></div>
                <article className="texto-equipe">
                    <p>Marco Aurélio de Freitas Silvestre é o criador e Presidente da ONG, junto com sua esposa Luciane Dabrins vice-presidente</p>
                    <img src={fundadores} alt="Fundadores da ONG" />
                </article>
            </section>
            <Footer />
            <BackToTop />
        </>
    );
}