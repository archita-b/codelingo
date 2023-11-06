import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function LessonsPage() {
  const userData = [
    "archita.bhattacharyya91@gmail.com",
    "santosh@geekskool.com",
  ];

  async function getLessons() {
    const res = await fetch("http://localhost:3000/api/lessons");
    const lessons = (await res.json()).rows;
    return lessons;
  }
  const lessons = await getLessons();

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/lessons");
  }
  const authorizedUser = userData.includes(session.user.email);
  return (
    <>
      {!authorizedUser ? (
        <div className="flex justify-center p-6">
          <h1 className="text-2xl font-semibold">You are not allowed</h1>
        </div>
      ) : (
        <>
          <div className="flex justify-center p-6">
            <h1 className="text-2xl font-semibold">
              Welcome {session.user.name}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="mb-10 font-bold text-3xl text-slate-600">
              Choose a Lesson
            </h1>
            <div className="w-96 h-96 p-4 grid grid-cols-2 gap-6">
              {lessons.map((lesson) => {
                return (
                  <button
                    key={lesson.id}
                    className={`relative rounded-xl border-x-2 border-t-2 border-b-4 border-slate-300 text-slate-500 font-semibold text-3xl hover:bg-slate-200`}
                  >
                    Lesson {lesson.id}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
