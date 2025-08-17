import type { Questions } from "../Interfaces/Questions";

const ReactQuestions: Questions[] = [
  {
    id: 1,
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Twitter"],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A JavaScript framework",
      "A CSS preprocessor",
      "A database query language",
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    question: "Which hook is used to handle state in functional components?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    question:
      "What is the default port for a React app started with Create React App?",
    options: ["3000", "8000", "5000", "8080"],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: "What is the correct way to pass data to a child component?",
    options: ["Using functions", "Using props", "Using hooks", "Using state"],
    correctAnswerIndex: 1,
  },
];

export default ReactQuestions;
