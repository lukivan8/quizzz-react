export interface QuestionT {
  question: string;
  incorrect_answer: string[];
  correct_answer: string;
}

export const questionList: QuestionT[] = [
  {
    question: "What is the correct command to create a new React project?",
    incorrect_answer: [
      "npm create-react-app",
      "npm create-react-app myReactApp",
      "npx create-react-app",
    ],
    correct_answer: "npx create-react-app myReactApp",
  },
  {
    question:
      "What does myReactApp refer to in the following command?\n<i>npx create-react-app myReactApp</i>",
    incorrect_answer: [
      "A reference to an existing app",
      "The type of app to create",
      "The directory to create the new app in",
    ],
    correct_answer: "The name you want to use for the new app",
  },
  {
    question:
      "What command is used to start the React local development server (CRA)?",
    incorrect_answer: ["npm run dev", "npm build", "npm start-react"],
    correct_answer: "npm start",
  },
  {
    question:
      "What is the default local host port that a React development server uses?",
    incorrect_answer: ["5000", "8080", "80"],
    correct_answer: "3000",
  },
  {
    question: "What is the children prop?",
    incorrect_answer: [
      "A property that lets you set an object as a property",
      "A property that adds child values to state",
      "A property that lets you pass data to child components",
    ],
    correct_answer:
      "A property that lets you nest components in other components",
  },
  {
    question: "Which keyword creates a constant in JavaScript?",
    incorrect_answer: ["let", "constant", "var"],
    correct_answer: "const",
  },
  {
    question: "What is the purpose of the useEffect hook?",
    incorrect_answer: [
      "To run code when a component is first rendered",
      "To run code when a component is updated",
      "To run code when a component is unmounted",
    ],
    correct_answer: "All of the above",
  },
  {
    question: "A copy of the 'real' DOM that is kept in memory is called what?",
    incorrect_answer: ["Shadow DOM", "DOM", "Fake DOM"],
    correct_answer: "Virtual DOM",
  },
  {
    question:
      "Which operator can be used to conditionally render a React component?",
    incorrect_answer: ["::", "??", "||"],
    correct_answer: "&&",
  },
  {
    question:
      "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    incorrect_answer: ["data", "id", "index"],
    correct_answer: "key",
  },
];
