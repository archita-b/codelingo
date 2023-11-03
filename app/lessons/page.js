import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import getLessons from "@/lib/getLessons";

export default async function LessonsPage() {
  const userData = [
    "archita.bhattacharyya91@gmail.com",
    "santosh@geekskool.com",
  ];

  const lessons = (await getLessons()).rows;

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/lessons");
  }
  const authorizedUser = userData.includes(session.user.email);
  return (
    <>
      {!authorizedUser ? (
        <div>You are not allowed </div>
      ) : (
        <>
          <div>Welcome {session.user.name}</div>
          <div>
            {lessons.map((lesson) => {
              return <div key={lesson.id}>{lesson.id}</div>;
            })}
          </div>
        </>
      )}
    </>
  );
}
