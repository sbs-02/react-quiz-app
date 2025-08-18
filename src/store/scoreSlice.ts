import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Load from localStorage
const loadScores = () => {
  try {
    const scores = localStorage.getItem("quizScores");
    return scores ? JSON.parse(scores) : { html: 0, css: 0, js: 0, react: 0 };
  } catch (e) {
    return { html: 0, css: 0, js: 0, react: 0 };
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
      (state as any)[action.payload.subject] = action.payload.value;
      localStorage.setItem("quizScores", JSON.stringify(state));
    },

    resetAllScores: (state) => {
      state.html = 0;
      state.css = 0;
      state.js = 0;
      state.react = 0;
      localStorage.setItem("quizScores", JSON.stringify(state));
    },
  },
});

export const { setScore, resetAllScores } = scoreSlice.actions;
export default scoreSlice.reducer;
