import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSubject = (subject) => {
    navigate(`/level/${subject}`); // ✅ FIXED ROUTE
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-white to-green-300">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-96 text-center">

        <h1 className="text-3xl font-bold text-green-600 mb-6">
          Select Subject
        </h1>

        <div className="flex flex-col gap-4">

          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => handleSubject("html")}
          >
            HTML
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => handleSubject("java")}
          >
            JAVA
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => handleSubject("javascript")}
          >
            JAVASCRIPT
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => handleSubject("springboot")}
          >
            SPRING BOOT
          </button>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
