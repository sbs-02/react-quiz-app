import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./Contexts/QuizContext";
import "./index.css";
import App from "./App.tsx";
import { Container } from "./Components/Container.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Container center>
        {/* <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
        <QuizProvider>
          <App />
        </QuizProvider>
      </Container>
    </BrowserRouter>
  </StrictMode>
);
