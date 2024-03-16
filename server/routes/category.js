import { Router } from "express";
import * as controllers from "../controllers/category.js";

const router = Router();

router.get("/:id", controllers.getCategories); //Will get all categories based on userID
router.post("/create", controllers.createCategory);
router.put("/edit/:id", controllers.editCategory); // Will be able to edit a specific category using the category ID
router.delete("/delete/:id", controllers.deleteCategory); // will be able to delete category using category ID

export default router;
