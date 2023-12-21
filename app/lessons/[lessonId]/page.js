"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getQuestionsForLesson } from "@/app/components/requests";
import EditQuestion from "@/app/components/EditQuestion";
import AdminButtons from "@/app/components/AdminButtons";
import QuestionSection from "@/app/components/QuestionSection";
import FinishedPage from "@/app/components/FinishedPage";

export default function LessonPage({ params: { lessonId } }) {
  const [editQuestion, setEditQuestion] = useState(false);
  const [questionsForLesson, setQuestionsForLesson] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showContinueBtn, setShowContinueBtn] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [numOfCorrectAns, setNumOfCorrectAns] = useState(0);

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/api/auth/signin?callbackUrl=/lessons/${lessonId}`);
    },
  });

  const adminData = [
    "archita.bhattacharyya91@gmail.com",
    "santosh@geekskool.com",
  ];

  const isAdmin = adminData.includes(session?.user.email);

  useEffect(() => {
    getQuestionsForLesson(lessonId).then((questions) => {
      if (questions)
        setQuestionsForLesson(
          questions.data.map((question) => ({ ...question, answered: false }))
        );
    });
  }, []);

  const questions = questionsForLesson.filter(
    (question) => question.answered === false
  );

  const currentQuestion = questions[currentIndex];

  if (currentQuestion === undefined && questions.length !== 0)
    setCurrentIndex(0);

  const percentageOfProgress =
    (numOfCorrectAns / questionsForLesson.length) * 100;

  function checkAnswer() {
    if (userAnswer && Number(userAnswer) + 1 === currentQuestion.correct_ans) {
      setFeedback("Correct");
    } else {
      setFeedback("Wrong");
    }
    setShowContinueBtn(true);
    setShowFeedback(true);
  }

  function handleContinue() {
    if (Number(userAnswer) + 1 === currentQuestion.correct_ans) {
      setQuestionsForLesson((questionsForLesson) =>
        questionsForLesson.map((question) => {
          if (question === currentQuestion)
            return { ...question, answered: true };
          return { ...question };
        })
      );
      setCurrentIndex(currentIndex);
      setNumOfCorrectAns(numOfCorrectAns + 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setUserAnswer("");
    setFeedback(null);
    setShowContinueBtn(false);
    setShowFeedback(false);
  }

  return (
    <div>
      {editQuestion ? (
        <EditQuestion
          currentQuestion={currentQuestion}
          setEditQuestion={setEditQuestion}
          questionsForLesson={questionsForLesson}
          setQuestionsForLesson={setQuestionsForLesson}
          currentIndex={currentIndex}
        />
      ) : (
        <div>
          {isAdmin && (
            <AdminButtons
              setEditQuestion={setEditQuestion}
              lessonId={lessonId}
              currentQuestion={currentQuestion}
              setQuestionsForLesson={setQuestionsForLesson}
              percentageOfProgress={percentageOfProgress}
            />
          )}

          <div
            className={`flex min-h-screen flex-col items-center pt-20 ${
              percentageOfProgress === 100
                ? "justify-around"
                : "justify-between"
            }`}
          >
            {percentageOfProgress === 100 ? (
              <FinishedPage />
            ) : (
              <QuestionSection
                percentageOfProgress={percentageOfProgress}
                lessonId={lessonId}
                currentQuestion={currentQuestion}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                questions={questions}
                currentIndex={currentIndex}
                feedback={feedback}
                showContinueBtn={showContinueBtn}
                showFeedback={showFeedback}
                checkAnswer={checkAnswer}
                handleContinue={handleContinue}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
