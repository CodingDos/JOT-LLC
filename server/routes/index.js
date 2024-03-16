import { Router } from "express";
import authRoutes from "./authRoutes.js";
import categoryRoutes from "./category.js";  
// import counterRoutes from "./counter.js";   CREATE THIS FILE line 15

const router = Router();

router.get("/", (req, res) => res.send("This is the root")); //This is our landing page "Jot.com/"

router.use("/auth", authRoutes); //authRoutes - will contain /auth/register, /auth/login

router.use("/category", categoryRoutes);
// router.use("/counters", counterRoutes);

export default router;
