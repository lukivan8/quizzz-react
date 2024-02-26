import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = "7yQVRMEFJ0bjmugxHRkcuopuD2Esy8DzK4iC12KU";
// Define your API endpoints
export const quizAPI = createApi({
  reducerPath: "quizAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://quizapi.io/api/v1/questions" }),
  endpoints: (builder) => ({
    // Define your endpoint
    getQuestions: builder.query({
      query: ({ limit, category }) =>
        "/?limit=" + limit + "&category=" + category + "&apiKey=" + apiKey,
    }),
  }),
});

// Export hooks for usage in components
export const { useGetQuestionsQuery } = quizAPI;
