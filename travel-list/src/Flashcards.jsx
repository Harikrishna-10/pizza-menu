import { useState } from "react";
import "./flashcard.css";
export default function App() {
  return (
    <div className="App">
      <Flash />
    </div>
  );
}

const question = [
  {
    id: 3457,
    question: "what language is React based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: "what are the building blockes of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "what's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give conponents memory?",
    answer: "useState Hook",
  },
  {
    id: 2002,
    question:
      "What do we call an inpit element that is completely synchronised with state?",
    answer: "Controlled elements",
  },
];

function Flash() {
  const [answer, setAnswer] = useState(null);
  return (
    <div className="flashcards">
      {question.map((flash) => (
        <div
          className={flash.id === answer ? "selected" : ""}
          key={question.id}
          onClick={() => setAnswer(flash.id == answer ? null : flash.id)}
        >
          <p>{answer === flash.id ? flash.answer : flash.question}</p>
        </div>
      ))}
    </div>
  );
}
