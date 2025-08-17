import type { Questions } from "../Interfaces/Questions";

interface QuizCardProps {
  questions: Questions[];
  onBack: () => void;
}

export type { QuizCardProps };
