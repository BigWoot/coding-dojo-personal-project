import Banner from "../components/Banner";

import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PersonDetails = () => {
    const [person, setPerson] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9999/api/persons/${id}`)
        .then((res) => {
            console.log(res.data);
            setPerson(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const deletePerson = () => {
        axios.delete(`http://localhost:9999/api/persons/${id}`)
        .then((res) => {
            console.log(res.data);
            navigate("/persons");
        })
    }

    return(
        <div>
            <Banner className="align-items-start"/>
            <div className="container d-flex justify-content-between">
                <h2>{person.name}</h2>
                <div className="d-flex">
                    <button className="btn btn-success me-2"><Link to={`/persons/${id}/edit`} className="text-light">EDIT</Link></button>
                    <button onClick={deletePerson} className="btn btn-danger">DELETE Person</button>
                </div>
            </div>
            <div className="container border border-dark mt-2">
                <div>
                    <h3>History</h3>
                    <p>{person.history}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <div>
                        <p>{person.description}</p>
                    </div>
                </div>
                <div>
                    <h3>Relationships</h3>
                    <p>{person.relationships}</p>
                </div>
            </div>
        </div>
        )
}

export default PersonDetails;