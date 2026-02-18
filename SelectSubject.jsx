import { useParams, useNavigate } from "react-router-dom";

function SelectSubject() {
  const { subject } = useParams();
  const navigate = useNavigate();

  const goToLevel = () => {
    navigate(`/level/${subject}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">
        Selected Subject: {subject.toUpperCase()}
      </h1>

      <button className="btn" onClick={goToLevel}>
        Continue
      </button>
    </div>
  );
}

export default SelectSubject;
