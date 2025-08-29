import axios from 'axios';

const BASE_URL = "http://52.207.240.219:5001"; 

export const registerUser = (data) => axios.post(`${BASE_URL}/register`, data);
export const loginUser = (data) => axios.post(`${BASE_URL}/login`, data);
export const getUserProfile = (id) => axios.get(`${BASE_URL}/profile/${id}`);
export const updateUserProfile = (id, data) =>
    axios.put(`${BASE_URL}/profile/${id}`, data);
