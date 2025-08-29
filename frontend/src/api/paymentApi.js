import axios from 'axios';
const BASE_URL = "http://localhost:5004";

export const makePayment = (data) => axios.post(`${BASE_URL}/payment`, data);
export const getPayments = (userId) => axios.get(`${BASE_URL}/payment/${userId}`);
