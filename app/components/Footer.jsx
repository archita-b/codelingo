import { useSession } from "next-auth/react";
import Link from "next/link";
import { createUserLessonInfo } from "./requests";

export default function Footer({
  lessonId,
  questions,
  currentIndex,
  userAnswer,
  feedback,
  checkAnswer,
  showContinueBtn,
  showFeedback,
  handleContinue,
}) {
  const { data: session } = useSession();
  const email = session.user.email;

  return (
    <div className="w-full">
      {currentIndex < questions.length ? (
        <div className="border-solid border-t-[2px] border-gray-300 p-6 flex justify-around">
          {showFeedback ? (
            <div
              className={`h-10 w-32 ${
                feedback === "Correct"
                  ? "text-green-500 text-2xl text-center font-semibold leading-8"
                  : "text-red-500 text-2xl text-center font-semibold leading-8"
              }`}
            >
              {feedback}
            </div>
          ) : (
            <button
              className="h-10 w-32 border-solid border-[2px] border-gray-500 rounded-lg disabled:border-gray-300 disabled:text-gray-500"
              onClick={checkAnswer}
              disabled={`${userAnswer}`}
            >
              skip
            </button>
          )}

          {showContinueBtn ? (
            <button
              className="h-10 w-32 bg-green-600 text-white rounded-lg shadow-md"
              onClick={handleContinue}
            >
              continue
            </button>
          ) : (
            <button
              className={`h-10 w-32 border-solid border-[2px] border-gray-500 rounded-lg disabled:border-gray-300 disabled:text-gray-500`}
              onClick={checkAnswer}
              disabled={!`${userAnswer}`}
            >
              Check
            </button>
          )}
        </div>
      ) : (
        <div className="w-full border-solid border-t-[2px] border-gray-300 p-6 flex justify-center">
          <Link
            // onClick={() => {
            //   createUserLessonInfo(email, lessonId, true).then((data) => data);
            // }}
            href="/lessons"
            className="w-30 h-30 p-2 bg-blue-500 text-white text-lg rounded-lg shadow-md font-semibold hover:bg-blue-600"
          >
            continue to next lesson &gt;&gt;
          </Link>
        </div>
      )}
    </div>
  );
}
