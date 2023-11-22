import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "../api/auth/authOptions";
import { getLessons, getUserLessonInfo } from "../components/requests";

export default async function LessonsPage() {
  const lessons = (await getLessons()).data;

  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 font-bold text-3xl text-slate-600">
        Choose a Lesson...
      </h1>
      <div className="w-96 h-96 p-4 grid grid-cols-2 gap-6">
        {lessons.map((lesson) => {
          return (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className={`flex justify-center flex-col items-center rounded-xl border-x-2 border-t-2 border-b-4 border-slate-300 text-slate-500 font-semibold text-2xl hover:bg-slate-200`}
            >
              Lesson {lesson.id}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
