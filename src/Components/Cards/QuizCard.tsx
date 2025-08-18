import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Questions } from "@/Interfaces/Questions";
import HtmlQuestions from "@/Questions/HtmlQuestions";
import CssQuestions from "@/Questions/CssQuestions";
import JavascriptQuestions from "@/Questions/JavascriptQuestions";
import ReactQuestions from "@/Questions/ReactQuestions";
import { Progress } from "@/Components/ui/progress";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/store/store";
import { setScore } from "../../store/scoreSlice";

export function QuizCard() {
  const { topic } = useParams<{ topic: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const questionsMap: Record<string, Questions[]> = {
    html: HtmlQuestions,
    css: CssQuestions,
    js: JavascriptQuestions,
    react: ReactQuestions,
  };

  const questions = questionsMap[topic ?? "html"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScoreState] = useState(0); // local quiz score
  const [disable, setDisable] = useState(false);

  const currentQuestion = questions[currentIndex];

  function handleOptionClick(index: number) {
    setSelectedOption(index);
    if (index === currentQuestion.correctAnswerIndex) {
      setScoreState((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (selectedOption === null) {
      toast.error("Please select an answer", {
        duration: 3000,
        style: {
          fontWeight: "bold",
          fontFamily: "Nunito",
        },
      });
      return;
    }

    setSelectedOption(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setDisable(true);

      dispatch(
        setScore({
          subject: topic as "html" | "css" | "js" | "react",
          value: score,
        })
      );

      toast.success(`Quiz finished! Score: ${score}/${questions.length}`, {
        duration: 4000,
        style: {
          background: "#059669",
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "Nunito",
          fontSize: "24px",
        },
      });

      setTimeout(() => navigate("/"), 1000);
    }
  }

  const progressValue = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full md:w-1/2  bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
      {/* Progress bar */}
      <Progress value={progressValue} className="mb-2" />

      <h2 className="font-head font-semibold text-3xl uppercase">{topic}</h2>

      <h3 className="text-base font-medium font-body">
        Question {currentIndex + 1} of {questions.length}
      </h3>

      <p className="font-body text-xl">{currentQuestion.question}</p>

      <div className="flex flex-col gap-2 font-body">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(idx)}
            className={`px-4 py-2 rounded-lg border cursor-pointer
              ${selectedOption === idx ? "bg-secondary" : "bg-gray-100"} 
              hover:bg-secondary`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
        >
          Back
        </button>
        <button
          disabled={disable}
          onClick={handleNext}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-tint cursor-pointer"
        >
          {currentIndex < questions.length - 1 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
}
