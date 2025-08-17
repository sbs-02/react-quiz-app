import type { Questions } from "../Interfaces/Questions";

const HtmlQuestions: Questions[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinking Text Mark Language",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    question: "Which tag is used for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    question:
      "Which attribute is used to specify an alternate text for an image?",
    options: ["alt", "src", "title", "href"],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    question: "Which attribute specifies an image's source file?",
    options: ["href", "src", "alt", "title"],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    correctAnswerIndex: 0,
  },
];

export default HtmlQuestions;
