import {Router} from "express";
import { createLocation, getAllLocations, getOneLocation, updateOneLocation, deleteOneLocation } from "../controllers/location.controller.js";

const locationRouter = Router();
locationRouter.route("/locations")
    .get(getAllLocations)
    .post(createLocation)

locationRouter.route("/locations/:id")
    .get(getOneLocation)
    .put(updateOneLocation)
    .delete(deleteOneLocation)

export default locationRouter;