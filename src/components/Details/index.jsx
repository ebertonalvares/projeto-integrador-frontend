import "./styles.css"

export default function Details() {
    return (
        <>
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