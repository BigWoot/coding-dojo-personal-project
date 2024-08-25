import Banner from "../components/Banner";

import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const LocationDetails = () => {
    const [location, setLocation] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9999/api/locations/${id}`)
        .then((res) => {
            console.log(res.data);
            setLocation(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const deleteLocation = () => {
        axios.delete(`http://localhost:9999/api/locations/${id}`)
        .then((res) => {
            console.log(res.data);
            navigate("/locations");
        })
    }

    return(
        <div>
            <Banner className="align-items-start"/>
            <div className="container d-flex justify-content-between">
                <h2>{location.title}</h2>
                <div className="d-flex">
                    <button className="btn btn-success me-2"><Link to={`/locations/${id}/edit`} className="text-light">EDIT</Link></button>
                    <button onClick={deleteLocation} className="btn btn-danger">DELETE Location</button>
                </div>
            </div>
            <div className="container border border-dark mt-2">
                <div>
                    <h3>History</h3>
                    <p>{location.history}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <div>
                        <p>{location.description}</p>
                    </div>
                </div>
                <div>
                    <h3>Relationships</h3>
                    <p>{location.relationships}</p>
                </div>
            </div>
        </div>
        )
}

export default LocationDetails;