import { useParams, useNavigate } from "react-router-dom";

function SelectLevel() {
  const { subject } = useParams();
  const navigate = useNavigate();

  const handleLevel = (level) => {
    navigate(`/quiz/${subject}/${level}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px] text-center">

        <h1 className="text-3xl font-bold text-green-600 mb-8">
          {subject.toUpperCase()} Quiz
        </h1>

        <p className="text-gray-500 mb-6">Choose your difficulty level</p>

        <div className="flex flex-col gap-4">

          {/* EASY */}
          <button
            onClick={() => handleLevel("easy")}
            className="py-3 rounded-xl bg-green-500 text-white font-semibold 
            hover:bg-green-600 transition duration-300 hover:scale-105 shadow-md"
          >
            Easy
          </button>

          {/* MEDIUM */}
          <button
            onClick={() => handleLevel("medium")}
            className="py-3 rounded-xl bg-yellow-400 text-white font-semibold 
            hover:bg-yellow-500 transition duration-300 hover:scale-105 shadow-md"
          >
            Medium
          </button>

          {/* HARD */}
          <button
            onClick={() => handleLevel("hard")}
            className="py-3 rounded-xl bg-red-500 text-white font-semibold 
            hover:bg-red-600 transition duration-300 hover:scale-105 shadow-md"
          >
            Hard
          </button>

        </div>

      </div>
    </div>
  );
}

export default SelectLevel;
