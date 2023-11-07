export default function MCQ({ currentQuestion, userAnswer, setUserAnswer }) {
  const questionNotDefined = currentQuestion === undefined;

  return (
    <div
      className={`w-96 h-72 overflow-y-auto p-5 rounded-lg shadow-md ${
        questionNotDefined
          ? "bg-green-200 border-[4px] border-green-300 flex justify-center items-center text-3xl text-slate-500 font-bold"
          : "bg-slate-200"
      }`}
    >
      <h1 className="text-xl mb-6">
        {questionNotDefined ? "" : currentQuestion.question}
      </h1>

      <div className="flex flex-col space-y-4">
        {questionNotDefined
          ? "Finished !"
          : currentQuestion.answers.map((answer, index) => {
              return (
                <label key={answer} className="mx-2">
                  <input
                    type="radio"
                    name="answer"
                    value={index}
                    className="mx-4"
                    onChange={(e) => {
                      setUserAnswer(e.target.value);
                    }}
                    checked={String(index) === String(userAnswer)}
                  />
                  {answer}
                </label>
              );
            })}
      </div>
    </div>
  );
}
