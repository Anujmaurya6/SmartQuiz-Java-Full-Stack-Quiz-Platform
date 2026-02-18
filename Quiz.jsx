import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuestions } from "../api/quizApi";
import { useQuiz } from "../context/QuizContext";
import { saveAttempt } from "../api/quizApi";

function Quiz() {
  const { subject, level } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);

  const { score, setScore } = useQuiz();

useEffect(() => {
  // 🔥 RESET STATE
  setSelected({});
  setScore(0);

  getQuestions(subject, level)
    .then((res) => {
      console.log("DATA:", res.data);
      setQuestions(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, [subject, level]);


  const handleOption = (qId, option, correct) => {
    if (selected[qId]) return;

    setSelected({ ...selected, [qId]: option });

    if (option === correct) {
      setScore((prev) => prev + 1);
    }
  };

 const handleSubmit = async () => {
  try {
    await saveAttempt({
      userId: 1,
      subject,
      level,
      totalQuestions: questions.length,
      correctAnswers: score,
      score: score * 10,
    });

    navigate("/result");
  } catch (error) {
    console.error("Error saving attempt", error);
  }
};

  if (loading) return <h1 className="text-center mt-10">Loading...</h1>;
if (!loading && questions.length === 0) {
  return (
    <h1 className="text-center mt-10 text-red-500">
      No Questions Found ❌
    </h1>
  );
}

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        {subject.toUpperCase()} - {level}
      </h1>

      {/* Progress */}
      <p className="text-center mb-4">
        Attempted: {Object.keys(selected).length} / {questions.length}
      </p>

      <div className="max-w-2xl mx-auto space-y-4">
        {questions.map((q, index) => (
          <div key={q.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">
              {index + 1}. {q.question}
            </h2>

            {["A", "B", "C", "D"].map((opt) => {
              const optionText = q["option" + opt];
              const isSelected = selected[q.id] === opt;

              let color = "bg-gray-200";

              if (selected[q.id]) {
                if (opt === q.correctOption) color = "bg-green-400";
                else if (isSelected) color = "bg-red-400";
              }

              return (
                <button
                  key={opt}
                  onClick={() =>
                    handleOption(q.id, opt, q.correctOption)
                  }
                  className={`block w-full text-left p-2 mt-2 rounded ${color}`}
                >
                  {opt}. {optionText}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Submit */}
     {questions.length > 0 && (
  <button
    onClick={handleSubmit}
    className="bg-green-600 text-white px-6 py-2 rounded"
  >
    Submit
  </button>
)}

    </div>
  );
}

export default Quiz;
