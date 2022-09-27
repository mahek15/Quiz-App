import React from "react";

const Game = ({
    showAnswers,
    handleAnswer,
    handleNextQuestion,
    data: { question, answers },
    }) => {
  
  return (
    <div className='Ques'>
      <div >
        <h2
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="Options">
        {answers.map((answer) => {
            return(
            
          <button
          onClick = {() => handleAnswer(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
        );
        })}
         </div>
        {showAnswers && (
        <button onClick={handleNextQuestion}>
            Next Question
        </button>
        )}
      </div>
   
  );
};
export default Game;
