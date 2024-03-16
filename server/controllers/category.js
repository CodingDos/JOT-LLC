import jwt from "jsonwebtoken";
import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ error: "Authorization token not provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const userId = decoded.id;

    const categories = await Category.find({ userId });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ error: "Authorization token not provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const userId = decoded.id;

    // Create a new category instance with user ID
    const newCategory = new Category({ ...req.body, userId });

    // Save the new category to the database
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// router.get("/:id", controllers.getCategories); //Will get all categories based on userID
// router.post("/create", controllers.createCategory);
// router.put("/edit/:id", controllers.editCategory); // Will be able to edit a specific category using the category ID
// router.delete("/delete/:id", controllers.deleteCategory); // will be able to delete category using category ID
