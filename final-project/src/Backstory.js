import FounderPhoto from "./assets/founder_photo.jpeg"

export default function Backstory(){
    return(
        <>
            <div className="BackstoryWrapper">
                <div className="Backstory-Left">
                    <h1>About the Little Lemon</h1>
                    <p>With its cozy ambiance and tantalizing aromas, this hidden culinary oasis beckons diners to embark on a flavorful journey through inventive dishes infused with a citrusy twist. From savory lemon-infused entrées to tangy lemon desserts, "Little Lemon" promises.</p>
                </div>
                <div className="Backstory-Right">
                    <img src={FounderPhoto} width="250px"/>
                </div>
            </div>
        </>
    )
}