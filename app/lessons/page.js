import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "../api/auth/authOptions";
import { getLessons, getUserLessonInfo } from "../components/requests";
import FinishedTick from "../components/FinishedTick";

export default async function LessonsPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  const lessons = (await getLessons()).data.lessonsData;

  const userLessonCompletionInfo = (
    await getLessons()
  ).data.lessonCompletionData.filter(
    (element) => element.user_email === session.user.email
  );

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 font-bold text-3xl text-neutral-600">
        Choose a Lesson...
      </h1>
      <div className="w-96 h-96 p-4 grid grid-cols-2 gap-6">
        {lessons?.map((lesson) => {
          return (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className={`relative flex justify-center flex-col items-center rounded-xl border-x-2 border-t-2 border-b-4 border-neutral-400 text-neutral-500 font-semibold text-2xl hover:bg-neutral-200`}
            >
              {userLessonCompletionInfo.filter(
                (element) => element.lesson_id == lesson.id
              )[0]?.is_completed && <FinishedTick />}
              Lesson {lesson.id}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
