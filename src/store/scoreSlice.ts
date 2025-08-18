import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Load from localStorage
const loadScores = () => {
  try {
    const scores = localStorage.getItem("quizScores");
    return scores
      ? JSON.parse(scores)
      : {
          html: { score: 0, attempted: false },
          css: { score: 0, attempted: false },
          js: { score: 0, attempted: false },
          react: { score: 0, attempted: false },
        };
  } catch (e) {
    return {
      html: { score: 0, attempted: false },
      css: { score: 0, attempted: false },
      js: { score: 0, attempted: false },
      react: { score: 0, attempted: false },
    };
  }
};

const initialState = loadScores();

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setScore: (
      state,
      action: PayloadAction<{ subject: string; value: number }>
    ) => {
      state[action.payload.subject] = {
        score: action.payload.value,
        attempted: true,
      };
      localStorage.setItem("quizScores", JSON.stringify(state));
    },
    resetAllScores: (state) => {
      state.html = { score: 0, attempted: false };
      state.css = { score: 0, attempted: false };
      state.js = { score: 0, attempted: false };
      state.react = { score: 0, attempted: false };
      localStorage.setItem("quizScores", JSON.stringify(state));
    },
  },
});

export const { setScore, resetAllScores } = scoreSlice.actions;
export default scoreSlice.reducer;
