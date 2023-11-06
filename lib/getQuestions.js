export async function getQuestionsForLesson(lessonId) {
  const res = await fetch(`http://localhost:3000/api/lessons/${lessonId}`);
  const data = await res.json();
  return data;
}
