import React from 'react'
import { ScoreCardContainer } from '../styled'

const ScoreCard = ({ score, setQIndex }) => {
  const question = `question${score.length > 1 ? "s" : ""}`;
  return (
    <ScoreCardContainer>

      <span>
        Congrats, you got {score} {question} right!
      </span>
      <span>
        To take the test again just refresh this page
         <br />
        Or click Review to see the the questions with correct answers
      </span>

      {/* {score.length ? (
        <span>
          Congrats, you got {score} {question} right!
        </span>
      ) : (
          <span>Try again...
            <br />
            To take the test again just refresh this page
          </span>
        )} */}
      <button onClick={() => setQIndex(0)}>Review</button>
    </ScoreCardContainer>
  );
};

export default ScoreCard;
