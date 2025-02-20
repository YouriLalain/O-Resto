import axios from "axios";

const API_URL = "/api/users"; // Proxy actif

export const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createUser = async (userData) => {  // Vérifie bien que cette fonction est exportée
    const response = await axios.post(API_URL, userData);
    return response.data;
};