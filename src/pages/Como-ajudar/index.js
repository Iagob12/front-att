import React from "react";
import { useNavigate } from "react-router-dom";
import BackToTop from "../../components/BackToTop";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "../../Styles/ComoAjudar/style.css"
import imgAjudar from "../../assets/Como-ajudar/img-ajudar.png"

export default function ComoAjudar() {
    const navigate = useNavigate();
    
    const handleSerVoluntarioClick = () => {
        navigate('/ser-voluntario');
    };
    
    const handleDoarClick = () => {
        // Aqui poderia abrir um modal de doação ou redirecionar para uma página de pagamento
        alert('Funcionalidade de doação será implementada em breve!');
    };
    
    return (
        <>
            <Header />
            <div className="img-comoAjudar">
                <div className="overlay"></div>
                <h1>Como ajudar?</h1>
            </div>
            <main>
                <h1>Faça a diferença</h1>
                <div className="linha"></div>
                <section className="doe-agora-container">
                    <div className="img-ajuda">
                        <img src={imgAjudar} />
                    </div>
                    <div className="doe-agora">
                        <p>A ONG <span> Voluntários Pro Bem </span> sobrevive graças às doações recebidas. Todas as nossas ações, eventos e campanhas são realizadas por meio dos recursos doados, para que esses projetos possam continuar acontecendo e, assim, tanto a comunidade quanto o bairro possam ser transformados. <br /> Por isso, contamos com a sua ajuda. Colabore para um mundo melhor. <br /> Faça a diferença, doe!</p>
                        <button onClick={handleDoarClick}>Doe agora</button>
                    </div>
                </section>
                <section className="area-voluntario">
                    <h2>Fazer o Bem Faz Muito bem</h2>
                    <div className="opcoes-voluntario">
                        <div className="ser-voluntario">
                            <p>Seja um voluntário e nos <br /> ajude em nossas <br /> atividades</p>
                            <button onClick={handleSerVoluntarioClick}>Quero ser um voluntário</button>
                        </div>
                        <div className="mensal">
                            <p>Mensal</p>
                            <h3>Escolha um valor <br /> fixo para doar <br /> mensalmente</h3>
                            <button onClick={handleDoarClick}>Continue</button>
                        </div>
                         <div className="doe">
                            <p>Doe agora</p>
                            <h3>Faça sua doação <br /> agora mesmo</h3>
                            <button onClick={handleDoarClick}>Continue</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}