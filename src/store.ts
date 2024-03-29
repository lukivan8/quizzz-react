import { configureStore } from "@reduxjs/toolkit";
import { questionSlice } from "./slices/question";
import { quizSlice } from "./slices/quiz";
import { quizAPI } from "./slices/quizAPI";

export const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
    quiz: quizSlice.reducer,
    [quizAPI.reducerPath]: quizAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
