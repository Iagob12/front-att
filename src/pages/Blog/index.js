import React from "react";
import BackToTop from "../../components/BackToTop";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../Styles/Blog/style.css'
import campanhaColgate from "../../assets/Blog/companha-colgate.png"

export default function Blog() {
    return (
        <>
            <Header />
            <section className="noticias">
                <h1>Notícias</h1>
                <div className="linha"></div>
                <button>+ Adicionar notícia ao blog</button>
            </section>
            <main className="container-noticias">
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
                <div className="card-noticia">
                    <img src={campanhaColgate} />
                    <p className="data-hora">28 de julho de 2025 - 11:45</p>
                    <hr />
                    <div className="descricao-noticia">
                        <h3>Parceria nova</h3>
                        <p>A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial...</p>
                    </div>
                    <button>Continue →</button>
                </div>
            </main>
            <section className="ver-mais">
                <button>Ver mais</button>
            </section>
            <Footer />
            <BackToTop />
        </>
    )
}