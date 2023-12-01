import { useEffect, useState } from "react";
import { createQuestion, getLessons } from "../../components/requests";

export default function CreateQuestion({ setDisplayPage }) {
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
    <div>
      <h1 className="font-bold">Create a question:</h1>
      <button onClick={() => setDisplayPage(null)}>Go back</button>
      <form
        onSubmit={addQuestion}
        className="flex flex-col justify-between items-center h-screen p-4 text-slate-700 text-2xl"
      >
        <div className="flex flex-col justify-between">
          <label className="flex gap-5">
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

          <label className="flex gap-5">
            select question type
            <select
              value={questionType}
              onChange={(e) => {
                setQuestionType(e.target.value);
              }}
            >
              <option>none</option>
              <option>mcq</option>
            </select>
          </label>

          <label className="flex gap-5">
            Enter question
            <input
              placeholder="Type a question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </label>

          <label className="flex gap-5">
            Enter possible answers:
            <div className="flex flex-col">
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
            </div>
          </label>

          <label className="flex gap-5">
            Correct answer
            <select
              value={correctAnswer}
              onChange={(e) => {
                setCorrectAnswer(e.target.value);
              }}
            >
              <option>none</option>
              {Array.from({ length: 4 }, (value, index) => index + 1).map(
                (element) => {
                  return <option key={element}>{element}</option>;
                }
              )}
            </select>
          </label>
        </div>
        <div className="flex justify-center bg-blue-600 text-white p-3 rounded-md cursor-pointer hover:bg-blue-700">
          <button>Submit Question</button>
        </div>
      </form>
    </div>
  );
}
