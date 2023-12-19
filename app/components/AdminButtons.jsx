import { deleteQuestion } from "./requests";

export default function AdminButtons({
  setEditQuestion,
  lessonId,
  currentQuestion,
  setQuestionsForLesson,
}) {
  return (
    <div className="absolute top-1/2 left-0 flex flex-col">
      <button
        onClick={() => setEditQuestion(true)}
        className="p-2 bg-green-600 text-white font-semibold hover:bg-green-700"
      >
        Edit
      </button>

      <button
        onClick={() => {
          deleteQuestion(lessonId, currentQuestion.id).then((data) => {
            if (data.status === 204) {
              setQuestionsForLesson((questions) => {
                return questions.filter(
                  (question) => question.id !== currentQuestion.id
                );
              });
            }
          });
        }}
        className="p-2 bg-red-600 text-white font-semibold hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}
