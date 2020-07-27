import React from 'react'

const Quiz = ({
    qIndex,
    questions,
    currentChoice,
    onClickAnswer,
    nextQuestion,
    isReviewMode,
}) => {
    const currQuestion = questions[qIndex];
    return (
        <>
            <span>Question {qIndex + 1}</span>
            <h1>{currQuestion.description}</h1>
            <ul>
                {currQuestion.choices.map((c) => {
                    const classes = []
                    if (c.key === currentChoice) classes.push("isSelected")
                    if (isReviewMode && c.key === currQuestion.answer) classes.push("isCorrect")
                    return (
                        <li
                            className={classes.join(' ')}
                            onClick={() => onClickAnswer(c.key)}
                        >
                            <strong>{c.key}. </strong>
                            {c.description}
                        </li>
                    )
                })}
            </ul>
            <button disabled={!currentChoice && !isReviewMode} onClick={nextQuestion}>
                Next Question
            </button>
        </>
    );
}

export default Quiz;
