import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./Contexts/QuizContext";
import "./index.css";
import App from "./App.tsx";
import { Container } from "./Components/Container.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QuizProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                fontFamily: "Nunito",
                fontWeight: "bold",
              },
            }}
          />
          <Container center>
            <App />
          </Container>
        </QuizProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
