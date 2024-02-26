import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuizState {
  selectedAnswers: string[];
  progress: number;
}

const initialState: QuizState = {
  selectedAnswers: [],
  progress: -1,
};

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<string>) => {
      state.selectedAnswers[state.progress] = action.payload;
    },
    nextQuestion: (state) => {
      state.progress += 1;
    },
    restartTest: (state) => {
      state.progress = 0;
      state.selectedAnswers = [];
    },
  },
});

export const { addAnswer, nextQuestion, restartTest } = quizSlice.actions;

export default quizSlice.reducer;
