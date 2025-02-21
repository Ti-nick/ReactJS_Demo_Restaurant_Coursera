import Logo from "./assets/Logo.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header className="header">
            <img src={Logo}/>
            <nav className="nav-container">
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/online-menu">Menu</Link>
                    <Link to="/booking">Reservation</Link>
                    <Link to="/">Order-Online</Link>
                    <Link to="/">Login</Link>
            </nav>
        </header>
    )
}