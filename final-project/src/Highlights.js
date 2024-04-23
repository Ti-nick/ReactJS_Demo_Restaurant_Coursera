import RestaurantFood_Square from "/Users/ty/Documents/GitHub/Restaurant-Demo-Coursera/final-project/src/assets/restauranfood_square.jpg"

export default function HighlightsSection(){
    return (
        <>
            <div className="HighlightsWrapper">
                <h1>This Weeks Specials!</h1>
                <button type="button">Online Menu</button>
            </div>
            <div className="HighlightsCardSection">
                <section className="Card">
                    <img src={RestaurantFood_Square} alt="food" width="200px"/>
                    <div className="CardInfo">
                        <div className="CardHeader"><h3>Food Name</h3><p>price</p></div>
                        <p>Food IntroductionFood IntroductionFood IntroductionFood IntroductionFood Introduction</p>
                        <a href="#">Order a delivery...</a>
                    </div>
                </section>
                <section className="Card">
                    <img src={RestaurantFood_Square} alt="food" width="200px"/>
                    <div className="CardInfo">
                        <div className="CardHeader"><h3>Food Name</h3><p>price</p></div>
                        <p>Food IntroductionFood IntroductionFood IntroductionFood IntroductionFood Introduction</p>
                        <a href="#">Order a delivery...</a>
                    </div>
                </section>
                <section className="Card">
                    <img src={RestaurantFood_Square} alt="food" width="200px"/>
                    <div className="CardInfo">
                        <div className="CardHeader"><h3>Food Name</h3><p>price</p></div>
                        <p>Food IntroductionFood IntroductionFood IntroductionFood IntroductionFood Introduction</p>
                        <a href="#">Order a delivery...</a>
                    </div>
                </section>
            </div>
        </>
    )
}