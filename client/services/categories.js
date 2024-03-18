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

export const editCategory = async (categoryId, categoryData) => {
    try {
        const response = await api.put(`/category/edit/${categoryId}`, categoryData);
        return response.data; // Assuming you want to return the updated category data
    } catch (error) {
        console.error("Error editing category: ", error);
        throw error;
    }
}

export const deleteCategory = async (categoryId) => {
    try {
        const response = await api.delete(`/category/delete/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error("Error delete category: ", error)
    }
}
