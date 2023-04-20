// == Import
import axios from "axios";

// == Middlewares

// création de url de base pour l'appel api à l'application swapster back
export const axiosInstance = axios.create({
  baseURL: 'https://swapster-back-production.up.railway.app'
});
