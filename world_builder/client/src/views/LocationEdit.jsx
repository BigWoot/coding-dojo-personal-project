import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../components/Banner";


const LocationEdit = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [getter, setter] = useState({
        title: "",
        history: "", 
        description: "",
        relationships: "",
        errors: {}
    })

    const changeHandler = (e) => {
        setter((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        axios.get(`http://localhost:9999/api/locations/${id}`)
        .then((res) => {
            console.log(res.data);
            setter(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9999/api/locations/${id}`, getter)
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/locations");
        })
        .catch(error => {
            console.log(error.response.data.errors);
            setter((prevValue) => ({
                ...prevValue,
                [error]: error.response.data.errors
            }))
        })
    }

    return(
        <div>
            <Banner />
            <div className="container">
                <h2>Add a location!</h2>
                <form onSubmit={submitHandler} className="d-flex">
                    <div className="flex-column d-flex p-2">
                    <label>Title:</label>
                    <input type="text" name="title" className={getter.errors?.title? "border-danger border" : ""} onChange={(e)=>changeHandler(e)} value={getter.title} />
                    {
                        getter.errors?.title?
                        <p className="text-danger"> {getter.errors.title.message} </p>:
                        ""
                    }
                    <label>History:</label>
                    <input type="text" name="history" className={getter.errors?.history? "border-danger border" : ""} onChange={(e)=>changeHandler(e)} value={getter.history} />
                    {
                        getter.errors?.history?
                        <p className="text-danger"> {getter.errors.history.message} </p>:
                        ""
                    }
                    <label>Description:</label>
                    <input type="string" name="description" className={getter.errors?.description? "border-danger border" : ""} onChange={(e)=>changeHandler(e)} value={getter.description} />
                    {
                        getter.errors?.description?
                        <p className="text-danger"> {getter.errors.description.message} </p>:
                        ""
                    }
                    </div>
                    <div className="flex-column d-flex p-2">
                        <label>Relationships:</label>
                        <input type="text" name="relationships" className={getter.errors?.relationships? "border-danger border" : ""} onChange={(e)=>changeHandler(e)} value={getter.relationships} />
                        {
                            getter.errors?.relationships?
                            <p className="text-danger"> {getter.errors.relationships.message} </p>:
                            ""
                        }
                        <button className="btn btn-success mt-2">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LocationEdit;