import { useState } from "react";
import { updateQuestion } from "../../components/requests";

export default function EditQuestion({
  currentQuestion,
  setEditQuestion,
  questionsForLesson,
  setQuestionsForLesson,
  currentIndex,
}) {
  const [updatedQuestion, setUpdatedQuestion] = useState(
    currentQuestion.question
  );
  const [updatedAnswers, setUpdatedAnswers] = useState(currentQuestion.answers);
  const [updatedCorrectAnswer, setUpdatedCorrectAnswer] = useState(
    currentQuestion.correct_ans
  );

  function editAnswers(index, value) {
    setUpdatedAnswers((answers) => {
      answers[index] = value;
      return [...answers];
    });
  }

  function handleUpdateQuestion(
    lesson_id,
    question_id,
    question,
    answers,
    correct_ans
  ) {
    updateQuestion(lesson_id, question_id, question, answers, correct_ans).then(
      (data) => {
        return {
          ...currentQuestion,
          question: data.data.question,
          answers: data.data.answers,
          correct_ans: data.data.correct_ans,
        };
      }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <div className="flex flex-col items-start space-y-4 bg-white p-8 rounded shadow-lg">
        <label className="text-lg font-bold flex items-center">
          Edit question
          <textarea
            className="border p-2 ml-2 font-normal font-mono"
            value={updatedQuestion}
            onChange={(e) => setUpdatedQuestion(e.target.value)}
          />
        </label>

        {updatedAnswers.map((updatedAnswer, index) => (
          <label key={index} className="text-lg font-bold flex items-center">
            Answer {index + 1}
            <textarea
              className="border p-2 ml-2 font-normal font-mono"
              value={updatedAnswer}
              onChange={(e) => editAnswers(index, e.target.value)}
            />
          </label>
        ))}

        <label className="text-lg font-bold">
          Correct answer
          <input
            className="border p-2 ml-2 font-normal font-mono"
            value={updatedCorrectAnswer}
            onChange={(e) => setUpdatedCorrectAnswer(e.target.value)}
          />
        </label>

        <div className="w-full flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
            onClick={() =>
              handleUpdateQuestion(
                currentQuestion.lesson_id,
                currentQuestion.id,
                updatedQuestion,
                updatedAnswers,
                updatedCorrectAnswer
              )
            }
          >
            Update
          </button>

          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => setEditQuestion(false)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
