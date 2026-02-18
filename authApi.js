import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const loginUser = async (user) => {
  return await axios.post(`${BASE_URL}/login`, user);
};

export const signupUser = async (user) => {
  return await axios.post(`${BASE_URL}/signup`, user);
};
