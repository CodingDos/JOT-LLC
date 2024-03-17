import { Router } from "express";
import * as controllers from "../controllers/counter.js";

const router = Router();

router.get("/:categoryId", controllers.getCounters); // WILL GET ALL COUNTERS BASED ON CATEGORY
router.post("/create/:categoryId", controllers.createCounter);
router.put("/edit/:counterId", controllers.editCounter);
router.delete("/delete/:counterId", controllers.deleteCounter);

export default router;
