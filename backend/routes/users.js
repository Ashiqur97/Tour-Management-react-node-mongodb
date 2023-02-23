import express from 'express'
import {getAllUser,getSingleUser,updateUser,deleteUser } from '../controllers/userController.js';

const router = express.Router()
//update tour
router.put("/:id",updateUser);

//delete tour
router.delete("/:id",deleteUser);

//get single tour
router.get("/:id",getSingleUser);

// get all tour
router.get("/",getAllUser);

export default router