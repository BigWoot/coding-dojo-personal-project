import { Link } from "react-router-dom";

const NewArticlePanel = (props) => {

    const {linkDestination, linkName, imageVar} = props;

    return (
        <div>
            <Link to={linkDestination} className="link-light d-flex flex-column align-items-center mx-4 bg-dark p-2"><img className="panel-image" src={imageVar} alt={imageVar} />{linkName}</Link>
        </div>
    )
}

export default NewArticlePanel;