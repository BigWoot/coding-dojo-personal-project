import Location from "../../../server/models/location.model";
import Banner from "../components/Banner";

import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AllLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/api/locations")
            .then((res) => {
                console.log(res.data);
                setLocations(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return(
        <div>
            <Banner />
            <div>
                <ul>
                    {locations.map((location, index) => (
                        <li key={index}><Link  to={`${location._id}/details`}>{location.title}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AllLocations;