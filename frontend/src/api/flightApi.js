import axios from 'axios';
const BASE_URL = "http://localhost:5003";

export const getFlights = () => axios.get(`${BASE_URL}/flights`);
export const bookFlight = (data) => axios.post(`${BASE_URL}/book`, data);
