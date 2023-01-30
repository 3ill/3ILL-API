import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createUser, deleteUser, getUsers, getUserId, patchUser} from "../controllers/user.js";
const router = express.Router();



//route to a get request that pulls all the user data
router.get("/", getUsers);

//route to a get request that pulls user by id
router.get("/:id", getUserId );


//route to a post request
router.post("/", createUser) 

//route to a delete request
router.delete("/:id", deleteUser );

//route to patch an object's data
router.patch("/:id", patchUser );

export default router;
