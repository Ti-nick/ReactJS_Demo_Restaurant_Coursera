import Logo from "/Users/ty/Documents/GitHub/Restaurant-Demo-Coursera/final-project/src/assets/Logo.svg"

export default function Footer() {
    return(
        <footer>
            <img src={Logo}/>
            <section>
                <label>Doormat</label>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservation</a></li>
                    <li><a>Order-Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </section>

            <section>
                <label>Contact</label>
                <ul>
                    <li><a>Address</a></li>
                    <li><a>Phone</a></li>
                    <li><a>Email</a></li>
                </ul>
            </section>

            <section>
                <label>Social Media</label>
                <ul>
                    <li><a>Instagram</a></li>
                    <li><a>Facebook</a></li>
                    <li><a>Twritter</a></li>
                </ul>
            </section>
        </footer>
    )
}