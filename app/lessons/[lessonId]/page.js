"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MCQ from "@/app/components/MCQ";
import { redirect } from "next/navigation";
import { getQuestionsForLesson } from "@/app/components/requests";
import EditQuestion from "@/app/admin/components/EditQuestion";

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
    setShowContinueBtn(false);
    setShowFeedback(false);
  }

  return (
    <div>
      {session && editQuestion ? (
        <EditQuestion
          currentQuestion={currentQuestion}
          setEditQuestion={setEditQuestion}
          questionsForLesson={questionsForLesson}
          setQuestionsForLesson={setQuestionsForLesson}
          currentIndex={currentIndex}
        />
      ) : (
        <div>
          <button
            onClick={() => setEditQuestion(true)}
            className="absolute top-1/2 left-0 p-2 bg-green-600 text-white font-semibold hover:bg-green-700"
          >
            Edit
          </button>
          <div className="flex min-h-screen flex-col items-center justify-between py-20">
            <Header
              percentageOfProgress={percentageOfProgress}
              lessonId={lessonId}
            />
            <MCQ
              currentQuestion={currentQuestion}
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
            />
            <Footer
              lessonId={lessonId}
              questions={questions}
              currentIndex={currentIndex}
              userAnswer={userAnswer}
              feedback={feedback}
              showContinueBtn={showContinueBtn}
              showFeedback={showFeedback}
              checkAnswer={checkAnswer}
              handleContinue={handleContinue}
            />
          </div>
        </div>
      )}
    </div>
  );
}
