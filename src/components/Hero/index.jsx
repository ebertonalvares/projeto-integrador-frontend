import { Link } from "react-router-dom"
import "./styles.css"

export default function Hero() {
    return (
        <section id="hero">
            <div id="container">
                <div id="card">
                    <h1>Nail Designer</h1>
                    <Link id="call-to-action" to={"/agendamento"}><a>Agendar Horário</a></Link>
                </div>
            </div>
        </section>
    )
}