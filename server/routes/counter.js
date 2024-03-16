import { Router } from "express"
import * as controllers from "../controllers/counter.js"


const router = Router()

router.get("/:categoryId/counters", controllers.getControllers)// WILL GET ALL COUNTERS BASED ON CATEGORY
router.post("/:categoryId/counters/create", controllers.createCounter)
router.put("/:categoryId/:counterId/edit", controllers.editCounter)
router.delete("/:categoryId/:counterId/delete", controllers.deleteCounter)


export default router