"use client";

import { useState } from "react";

export default function AdminPage() {
  const [questionType, setQuestionType] = useState([]);
  const [lessonId, setLessonId] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  return (
    <form>
      This is admin page
      <h1>Create a question:</h1>
      <div className="flex flex-col">
        <label>
          select a type
          <select>
            {questionType.map((type) => {
              return (
                <option key={type.question_type} value={type.question_type}>
                  {type.question_type}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Enter lesson id
          <select>
            {lessonId.map((id) => {
              return <option key={id.id}>{id.id}</option>;
            })}
          </select>
        </label>

        <label>
          Enter question
          <input
            placeholder="Type a question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>

        <label>
          Enter possible answers in an array
          <textarea
            placeholder="type answers"
            value={answers}
            onChange={(e) => setAnswers(e.target.value)}
          />
        </label>

        <label>
          Correct answer
          <select>
            {Array.from(
              { length: answers.length },
              (value, index) => index + 1
            ).map((option) => {
              return <option key={option}>{option}</option>;
            })}
          </select>
        </label>
      </div>
      <button type="submit">submit question</button>
    </form>
  );
}
