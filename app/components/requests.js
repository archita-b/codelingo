const url = "http://localhost:3000/api";

export async function getLessons() {
  const res = await fetch(`${url}/lessons`, { cache: "no-store" });

  if (!res.ok) return { data: null, status: res.status };

  const data = await res.json();
  return { data, status: 200 };
}

export async function getQuestionsForLesson(lessonId) {
  const res = await fetch(`${url}/lessons/${lessonId}`);

  if (!res.ok) return { data: null, status: res.status };

  const data = await res.json();
  return { data, status: 200 };
}

export async function createUserLessonInfo(email, lessonId, isCompleted) {
  const res = await fetch(`${url}/lessons/${lessonId}`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({ email, lessonId, isCompleted }),
  });

  if (!res.ok)
    return {
      data: "Failed to insert data in lesson_completion table",
      status: res.status,
    };

  const data = await res.json();
  return { data, status: res.status };
}

export async function createQuestion(
  question_type,
  lesson_id,
  question,
  answers,
  correct_ans
) {
  const res = await fetch(`${url}/admin`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      question_type,
      lesson_id,
      question,
      answers,
      correct_ans,
    }),
  });

  if (!res.ok) return { data: "Error creating question", status: res.status };

  const data = await res.json();
  return { data, status: 201 };
}
