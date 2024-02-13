import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  selectedAnswer: 1 | 2 | 3 | 4 | undefined;
}

const initialState: QuestionState = {
  selectedAnswer: undefined,
};

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    selectAnswer: (state, action: PayloadAction<1 | 2 | 3 | 4 | undefined>) => {
      state.selectedAnswer = action.payload;
    },
  },
});

export const { selectAnswer } = questionSlice.actions;

export default questionSlice.reducer;
