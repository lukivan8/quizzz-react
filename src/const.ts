interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}

export const questionList: Question[] = [
  {
    question: "What is the correct command to create a new React project?",
    answers: [
      "A. npm create-react-app",
      "B. npm create-react-app myReactApp",
      "C. npx create-react-app",
      "D. npx create-react-app",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you import a component in React?",
    answers: [
      "A. import MyComponent from './MyComponent'",
      "B. import { MyComponent } from './MyComponent'",
      "C. import MyComponent from 'MyComponent'",
      "D. import { MyComponent } from 'MyComponent'",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the correct syntax for a function component in React?",
    answers: [
      "A. function MyComponent() {}",
      "B. class MyComponent extends React.Component {}",
      "C. const MyComponent = () => {}",
      "D. const MyComponent = function() {}",
    ],
    correctAnswer: 3,
  },
  {
    question: "What hook is used to manage state in a functional component?",
    answers: ["A. useState", "B. useEffect", "C. useContext", "D. useReducer"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    answers: [
      "A. To fetch data from an API",
      "B. To update the component's state",
      "C. To perform side effects",
      "D. To render JSX elements",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is the correct way to pass data from a parent component to a child component in React?",
    answers: [
      "A. Using props",
      "B. Using state",
      "C. Using context",
      "D. Using refs",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the useCallback hook in React?",
    answers: [
      "A. To memoize a function",
      "B. To handle form input",
      "C. To fetch data from an API",
      "D. To update the component's state",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "What is the correct way to conditionally render content in React?",
    answers: [
      "A. Using if-else statements",
      "B. Using switch statements",
      "C. Using ternary operators",
      "D. Using for loops",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the useRef hook in React?",
    answers: [
      "A. To store a mutable value",
      "B. To fetch data from an API",
      "C. To update the component's state",
      "D. To handle form input",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the correct way to handle form input in React?",
    answers: [
      "A. Using the onChange event",
      "B. Using the onSubmit event",
      "C. Using the onClick event",
      "D. Using the onInput event",
    ],
    correctAnswer: 1,
  },
];
