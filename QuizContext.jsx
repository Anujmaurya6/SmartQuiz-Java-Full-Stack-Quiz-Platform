import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);

  const resetQuiz = () => {
    setScore(0);
    setCurrent(0);
  };

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        current,
        setCurrent,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
