import Person from "../models/person.model.js";

//Create new
async function createPerson(req, res) {
    try {
        const newPerson = await Person.create(req.body);
        res.json(newPerson);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Get all 
async function getAllPersons(req, res) {
    try {
        const allPersons = await Person.find();
        res.json(allPersons);
    } catch(error) {
        console.log(error);
        res.statuss(400).json(error)
    }
}

//Get by ID
async function getOnePerson(req, res) {
    try {
        const foundPerson = await Person.findById(req.params.id);
        res.json(foundPerson);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Update
async function updateOnePerson(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedPerson);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }}

//Delete
async function deleteOnePerson(req, res) {
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);
        res.json(deletedPerson);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export{
    createPerson,
    getAllPersons,
    getOnePerson,
    updateOnePerson,
    deleteOnePerson
};