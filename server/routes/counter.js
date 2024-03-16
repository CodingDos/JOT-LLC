import { Router } from "express"
import * as controllers from "../controllers/counter.js"


const router = Router()

router.get("/counters", controllers.getCounters)// WILL GET ALL COUNTERS BASED ON CATEGORY
router.post("/counters/create", controllers.createCounter)
router.put("/:counterId/edit", controllers.editCounter)
router.delete("/:counterId/delete", controllers.deleteCounter)


export default router