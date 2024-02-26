import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  selectedAnswer: string | undefined;
}

const initialState: QuestionState = {
  selectedAnswer: undefined,
};

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    selectAnswer: (state, action: PayloadAction<string | undefined>) => {
      state.selectedAnswer = action.payload;
    },
  },
});

export const { selectAnswer } = questionSlice.actions;

export default questionSlice.reducer;
