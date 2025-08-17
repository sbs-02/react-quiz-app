import { createContext, useState, type ReactNode } from "react";

type QuizMode = "timed" | "review";

interface QuizContextType {
  mode: QuizMode;
  setMode: (mode: QuizMode) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<QuizMode>("review");

  return (
    <QuizContext.Provider value={{ mode, setMode }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContext;
