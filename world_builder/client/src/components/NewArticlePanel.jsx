import { Link } from "react-router-dom";

const NewArticlePanel = (props) => {

    const {linkDestination, linkName, imageVar} = props;

    return (
        <div>
            <Link to={linkDestination} className="link-dark d-flex flex-column align-items-center mx-4 bg-warning p-2 border border-2 border-dark"><img className="panel-image" src={imageVar} alt={imageVar} />{linkName}</Link>
        </div>
    )
}

export default NewArticlePanel;