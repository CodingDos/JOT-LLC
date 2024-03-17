import axios from "axios";

// Defines a function to asynchronously get the authentication token from local storage
const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

// Creates a new Axios instance with a base URL taken from your environment variables
// This base URL is where your API requests will be sent by default
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, ///////// WILL NEED TO TEST THIS /////////
});

api.interceptors.request.use(
  async function (config) {
    // Before sending each request, this function is called
    // 'config' contains the request configuration like URL, headers, etc.

    // Calls getToken to retrieve the auth token and sets it in the Authorization header
    // This way, every request sent by this Axios instance will include the auth token
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
