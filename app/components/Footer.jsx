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
  return (
    <div className="w-full">
      <div
        className={`p-10 flex justify-around ${
          feedback
            ? feedback === "Correct"
              ? "bg-green-100"
              : "bg-red-100"
            : "border-solid border-t-[2px] border-gray-300 bg-white"
        }`}
      >
        {showFeedback ? (
          <div
            className={`h-10 w-32 text-2xl text-center font-semibold ${
              feedback === "Correct" ? "text-green-500" : "text-red-500"
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
            className={`h-10 w-32 text-white text-xl font-semibold rounded-lg shadow-md ${
              feedback === "Correct" ? "bg-green-600" : "bg-red-600"
            }`}
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
    </div>
  );
}
