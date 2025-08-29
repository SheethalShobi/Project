import axios from "axios";

const API_URL = "api/recommendation/"; // Flask service

export const getRecommendation = async (query) => {
  try {
    return await axios.post(API_URL, { query });
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    throw error;
  }
};
