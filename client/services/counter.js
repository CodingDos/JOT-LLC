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
  try {
    const response = await api.put(`/counters/${counterId}`, counterData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCounter = async (counterId) => {
  try {
    const response = await api.delete(`/counters/${counterId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
