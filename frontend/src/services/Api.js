import axios from "axios";

// Uses VITE_API_URL when set (e.g. in production/deployment),
// falls back to localhost for local development.
const API = axios.create({

    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api"

});

export default API;