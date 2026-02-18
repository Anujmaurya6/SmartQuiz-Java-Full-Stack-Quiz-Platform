import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// ✅ GET QUESTIONS (FIXED)
export const getQuestions = (subject, level) => {
  const token = localStorage.getItem("token");

  return axios.get(
    `${BASE_URL}/quiz/questions?subject=${subject}&level=${level}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// ✅ SAVE ATTEMPT
export const saveAttempt = (data) => {
  const token = localStorage.getItem("token");

  return axios.post(`${BASE_URL}/attempts/save`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
