import type { Questions } from "../Interfaces/Questions";

const CssQuestions: Questions[] = [
  {
    id: 0,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    question: "Which property is used to change the background color?",
    options: ["bgcolor", "background-color", "color", "background"],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "font-size", "text-size", "text-style"],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    question: "How do you select an element with the id 'main'?",
    options: ["#main", ".main", "main", "*main"],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: "Which property is used to make text bold?",
    options: ["font-weight", "text-bold", "bold", "weight"],
    correctAnswerIndex: 0,
  },
];

export default CssQuestions;
