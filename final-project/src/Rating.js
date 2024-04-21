import RestaurantFood_Square from "/Users/ty/Documents/GitHub/Restaurant-Demo-Coursera/final-project/src/assets/restauranfood_square.jpg"

export default function RatingSection(){
    return(
        <>
            <div className="HighlightsWrapper">
                <h1>Testimonials</h1>
            </div>
            <div className="RatingSection">
                <section className="RatingCardWrapper">
                    <div className="RatingCardInfo">
                        <h2>Rating</h2>
                        <img src={RestaurantFood_Square} alt="food" width="50px"/>
                        <p>Rating</p>
                    </div>
                </section>
                <section className="RatingCardWrapper">
                    <div className="RatingCardInfo">
                        <h2>Rating</h2>
                        <img src={RestaurantFood_Square} alt="food" width="50px"/>
                        <p>Rating</p>
                    </div>
                </section>
                <section className="RatingCardWrapper">
                    <div className="RatingCardInfo">
                        <h2>Rating</h2>
                        <img src={RestaurantFood_Square} alt="food" width="50px"/>
                        <p>Rating</p>
                    </div>
                </section>
                <section className="RatingCardWrapper">
                    <div className="RatingCardInfo">
                        <h2>Rating</h2>
                        <img src={RestaurantFood_Square} alt="food" width="50px"/>
                        <p>Rating</p>
                    </div>
                </section>
            </div>
        </>
    )
}