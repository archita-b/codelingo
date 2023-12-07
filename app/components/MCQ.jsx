import { useSession } from "next-auth/react";

export default function MCQ({
  currentQuestion,
  userAnswer,
  setUserAnswer,
  percentageOfProgress,
}) {
  // const questionNotDefined = currentQuestion === undefined;
  // console.log("per in mcq=", percentageOfProgress);

  return (
    <div
      className={`w-96 h-72 overflow-y-auto p-5 rounded-lg shadow-md ${
        percentageOfProgress === 100
          ? "bg-green-200 border-[4px] border-green-300 flex justify-center items-center text-3xl text-slate-500 font-bold"
          : "bg-slate-200"
      }`}
    >
      <h1 className="text-xl mb-6">
        {percentageOfProgress === 100 ? "" : currentQuestion.question}
      </h1>

      <div className="flex flex-col gap-4">
        {percentageOfProgress === 100
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
