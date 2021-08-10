import React from "react";
import "./QuestionAndAnswers.css";
import plus from "./../../asset&fonts/img/plus.svg";
import minus from "./../../asset&fonts/img/minus.svg";

function QuestionAndAnswers({ questionData, hadleOpenQuestion }) {
  const { id, question, answer, isSelected } = questionData;
  return (
    <div className={`questions-and-answers ${isSelected ? "open-answer" : ""}`}>
      <div className='qustion-section'>
        <div
          onClick={() => {
            hadleOpenQuestion(id);
          }}
          className='symbol'
        >
          <img
            className={`${isSelected ? "hide" : ""}`}
            src={plus}
            alt='plus'
          />
          <img
            className={`${isSelected ? "" : "hide"}`}
            src={minus}
            alt='minus'
          />
        </div>
        <p>{question}</p>
      </div>

      <div className={`answer-section ${isSelected ? "" : "hide"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default QuestionAndAnswers;
