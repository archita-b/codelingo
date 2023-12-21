import { deleteQuestion } from "./requests";

export default function AdminButtons({
  setEditQuestion,
  lessonId,
  currentQuestion,
  setQuestionsForLesson,
  percentageOfProgress,
}) {
  return (
    <>
      <div
        className="absolute top-1/2 left-0 flex flex-col gap-1"
        style={{ display: `${percentageOfProgress === 100 ? "none" : ""}` }}
      >
        <button
          onClick={() => setEditQuestion(true)}
          className="p-2 border-[2px] border-green-600 text-green-600 bg-white font-semibold rounded-r-md hover:bg-green-600 hover:text-white"
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
          className="p-2 border-[2px] border-red-600 text-red-600 bg-white font-semibold rounded-r-md hover:bg-red-600 hover:text-white"
        >
          Delete
        </button>
      </div>
    </>
  );
}
