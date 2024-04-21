import RestaurantFood_Square from "/Users/ty/Documents/GitHub/Restaurant-Demo-Coursera/final-project/src/assets/restauranfood_square.jpg"

export default function BannerSection(){
    return(
        <>
            <div className="BannerSectionWrapper">
                <div className="BannerSectionWrapper-Left">
                    <h1>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>Nestled within the bustling streets of Chicago, "Little Lemon" emerges as a vibrant.</p>
                    <br/>
                    <button type="button">Reserve a table</button>
                </div>
                <div className="BannerSectionWrapper-Right">
                    <img src={RestaurantFood_Square} width="320px"/>
                </div>
            </div>
        </>
    )
}