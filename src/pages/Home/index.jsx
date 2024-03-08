import Header from "../../components/Header";
import "./styles.css"

function Home() {
    return (
        <>
            <section id="hero">
               <Header/>
                <div id="container">
                    <h1>FRASE MOTIVACIONAL DE IMPACTO</h1>
                    <span className="botao-saiba-mais">Saiba Mais</span>
                </div>
            </section>
            <section id="details">
                <div className="lista">
                    <p>Qualificações Profissionais</p>
                    <dl>
                        <dt>Técnico em Informática pela Microlins</dt>
                        <dt>Desenvolvedor Web pelo Senac</dt>
                    </dl>
                </div>
                <div className="lista">
                    <p>Competencia Profissionais</p>
                    <dl>
                        <dt>Técnico em Informática</dt>
                        <dt>Desenvolvedor Web</dt>
                    </dl>
                </div>
            </section>
        </>
    )
}
export default Home;