import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container d-flex justify-content-between align-items-center">
            <h1>Locations</h1>
            <div className="">
                <button className="btn btn-outline-success m-2"><Link to="/locations/new" className="text-color-white">Add a Location</Link></button>
                <button className="btn btn-outline-success m-2"><Link to="/locations" className="text-color-white">Home</Link></button>
            </div>
        </div>
    )
}

export default Banner;