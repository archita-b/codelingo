import { useState } from "react";
import { updateQuestion } from "./requests";

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
        const questionToBeModified = questionsForLesson[currentIndex];
        const modifiedQuestion = {
          ...questionToBeModified,
          question: data.data.question,
          answers: data.data.answers,
          correct_ans: data.data.correct_ans,
        };
        questionsForLesson[currentIndex] = { ...modifiedQuestion };
        return questionsForLesson;
      }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <label className="text-lg font-semibold block mb-2">
          Edit question
        </label>
        <textarea
          className="border p-2 w-full font-normal font-mono"
          value={updatedQuestion}
          onChange={(e) => setUpdatedQuestion(e.target.value)}
        />

        {updatedAnswers.map((updatedAnswer, index) => (
          <div key={index} className="mt-4">
            <label className="text-lg font-semibold block mb-2">
              Answer {index + 1}
            </label>
            <textarea
              className="border p-2 w-full font-normal font-mono"
              value={updatedAnswer}
              onChange={(e) => editAnswers(index, e.target.value)}
            />
          </div>
        ))}

        <label className="text-lg font-semibold block mt-4">
          Correct answer
        </label>
        <input
          className="border p-2 w-full font-normal font-mono"
          value={updatedCorrectAnswer}
          onChange={(e) => setUpdatedCorrectAnswer(e.target.value)}
        />

        <div className="w-full flex justify-between mt-4">
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
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => setEditQuestion(false)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
