import { Router } from "express";
import * as controllers from "../controllers/auth.js";

const router = Router();

//ROUTES
router.post("/register", controllers.registerUser); //Will create a new user in the register endpoint
router.post("/login", controllers.login); //Will log user in
router.get("/verify", controllers.verify); //will verify user with their unique token
// router.post("/change-password", controllers.changePassword); //Will allow user to change their password

export default router;

//ADMIN ROUTES
router.get("/users", controllers.getUsers);
