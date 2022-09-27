import "./App.css";
import { Game } from "./components";
import React, { useState, useEffect } from "react";

const API_URL = "https://opentdb.com/api.php?amount=10";
function App() {
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setshowAnswers] = useState(false);
  

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        const questions= data.results.map((question)=>
        ({
          ...question,answers:[question.correct_answer,...question.incorrect_answers]
         .sort(()=>Math.random()-0.5),
        }))
        setQuestions(questions);
      });
  }, []);
  const handleAnswer = (answer) => {
    if(!showAnswers){
    if(answer === questions[currentIndex].correct_answer){
      setScore(score+1);
    }
  }
      setshowAnswers(true);
  };
  const handleNextQuestion=()=>{
    setshowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  }
  return questions.length > 0 ? (
    <div className='App'>
      <h1>Quiz App</h1>
      {currentIndex>= questions.length?(
        <div className="EndScreen">
      <h1 className='Score'>
      Game Ended! Your score was : {score*10}%</h1>
      <h3 className="footerScore">Made by MAHEK </h3>
      </div>
  ) : (
    <Game data={questions[currentIndex]} 
    showAnswers={showAnswers}
    handleNextQuestion={handleNextQuestion}
     handleAnswer={handleAnswer}
    />
  )}
      
    </div> 
  ) : (
    <h2 className='Loading'>Loading...</h2>
  );
}

export default App;
