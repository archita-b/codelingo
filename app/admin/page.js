"use client";

import { useEffect, useState } from "react";
import { createQuestion, getLessons } from "../components/requests";

export default function AdminPage() {
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

  // ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]

  function addQuestion(e) {
    e.preventDefault();
    createQuestion(
      questionType,
      lessonId,
      question,
      answers,
      correctAnswer
    ).then((data) => data);
  }

  function setAnswerOptions(index, value) {
    setAnswers((answer) => {
      answer[index] = value;
      return [...answer];
    });
  }

  return (
    <form onSubmit={addQuestion}>
      <p>This is admin page</p>
      <h1>Create a question:</h1>
      <div className="flex flex-col">
        <label>
          Select chapter
          <select
            value={lessonId}
            onChange={(e) => {
              setLessonId(e.target.value);
            }}
          >
            {lessonsData.map((lessonData) => {
              return (
                <option key={lessonData.lesson_name} value={lessonData.id}>
                  {lessonData.lesson_name}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          select question type
          <select
            value={questionType}
            onChange={(e) => {
              setQuestionType(e.target.value);
            }}
          >
            <option>none</option>
            <option value="mcq">mcq</option>
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
          Enter possible answers:
          {answers.map((element, index) => {
            return (
              <input
                key={index}
                placeholder={`Type answer ${index + 1}`}
                value={element}
                onChange={(e) => setAnswerOptions(index, e.target.value)}
              />
            );
          })}
        </label>

        <label>
          Correct answer
          <select
            value={correctAnswer}
            onChange={(e) => {
              setCorrectAnswer(e.target.value);
            }}
          >
            {Array.from({ length: 4 }, (value, index) => index + 1).map(
              (element) => {
                return (
                  <option key={element} value={element}>
                    {element}
                  </option>
                );
              }
            )}
          </select>
        </label>
      </div>
      <button>submit question</button>
    </form>
  );
}
