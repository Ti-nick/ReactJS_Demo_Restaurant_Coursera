import { Link } from "react-router-dom"
import RestaurantFood_Square from "./assets/founder_photo.jpeg"

export default function BannerSection(){
    return(
        <>
            <div className="BannerSectionBackground">
                <div className="BannerSectionWrapper">
                    <div className="BannerSectionWrapper-Left">
                        <h1>Little Lemon</h1>
                        <h4>Chicago</h4>
                        <p>Nestled within the bustling streets of Chicago, "Little Lemon" emerges as a vibrant.</p>
                        <br/>
                        <Link to="/booking"><button type="button">Reserve a table</button></Link>
                    </div>
                    <div className="BannerSectionWrapper-Right">
                        <img src={RestaurantFood_Square} alt="food" width="320px"/>
                    </div>
                </div>
            </div>
        </>
    )
}