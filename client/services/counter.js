import api from "./apiConfig";

export const getCategory = async (categoryId) => {
  try {
    const response = await api.get(`/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCounters = async (categoryId) => {
  try {
    const response = await api.get(`/counters/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCounter = async (counterId) => {
  try {
    const response = await api.get(`/counters/counter/${counterId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createCounter = async (categoryId, counterData) => {
  try {
    const response = await api.post(
      `/counters/create/${categoryId}`,
      counterData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addCount = async (counterId) => {
  try {
    const response = await api.put(`/counters/${counterId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editCounter = async (counterId, counterData) => {
  console.log("Sending to backend:", counterData); // Debugging line to see what's sent to the backend
  try {
    const response = await api.put(`/counters/edit/${counterId}`, counterData);
    console.log("Response from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCounter = async (counterId) => {
  try {
    const response = await api.delete(`/counters/delete/${counterId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
