import { useState } from "react";
import { updateQuestion } from "./requests";

export default function EditQuestion({ currentQuestion, setEditQuestion }) {
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
      (data) => data
    );
  }

  return (
    <div className="flex flex-col">
      <label>
        Edit question
        <textarea
          value={updatedQuestion}
          onChange={(e) => setUpdatedQuestion(e.target.value)}
        />
      </label>

      {updatedAnswers.map((updatedAnswer, index) => {
        return (
          <label key={index}>
            Answer {index + 1}
            <textarea
              value={updatedAnswer}
              onChange={(e) => editAnswers(index, e.target.value)}
            />
          </label>
        );
      })}

      <label>
        correct answer
        <input
          value={updatedCorrectAnswer}
          onChange={(e) => setUpdatedCorrectAnswer(e.target.value)}
        />
      </label>

      <button
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
        update
      </button>
      <button onClick={() => setEditQuestion(false)}>Back</button>
    </div>
  );
}
