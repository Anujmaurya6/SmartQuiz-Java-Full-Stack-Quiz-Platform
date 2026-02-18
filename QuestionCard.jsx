import OptionButton from "./OptionButton";

function QuestionCard({ question, onAnswer }) {
  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <h2 className="font-semibold mb-3">{question.question}</h2>

      <div className="flex flex-col gap-2">
        <OptionButton
          option={question.optionA}
          label="A"
          onClick={onAnswer}
        />
        <OptionButton
          option={question.optionB}
          label="B"
          onClick={onAnswer}
        />
        <OptionButton
          option={question.optionC}
          label="C"
          onClick={onAnswer}
        />
        <OptionButton
          option={question.optionD}
          label="D"
          onClick={onAnswer}
        />
      </div>
    </div>
  );
}

export default QuestionCard;
