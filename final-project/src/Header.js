import Logo from "/Users/ty/Documents/GitHub/Restaurant-Demo-Coursera/final-project/src/assets/Logo.svg"

export default function Header() {
    return(
        <header className="header">
            <img src={Logo}/>
            <nav className="nav-container">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Reservation</a>
                    <a href="#">Order-Online</a>
                    <a href="#">Login</a>
            </nav>
        </header>
    )
}