import './styles.css';

export default function Agendamento() {
    return (
        <>
            <section>
                <div id="agendamento">
                    <section id="card">
                        <form action="" id="formulario">
                            <h3>Agende seu horario agora</h3>
                            <input type="date" name="dataAgendamento" id="dataAgendamento" />
                            <select name="tipoTrabalho" id="tipoTrabalho">
                                <option value="">Selecione uma opção</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="2">5</option>
                                <option value="2">6</option>
                                <option value="2">7</option>
                            </select>
                            <button type="submit">Agendar</button>
                        </form>
                    </section>
                </div>
            </section>
        </>
    )
}