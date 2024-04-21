import Logo from "/Users/ty/Documents/GitHub/Restaurant-Demo-Coursera/final-project/src/assets/Logo.svg"

export default function Footer() {
    return(
        <footer>
            <img src={Logo}/>
            <div className="footer-section-wrapper">

            <section>
                <label>Doormat</label>
                <ul className="footer-ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order-Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </section>

            <section>
                <label>Contact</label>
                <ul className="footer-ul">
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </section>

            <section>
                <label>Social Media</label>
                <ul className="footer-ul">
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twritter</a></li>
                </ul>
            </section>

            </div>
        </footer>
    )
}