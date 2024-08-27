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
        <div>
            <Banner />
            <div className="container d-flex justify-content-around">
                <div>
                    <h2>Locations</h2>
                    <ul>
                        {locations.map((location, index) => (
                            <li key={index}><Link  to={`/locations/${location._id}/details`}>{location.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>People</h2>
                    <ul>
                        {persons.map((person, index) => (
                            <li key={index}><Link  to={`/persons/${person._id}/details`}>{person.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Countries</h2>
                    <ul>

                    </ul>
                </div>
                <div>
                    <h2>Religions</h2>
                    <ul>

                    </ul>
                </div>
            </div>
            <NewArticleSection />
        </div>
    )
}

export default Home;