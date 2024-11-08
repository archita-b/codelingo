"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MCQ from "@/app/components/MCQ";
import { redirect } from "next/navigation";
import {
  deleteQuestion,
  getQuestionsForLesson,
} from "@/app/components/requests";
import EditQuestion from "@/app/components/EditQuestion";
import OtherQuestionType from "@/app/components/OtherQuestionType";

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
    if (
      userAnswer &&
      Number(userAnswer) + 1 === Number(currentQuestion.correct_ans)
    ) {
      setFeedback("Correct");
    } else {
      setFeedback("Wrong");
    }
    setShowContinueBtn(true);
    setShowFeedback(true);
  }

  function handleContinue() {
    if (Number(userAnswer) + 1 === Number(currentQuestion.correct_ans)) {
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
          {isAdmin && (
            <div className="absolute top-1/2 left-0 flex flex-col">
              <button
                onClick={() => setEditQuestion(true)}
                className="p-2 bg-green-600 text-white font-semibold hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteQuestion(lessonId, currentQuestion.id).then((data) => {
                    if (data.status === 204) {
                      setQuestionsForLesson((questions) => {
                        return questions.filter(
                          (question) => question.id !== currentQuestion.id
                        );
                      });
                    }
                  });
                }}
                className="p-2 bg-red-600 text-white font-semibold hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          )}

          <div className="flex min-h-screen flex-col items-center justify-between py-20">
            <Header
              percentageOfProgress={percentageOfProgress}
              lessonId={lessonId}
            />
            {currentQuestion?.question_type === "mcq" && (
              <MCQ
                currentQuestion={currentQuestion}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                percentageOfProgress={percentageOfProgress}
              />
            )}
            {/* {currentQuestion?.question_type === "other" && (
              <OtherQuestionType currentQuestion={currentQuestion} />
            )} */}
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
