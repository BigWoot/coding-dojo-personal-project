import Banner from "../components/Banner";

import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import NewArticleSection from "../components/NewArticleSection";

const Home = () => {
    const [locations, setLocations] = useState([]);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/api/locations")
            .then((res) => {
                console.log(res.data);
                setLocations(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        axios.get("http://localhost:9999/api/persons")
            .then((res) => {
                console.log(res.data);
                setPersons(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        <div className="bg-light bg-gradient root">
            <Banner />
            <div className="container d-flex justify-content-between">
                <div>
                    <h2>Locations</h2>
                    <ul className="list-group">
                        {locations.map((location, index) => (
                            <li key={index} className="list-group-item border border-warning bg-secondary"><Link  to={`/locations/${location._id}/details`} className="link-warning">{location.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>People</h2>
                    <ul className="list-group">
                        {persons.map((person, index) => (
                            <li key={index} className="list-group-item border border-warning bg-secondary"><Link  to={`/persons/${person._id}/details`}  className="link-warning">{person.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Countries</h2>
                    <ul className="list-group">

                    </ul>
                </div>
                <div>
                    <h2>Religions</h2>
                    <ul className="list-group">

                    </ul>
                </div>
            </div>
            <NewArticleSection />
        </div>
    )
}

export default Home;