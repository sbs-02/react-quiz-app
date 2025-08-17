// import "./App.css";
// import { Container } from "./Components/Container";
// import htmlSVG from "./Images/html.svg";
// import reactSVG from "./Images/react.svg";
// import cssSVG from "./Images/css.svg";
// import javascriptSVG from "./Images/javascript.svg";
// import { TopicsButton } from "./Components/Buttons/TopicButtons";

// function App() {
//   return (
//     <Container center>
//       <div
//         className={`w-3xl border-[#fcbf49]  shadow-2xl rounded-2xl px-6 py-10 flex flex-col gap-6`}
//       >
//         <div className="flex flex-col">
//           <h1 className="sub-heading">Hello there !</h1>
//           <h1 className="heading">Welcome to Frontend Web Development</h1>
//         </div>

//         <div className="text-center flex flex-col items-center justify-center gap-4">
//           <h3 className="sub-heading">Let's Test Your Frontend Knowledge</h3>

//           <div className="grid grid-cols-2 gap-y-8 gap-x-4">
//             <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//               <TopicsButton logo={htmlSVG} label="HTML" />
//             </div>

//             <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//               <TopicsButton logo={cssSVG} label="CSS" />
//             </div>

//             <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//               <TopicsButton logo={javascriptSVG} label="Javascript" />
//             </div>

//             <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//               <TopicsButton logo={reactSVG} label="React" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import { Container } from "./Components/Container";
// import htmlSVG from "./Images/html.svg";
// import reactSVG from "./Images/react.svg";
// import cssSVG from "./Images/css.svg";
// import javascriptSVG from "./Images/javascript.svg";
// import { TopicsButton } from "./Components/Buttons/TopicButtons";
// import HtmlQuestions from "./Questions/HtmlQuestions";
// import { QuizCard } from "./Components/Cards/QuizCard";

// function App() {
//   const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

//   return (
//     <Container center>
//       <div className="w-3xl bg-white border-[#DBEAFE] shadow-2xl rounded-2xl px-6 py-10 flex flex-col gap-6">
//         {!selectedTopic && (
//           <>
//             <div className="flex flex-col">
//               <h1 className="sub-heading">Hello there !</h1>
//               <h1 className="heading">Welcome to Frontend Web Development</h1>
//             </div>

//             <div className="text-center flex flex-col items-center justify-center gap-4">
//               <h3 className="sub-heading text-blue-400">
//                 Let's Test Your Frontend Knowledge
//               </h3>

//               <div className="grid grid-cols-2 gap-y-8 gap-x-4">
//                 <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//                   <TopicsButton
//                     logo={htmlSVG}
//                     label="HTML"
//                     onClick={() => setSelectedTopic("html")}
//                   />
//                 </div>

//                 <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//                   <TopicsButton
//                     logo={cssSVG}
//                     label="CSS"
//                     onClick={() => setSelectedTopic("css")}
//                   />
//                 </div>

//                 <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//                   <TopicsButton
//                     logo={javascriptSVG}
//                     label="Javascript"
//                     onClick={() => setSelectedTopic("js")}
//                   />
//                 </div>

//                 <div className="logo-container bg- border-[] shadow-lg rounded-lg px-3 py-4">
//                   <TopicsButton
//                     logo={reactSVG}
//                     label="React"
//                     onClick={() => setSelectedTopic("react")}
//                   />
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         {selectedTopic === "html" && (
//           <QuizCard
//             questions={HtmlQuestions}
//             onBack={() => setSelectedTopic(null)}
//           />
//         )}
//       </div>
//     </Container>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "./Components/Container";
import { TopicsButton } from "./Components/Buttons/TopicButtons";
import htmlSVG from "./Images/html.svg";
import cssSVG from "./Images/css.svg";
import javascriptSVG from "./Images/javascript.svg";
import reactSVG from "./Images/react.svg";
import { QuizCard } from "./Components/Cards/QuizCard";
import { useQuizContext } from "./Contexts/useQuizContext";

function Home() {
  const navigate = useNavigate();
  const { setMode } = useQuizContext();

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
        <div className="text-center flex flex-col items-center justify-center gap-4 ">
          <h3 className="font-body text-text-light text-2xl italic mb-8">
            Let's Test Your Frontend Knowledge
          </h3>

          {/* <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => setMode("review")}
              className="cursor-pointer px-4 py-2 bg-primary font-body text-white rounded-lg hover:bg-green-500"
            >
              Review Mode
            </button>
            <button
              onClick={() => setMode("timed")}
              className="cursor-pointer px-4 py-2  bg-secondary text-[#A87856] font-body rounded-lg hover:bg-red-500"
            >
              Timed Mode
            </button>
          </div> */}

          <div className="grid grid-cols-2 gap-10 text-center justify-between font-body ">
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
