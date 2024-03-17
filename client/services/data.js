import api from "./apiConfig.js"

export let getData = async (id) => {
    try {
        let response = await api.get(`/categorys/${id}`)
        return response.data

    } catch (error) {
        console.error("error", error)
    }
}