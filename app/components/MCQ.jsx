export default function MCQ({ currentQuestion, userAnswer, setUserAnswer }) {
  return (
    <div className="w-96 h-72 overflow-y-auto p-5 rounded-xl shadow-lg bg-neutral-200">
      <h1 className="text-2xl text-neutral-700 font-semibold mb-6">
        {currentQuestion?.question}
      </h1>

      <div className="flex flex-col gap-4">
        {currentQuestion?.answers.map((answer, index) => {
          return (
            <label key={answer} className="mx-2 text-neutral-700">
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
