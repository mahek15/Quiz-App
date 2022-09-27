import React from "react";

const Questionaire = ({
    showAnswers,
    handleAnswer,
    handleNextQuestion,
    data: { question, correct_answer, answers },
    }) => {
  
  return (
    <div className='Ques'>
      <div >
        <h2
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="Options">
        {answers.map((answer,idx) => {
            const bgColor= showAnswers? 
            answer === correct_answer 
            ? ''
            : 'bg-red-500'
            : 'bg-white';
            const textColor= showAnswers?
            'text-white':'text-blue-800';
            return(
            
          <button 
          key={idx}
          className={`${bgColor} ${textColor}`}
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

export default Questionaire;