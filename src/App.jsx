import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Agendamento from './pages/Agendamento'
import Login from './pages/Login'
import Contato from './pages/Contato'

export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/agendamento" element={<Agendamento />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Contato" element={< Contato/>}/>
            </Routes>

        </BrowserRouter>

    )
}