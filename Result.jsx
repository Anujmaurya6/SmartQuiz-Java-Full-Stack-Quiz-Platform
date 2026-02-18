import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;

  const percentage = total ? Math.round((score / total) * 100) : 0;

  let message = "";
  let color = "";

  if (percentage >= 80) {
    message = "🔥 Excellent!";
    color = "text-green-600";
  } else if (percentage >= 50) {
    message = "👍 Good!";
    color = "text-yellow-500";
  } else {
    message = "😅 Try Again!";
    color = "text-red-500";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white">

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-[400px]">

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎯 Quiz Result
        </h1>

        {/* 🔥 MAIN SCORE */}
        <div className="text-5xl font-bold text-gray-800 mb-2">
          {score} / {total}
        </div>

        <p className="text-gray-500 mb-4">
          ({percentage}%)
        </p>

        {/* MESSAGE */}
        <h2 className={`text-xl font-semibold mb-6 ${color}`}>
          {message}
        </h2>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center">

          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Retry
          </button>

        </div>
      </div>
    </div>
  );
}

export default Result;
