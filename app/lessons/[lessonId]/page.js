"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MCQ from "@/app/components/MCQ";
import { redirect } from "next/navigation";

export default function LessonPage({ params: { lessonId } }) {
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

  async function getQuestionsForLesson(lessonId) {
    // const res = await fetch(`http://localhost:3000/api/lessons/${lessonId}`);
    const res = await fetch(`http://127.0.0.1:3000/api/lessons/${lessonId}`);
    const data = res.json();
    return data;
  }

  useEffect(() => {
    getQuestionsForLesson(lessonId).then((data) => {
      if (data)
        setQuestionsForLesson(
          data.map((question) => ({ ...question, answered: false }))
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
    if (currentIndex >= questions.length) {
      selectedLesson = null;
      return;
    }
    if (Number(userAnswer) + 1 == currentQuestion.correctanswer) {
      setFeedback("Correct");
    } else {
      setFeedback("Wrong");
    }
    setShowContinueBtn(true);
    setShowFeedback(true);
  }

  function handleContinue() {
    if (Number(userAnswer) + 1 === currentQuestion.correctanswer) {
      setQuestionsForLesson((questionsForLesson) =>
        questionsForLesson.map((question) => {
          if (question === currentQuestion)
            return { ...question, answered: true };
          return { ...question };
        })
      );
      setCurrentIndex(currentIndex);
      setNumOfCorrectAns(numOfCorrectAns + 1);
    } else setCurrentIndex(currentIndex + 1);
    setUserAnswer("");
    setShowContinueBtn(false);
    setShowFeedback(false);
  }

  return (
    <div>
      {session && (
        <div className="flex min-h-screen flex-col items-center justify-between py-20">
          <Header percentageOfProgress={percentageOfProgress} />
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
      )}
    </div>
  );
}
