import type { Questions } from "../Interfaces/Questions";

const JavascriptQuestions: Questions[] = [
  {
    id: 1,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswerIndex: 3,
  },
  {
    id: 2,
    question: "Which operator is used for strict equality comparison?",
    options: ["==", "===", "!=", "!=="],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World')",
      "msg('Hello World')",
      "prompt('Hello World')",
      "alertBox('Hello World')",
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    question: "Which method is used to parse a string to an integer?",
    options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: "Which symbol is used for single-line comments?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctAnswerIndex: 0,
  },
];

export default JavascriptQuestions;
