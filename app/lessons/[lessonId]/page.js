import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MCQ from "@/app/components/MCQ";

export default async function LessonPage({ params }) {
  async function getQuestionsForLesson(lessonId) {
    const res = await fetch(`http://localhost:3000/api/lessons/${lessonId}`);
    const questionData = await res.json();
    return questionData;
  }

  const questions = await getQuestionsForLesson(params.lessonId);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-20">
      <Header />
      <MCQ />
      <Footer />
    </div>
  );
}
