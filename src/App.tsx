import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { Button, Card, Flex, Progress } from "antd";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { selectAnswer } from "./slices/question";
import React, { useMemo } from "react";
import { addAnswer, nextQuestion, restartTest } from "./slices/quiz";
import { QuestionT, questionList } from "./const";

function App() {
  const quiz = useSelector((state: RootState) => state.quiz);
  if (quiz.progress === -1) {
    return (
      <>
        <StartPage />
      </>
    );
  }
  return <Quizz questions={questionList} />;
}

function StartPage() {
  const dispatch = useDispatch();
  return (
    <div className="center_card_layout">
      <Card style={{ width: "600px" }}>
        <h1 className="question_title">Welcome to the React Quiz!</h1>
        <p style={{ fontSize: "1.3rem" }}>
          This quiz will test your knowledge of React.
        </p>
        <Button
          icon={<RightOutlined />}
          style={{
            marginTop: "12px",
          }}
          type="primary"
          size="large"
          onClick={() => {
            dispatch(nextQuestion());
          }}
        >
          Start the Quiz
        </Button>
      </Card>
    </div>
  );
}

function Quizz({ questions }: { questions: QuestionT[] }) {
  const handleNextButtonClick = () => {
    const newProgress = quiz.progress + 1;
    if (newProgress <= 10) {
      dispatch(addAnswer(question.selectedAnswer!));
      dispatch(nextQuestion());
      dispatch(selectAnswer(undefined));
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      console.log(questions[i].correct_answer, quiz.selectedAnswers[i]);
      if (questions[i].correct_answer === quiz.selectedAnswers[i]) {
        score++;
      }
    }
    return score;
  };
  const question = useSelector((state: RootState) => state.question);
  const quiz = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  return (
    <div className="center_card_layout">
      <Card style={{ width: "600px" }}>
        <Progress percent={quiz.progress * 10} type="line"></Progress>
        {quiz.progress === 10 ? (
          <div style={{ textAlign: "center" }}>
            <h1 className="question_title">You have completed the quiz!</h1>
            <p style={{ fontSize: "1.3rem" }}>
              You've got {calculateScore()} out of {questions.length} right.
            </p>
            <CustomMessage score={calculateScore()} />
            <Button
              icon={<ArrowLeftOutlined />}
              style={{
                marginTop: "12px",
              }}
              type="primary"
              size="large"
              onClick={() => {
                dispatch(restartTest());
              }}
            >
              Redo The Test
            </Button>
          </div>
        ) : (
          <React.Fragment>
            <Question
              question={questions[quiz.progress].question}
              answers={[
                ...questions[quiz.progress].incorrect_answer,
                questions[quiz.progress].correct_answer,
              ]}
            />
            <Button
              icon={<RightOutlined />}
              style={{
                marginTop: "12px",
              }}
              type="primary"
              size="large"
              disabled={!question.selectedAnswer}
              onClick={handleNextButtonClick}
            >
              Next
            </Button>
          </React.Fragment>
        )}
      </Card>
    </div>
  );
}

function Question({
  question,
  answers,
}: {
  question: string;
  answers: string[];
}) {
  const shuffledAnswers = useMemo(
    () => answers.sort(() => Math.random() - 0.5),
    [question]
  );
  return (
    <div>
      <h1 className="question_title">{question}</h1>

      <Flex vertical gap={6}>
        <AnswerButton answer={shuffledAnswers[0]} />
        <AnswerButton answer={shuffledAnswers[1]} />
        <AnswerButton answer={shuffledAnswers[2]} />
        <AnswerButton answer={shuffledAnswers[3]} />
      </Flex>
    </div>
  );
}
function AnswerButton({ answer }: { answer: string }) {
  const dispatch = useDispatch();
  const question = useSelector((state: RootState) => state.question);

  return (
    <Button
      onClick={() => {
        dispatch(selectAnswer(answer));
      }}
      type={question.selectedAnswer === answer ? "primary" : "default"}
      style={{ textAlign: "left" }}
    >
      {answer}
    </Button>
  );
}

function CustomMessage({ score }: { score: number }) {
  if (score <= 2)
    return (
      <p>
        Oh dear!!! That’s an embarrassing score isn't it?
        <br />
        Let‘s pretend that never happened!
      </p>
    );
  if (score <= 5)
    return (
      <p>
        You did okay, but you can do better!
        <br />
        Why not try again and improve your score?
      </p>
    );
  if (score <= 8)
    return (
      <p>
        Great job! You did really well!
        <br />
        But you can still do better!
      </p>
    );
  return (
    <p>
      Congratulations! You got a perfect score!
      <br />
      You are a React expert!
    </p>
  );
}

export default App;
