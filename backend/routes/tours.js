import express from "express";
import {createTour,deleteTour,getSingleTour,getAllTour,updateTour, getTourBySearch,getFeaturedTour, getTourCount} from "./../controllers/tourControllers.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin,createTour);

router.put("/:id",verifyAdmin,updateTour);

router.delete("/:id",verifyAdmin,deleteTour);

router.get("/:id",getSingleTour);
// get all tour
router.get("/",getAllTour);

// get tour by search
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);


export default router;

