import {Router} from "express";
import { createPerson, getAllPersons, getOnePerson, updateOnePerson, deleteOnePerson } from "../controllers/person.controller.js";

const personRouter = Router();
personRouter.route("/persons")
    .get(getAllPersons)
    .post(createPerson)

personRouter.route("/persons/:id")
    .get(getOnePerson)
    .put(updateOnePerson)
    .delete(deleteOnePerson)

export default personRouter;