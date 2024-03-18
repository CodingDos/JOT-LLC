import api from "./apiConfig.js";

export const getCategories = async () => {
    try {
        const response = await api.get("/category");
        return response.data;
    } catch (error) {
        console.error("Error getting all categories: ", error);
        throw error; // Rethrow the error to handle it in the caller
    }
}

export const createCategory = async (categoryData) => {
    try {
        const response = await api.post("/category/create", categoryData);
        return response.data;
    } catch (error) {
        console.error("Error creating category: ", error);
        throw error;
    }
}