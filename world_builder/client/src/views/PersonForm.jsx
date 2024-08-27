import Banner from "../components/Banner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const PersonForm = () => {
    const navigate = useNavigate();

    const [getter, setter] = useState({
        name: "",
        age: "", 
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

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9999/api/persons", getter)
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch(error => {
            console.log(error.response.data.errors);
            setter((prevValue) => ({
                ...prevValue,
                errors: error.response.data.errors
            }))
            console.log(getter.errors)
        })
    }

    return(
        <div>
            <Banner />
            <div className="container">
                <h2>Add a person!</h2>
                <form onSubmit={submitHandler} className="d-flex">
                    <div className="flex-column d-flex p-2">
                    <label>Name:</label>
                    <input type="text" name="name" className={getter.errors?.name? "border-danger border" : ""} onChange={(e)=>changeHandler(e)} value={getter.name} />
                    {
                        getter.errors?.name?
                        <p className="text-danger"> {getter.errors.name.message} </p>:
                        ""
                    }
                    <label>Age:</label>
                    <input type="number" name="age" className={getter.errors?.age? "border-danger border" : ""} onChange={(e)=>changeHandler(e)} value={getter.age} />
                    {
                        getter.errors?.age?
                        <p className="text-danger"> {getter.errors.age.message} </p>:
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

export default PersonForm;