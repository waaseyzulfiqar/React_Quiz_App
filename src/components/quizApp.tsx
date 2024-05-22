import React, { useState } from "react";
import './quizApp.css';
import Swal from 'sweetalert2'

export default function QuizApp() {
  const questions = [
    {
      question: "HTML Stand For _____________",
      options: [
        "Hyper Tool Markup Language",
        "Hypertext Machine Language",
        "Hypertext Markup Language",
        "Hyper Transfer Markup Language",
      ],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "CSS Stand For _____________",
      options: [
        "Cascading Script Sheet", 
        "Cascading Style System", 
        "Cascading Simple Sheet",
        "Cascading StyleSheet"],
      correctAnswer: "Cascading StyleSheet",
    },
    {
      question: "JS Stand For _____________",
      options: [
       
       "Java Syntax",
       "JavaScript",
        "Java Script",
         "JQuery Script",],
      correctAnswer: "JavaScript",
    },
    {
      question: "DOM Stand For _____________",
      options: ["Document Object Model", "Digital Object Model", "Data Oriented Model", "Data Object Model"],
      correctAnswer: "Document Object Model",
    },
    {
      question: "RAM Stand For _____________",
      options: [ "Read Access Memory", "Rapid Access Module", "Random Access Memory", "Reliable Access Memory"],
      correctAnswer: "Random Access Memory",
    },
  ];

  const checkAnswer = (a:any, b:any) => {
    if (a === b) {
      setMarks(marks + 1);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [marks, setMarks] = useState(0);

  return (
    <div className="main">
      <h1>Quiz App</h1>
      <div className="question-container">
        <p>Question {currentIndex + 1}/{questions.length}</p>
        <h2>Q: {questions[currentIndex].question}</h2>
        <div className="options">
          {questions[currentIndex].options.map((x, i) => (
            <p key={i} onClick={() => checkAnswer(x, questions[currentIndex].correctAnswer)}>
              {x}
            </p>
          ))}
        </div>
      </div>
      <button onClick={() => {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex(currentIndex + 1);
        } else {
          Swal.fire({
            title: "Your Response has been Submitted",
            text: `You got ${marks} Marks`,
            icon: "success"
          });
          setCurrentIndex(0);
          setMarks(0);
        }
      }}>Next</button>
    </div>
  );
}
