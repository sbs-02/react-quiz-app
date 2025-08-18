import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "./Components/Container";
import { TopicsButton } from "./Components/Buttons/TopicButtons";
import { QuizCard } from "./Components/Cards/QuizCard";
import { useAppSelector } from "./store/store";

type Score = {
  score: number;
  attempted: boolean;
};

function Home() {
  const navigate = useNavigate();
  const scores = useAppSelector((state) => state);

  const htmlSVG = "/images/html.svg";
  const cssSVG = "/images/css.svg";
  const javascriptSVG = "/images/javascript.svg";
  const reactSVG = "/images/react.svg";

  return (
    <Container center>
      <div className="rounded-lg  bg-background   shadow-lg  p-8 lg:p-12 mb-8">
        {" "}
        <div className="flex flex-col">
          <h1 className="font-body text-text-light text-lg ">Hello there!</h1>
          <h1 className="font-head text-text text-4xl font-semibold">
            Welcome to Frontend Web Development
          </h1>
        </div>
        <div className="flex flex-col   gap-4 ">
          <h3 className="font-body text-text-light text-2xl italic mb-8">
            Let's Test Your Frontend Knowledge
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center justify-items-center font-body">
            <div className="logo-container border border-border  hover:bg-secondary  shadow-lg rounded-lg px-8 py-8 ">
              <TopicsButton
                logo={htmlSVG}
                label="HTML"
                onClick={() => navigate("/quiz/html")}
              />
            </div>

            <div className="logo-container border border-border hover:bg-secondary  shadow-lg rounded-lg px-8 py-8">
              <TopicsButton
                logo={cssSVG}
                label="CSS"
                onClick={() => navigate("/quiz/css")}
              />
            </div>
            <div className="logo-container border border-border hover:bg-secondary  shadow-lg rounded-lg px-8 py-8">
              <TopicsButton
                logo={javascriptSVG}
                label="JavaScript"
                onClick={() => navigate("/quiz/js")}
              />
            </div>
            <div className="logo-container border border-border hover:bg-secondary  shadow-lg rounded-lg px-8 py-8">
              <TopicsButton
                logo={reactSVG}
                label="React"
                onClick={() => navigate("/quiz/react")}
              />
            </div>
          </div>
          <div className="flex flex-col mt-6 font-body text-lg">
            {(Object.values(scores) as Score[]).some((s) => s.attempted) ? (
              <>
                <span className="font-semibold mb-2">Past scores</span>
                <span>HTML: {scores.html.score}/5</span>
                <span>CSS: {scores.css.score}/5</span>
                <span>JavaScript: {scores.js.score}/5</span>
                <span>React: {scores.react.score}/5</span>
              </>
            ) : (
              <span className="text-text-light italic">
                Take a quiz to see your scores!
              </span>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:topic" element={<QuizCard />} />
    </Routes>
  );
}
