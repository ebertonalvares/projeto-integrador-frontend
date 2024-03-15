import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
import "./styles.css";

export default function Header() {
    return (
        <header id="menu">
            <nav id="items-menu">
                <Link to={"/"} className="text-right">Home</Link>
                <Link to={"/agendamento"} className="text-right">Agendamento</Link>
                <Link to={"/contato"} className="text-right">Contato</Link>
                <Link to={"/login"} className="text-right">Login</Link>
            </nav>
            <FloatButton id="floatwp" style={{background: "#30df50"}} href="https://wa.me/5546991406373" target="_blank" icon={<WhatsAppOutlined/> } />
        </header>
    )
}
