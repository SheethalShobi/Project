import axios from 'axios';
const BASE_URL = "http://localhost:5002";

export const getHolidays = () => axios.get(`${BASE_URL}/holidays`);
export const addHoliday = (data) => axios.post(`${BASE_URL}/holidays`, data);
