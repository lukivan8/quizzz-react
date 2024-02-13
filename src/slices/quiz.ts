import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuizState {
  selectedAnswers: (1 | 2 | 3 | 4)[];
  progress: number;
}

const initialState: QuizState = {
  selectedAnswers: [],
  progress: 0,
};

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<1 | 2 | 3 | 4>) => {
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
