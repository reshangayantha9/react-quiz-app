import React, { useState } from "react";
function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuection, setCurrentQuection] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState("");

  const handleAnswerOptionClicks = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuection = currentQuection + 1;
    if (nextQuection < questions.length) {
      setCurrentQuection(nextQuection);
    } else {
      setShowScore(true);
      if (score + 1 > 3) {
        setMsg("Congratulations !!!");
      } else {
        setMsg("Please try again");
      }
    }
  };
  function refreshPage() {
    window.location.reload(false);
  };
  return (
    <div className="App">
      <h3>Quiz app</h3>
      {showScore ? (
        <div className="score-section">
          <div className="score">
            You scored {score}out of {questions.length}
          </div>
          <div className="status">{msg}</div>
          <div >
            <button onClick={refreshPage}>Click to reload!</button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="quection-count">
              <span>Quection {currentQuection + 1}</span>/{questions.length}
            </div>
            <div className="quection-text">
              {questions[currentQuection].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuection].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClicks(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
