import NewArticlePanel from "./NewArticlePanel";
import mountains from "../assets/mountains.png";
import headshot from "../assets/character.png";


const NewArticleSection = () => {
    return (
        <div className="container">
            <h2>Create a new article!</h2>
            <div className="d-flex">
                <NewArticlePanel linkDestination="/locations/new" linkName="Location" imageVar={mountains} />
                <NewArticlePanel linkDestination="/persons/new" linkName="Person" imageVar={headshot} />
            </div>
        </div>
    )
}

export default NewArticleSection;