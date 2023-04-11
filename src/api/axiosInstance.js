// == Import
import axios from "axios";

// == Middlewares
export const axiosInstance = axios.create({
  baseURL: 'https://swapster-back-production.up.railway.app'
});
