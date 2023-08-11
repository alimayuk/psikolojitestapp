import React, { useState } from "react";
import questions from "../data/testdata";

const Card = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const question = questionIndex > 2 ? null :  questions[questionIndex];

  const handleOptionClick = (option) => {
    if (questionIndex <= questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setAnswers([...answers, option.id]);
    }
  };

  console.log("Answers:", answers);
  
  if(question == null ){
    return(
        <>
        {
             answers.map((answer) => (
                <div key={answer}>
                   <h1>{answer}</h1> 
                </div>
        
          ))}
        
        </>
    )
   

  }
   
  return (
    <div className="card" >
      <div className="card-container">
        <div className="card-top">
          <h1>{question.text}</h1>
          <hr className="card-hr" />
        </div>
        <div className="option-card-wrapper">
          {question.options.map((option) => (
            <div
              className="option-box"
              onClick={() => handleOptionClick(option)}
              key={option.id}
            >
              <img
                className="option-image"
                src={option.img}
                alt={option.text}
              />
              <h1>{option.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
