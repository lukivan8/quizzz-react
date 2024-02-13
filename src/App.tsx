import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { Button, Card, Flex, Progress } from "antd";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { selectAnswer } from "./slices/question";
import React from "react";
import { addAnswer, nextQuestion, restartTest } from "./slices/quiz";
import { questionList } from "./const";

function App() {
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
    for (let i = 0; i < questionList.length; i++) {
      console.log(questionList[i].correctAnswer, quiz.selectedAnswers[i]);
      if (questionList[i].correctAnswer === quiz.selectedAnswers[i]) {
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
              You've got {calculateScore()} out of 10 right.
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
              question={questionList[quiz.progress].question}
              answers={questionList[quiz.progress].answers}
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
  return (
    <div>
      <h1 className="question_title">{question}</h1>

      <Flex vertical gap={6}>
        <AnswerButton value={1} label={answers[0]} />
        <AnswerButton value={2} label={answers[1]} />
        <AnswerButton value={3} label={answers[2]} />
        <AnswerButton value={4} label={answers[3]} />
      </Flex>
    </div>
  );
}
function AnswerButton({
  value,
  label,
}: {
  value: 1 | 2 | 3 | 4;
  label: string;
}) {
  const dispatch = useDispatch();
  const question = useSelector((state: RootState) => state.question);

  return (
    <Button
      onClick={() => {
        dispatch(selectAnswer(value));
      }}
      type={question.selectedAnswer === value ? "primary" : "default"}
      style={{ textAlign: "left" }}
    >
      {label}
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
