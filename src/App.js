import React, { useState } from "react";
import questions from "./questions.json";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import { AppContainer, AppInner } from "./styled";
import "./App.css";

const App = () => {
  const [qIndex, setQIndex] = useState(0);
  const [currentChoice, setCurrentChoice] = useState();
  const [score, setScore] = useState(0);
  const [isComplete, setComplete] = useState(false);

  const onClickAnswer = (choice) => {
    if (!isComplete) setCurrentChoice(choice);
  };

  const nextQuestion = () => {
    if (currentChoice === questions[qIndex].answer) {
      setScore(score + 1);
    }
    setCurrentChoice(false);
    setQIndex(qIndex + 1);
    if (qIndex + 1 === questions.length) {
      setComplete(true);
    }
  };

  return (
    <AppContainer>
      <AppInner>
        <h1>DMV Permit Practice Test, CA</h1>
        {qIndex > questions.length - 1 ? (
          <ScoreCard
            score={score}
            setQIndex={setQIndex}
          />
        ) : (
            <Quiz
              qIndex={qIndex}
              questions={questions}
              currentChoice={currentChoice}
              onClickAnswer={onClickAnswer}
              nextQuestion={nextQuestion}
              isReviewMode={isComplete}
            />
          )}
      </AppInner>
    </AppContainer>
  );
};

export default App;
