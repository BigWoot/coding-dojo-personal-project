import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="border border-dark border-3 d-flex justify-content-between align-items-center bg-info mb-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1>Your World</h1>
                <div className="">
                    <button className="btn btn-secondary btn-outline-dark m-2"><Link to="/" className="link-light">Home</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Banner;