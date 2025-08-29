import axios from 'axios';

const BASE_URL = "/api/flights";  //  goes through Nginx

export const getFlights = () => axios.get(`${BASE_URL}`);
export const bookFlight = (data) => axios.post(`/api/book`, data);
