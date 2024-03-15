import "./styles.css";

export default function Contato() {
    return (
        <section id="contato">
            <div id="container">
                <div id="card">
                    <h1>Entre em Contato</h1>
                    <form id="agendamento">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" className="input" />
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input type="tel" name="telefone" id="whatsapp" className="input" />
                        <button type="submit" className="button button-agendar"><a href="https://wa.me/5546999999999">Chamar no WhatsApp</a></button>
                    </form>
                </div>
                <div id="card2">
                </div>
            </div>
        </section>
    )
}