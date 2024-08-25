import Location from "../models/location.model.js";

//Create new
async function createLocation(req, res) {
    try {
        const newLocation = await Location.create(req.body);
        res.json(newLocation);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Get all 
async function getAllLocations(req, res) {
    try {
        const allLocations = await Location.find();
        res.json(allLocations);
    } catch(error) {
        console.log(error);
        res.statuss(400).json(error)
    }
}

//Get by ID
async function getOneLocation(req, res) {
    try {
        const foundLocation = await Location.findById(req.params.id);
        res.json(foundLocation);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//Update
async function updateOneLocation(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedLocation);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }}

//Delete
async function deleteOneLocation(req, res) {
    try {
        const deletedLocation = await Location.findByIdAndDelete(req.params.id);
        res.json(deletedLocation);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export{
    createLocation,
    getAllLocations,
    getOneLocation,
    updateOneLocation,
    deleteOneLocation
};