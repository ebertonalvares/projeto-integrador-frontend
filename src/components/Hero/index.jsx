import { Link } from "react-router-dom"
import "./styles.css"

export default function Hero() {
    return (
        <section id="hero">
            <div id="container">
                <div id="card">
                    <h1>Nail Designer</h1>
                    <Link to={"/agendamento"}> <span id="call-to-action">Agendar Horário</span></Link>
                </div>
            </div>
        </section>
    )
}