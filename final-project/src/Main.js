import Backstory from "./Backstory"
import BannerSection from "./BannerSection"
import HighlightsSection from "./Highlights"
import RatingSection from "./Rating"

export default function Main() {

    return(
        <main>
            <BannerSection/>
            <HighlightsSection/>
            <RatingSection/>
            <Backstory/>
        </main>
    )
}