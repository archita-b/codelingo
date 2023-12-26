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
              ? "bg-green-100 border-solid border-t-[2px] border-green-400"
              : "bg-red-100 border-solid border-t-[2px] border-red-400"
            : "border-solid border-t-[2px] border-neutral-500"
        }`}
      >
        {showFeedback ? (
          <div
            className={`h-10 w-32 text-2xl text-center font-semibold ${
              feedback === "Correct" ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </div>
        ) : (
          <button
            className="h-10 w-32 border-solid border-[2px] border-neutral-500 rounded-lg text-xl disabled:border-neutral-400 disabled:text-neutral-400 disabled:bg-neutral-200"
            onClick={checkAnswer}
            disabled={`${userAnswer}`}
          >
            Skip
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
            className={`h-10 w-32 border-solid border-[2px] border-neutral-500 rounded-lg text-xl disabled:border-neutral-400 disabled:text-neutral-400 disabled:bg-neutral-200`}
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
