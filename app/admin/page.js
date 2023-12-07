"use client";

import { useEffect, useState } from "react";
import { createQuestion, getLessons } from "../components/requests";

export default function CreateQuestion() {
  const [lessonsData, setLessonsData] = useState([]);
  const [lessonId, setLessonId] = useState(0);
  const [questionType, setQuestionType] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    getLessons().then((data) => {
      if (data) {
        const lessonsArray = data.data;
        setLessonsData(lessonsArray);
      }
    });
  }, []);

  function addQuestion(e) {
    e.preventDefault();
    createQuestion(
      questionType,
      lessonId,
      question,
      answers,
      correctAnswer
    ).then((data) => {
      setLessonId(0);
      setQuestionType("");
      setQuestion("");
      setAnswers(["", "", "", ""]);
      setCorrectAnswer(0);
      return data;
    });
  }

  function setAnswerOptions(index, value) {
    setAnswers((answer) => {
      answer[index] = value;
      return [...answer];
    });
  }

  return (
    <div className="bg-slate-100 h-screen flex items-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Create a question:</h1>

        <form onSubmit={addQuestion}>
          <div className="space-y-4">
            <label className="block">
              Select chapter:
              <select
                className="mt-1 p-2 border rounded w-full"
                value={lessonId}
                onChange={(e) => {
                  setLessonId(e.target.value);
                }}
              >
                <option>none</option>
                {lessonsData.map((lessonData) => (
                  <option key={lessonData.lesson_name} value={lessonData.id}>
                    {lessonData.lesson_name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              Select question type:
              <select
                className="mt-1 p-2 border rounded w-full"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
              >
                <option>none</option>
                <option>mcq</option>
                <option>other</option>
              </select>
            </label>

            <label className="block">
              Enter question:
              <textarea
                className="mt-1 p-2 border rounded w-full"
                placeholder="Type a question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>

            <label className="block">
              Enter possible answers:
              <div className="flex flex-col space-y-2">
                {answers.map((element, index) => (
                  <input
                    key={index}
                    className="p-2 border rounded"
                    placeholder={`Type answer ${index + 1}`}
                    value={element}
                    onChange={(e) => setAnswerOptions(index, e.target.value)}
                  />
                ))}
              </div>
            </label>

            <label className="block">
              Correct answer:
              <select
                className="mt-1 p-2 border rounded w-full"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              >
                <option>none</option>
                {Array.from({ length: 4 }, (value, index) => index + 1).map(
                  (element) => (
                    <option key={element}>{element}</option>
                  )
                )}
              </select>
            </label>
          </div>

          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              type="submit"
            >
              Submit Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
