import axios from 'axios';

const BASE_URL = "/api/holidays";  // 👈 goes through Nginx

export const getHolidays = () => axios.get(`${BASE_URL}`);
export const addHoliday = (data) => axios.post(`${BASE_URL}`, data);
