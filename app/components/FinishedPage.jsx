import { useSession } from "next-auth/react";
import Link from "next/link";
import { createUserLessonInfo } from "./requests";

export default function FinishedPage({ lessonId }) {
  const { data: session } = useSession();
  const userEmail = session?.user.email;

  return (
    <>
      <h1 className="w-96 h-72 bg-sky-100 text-sky-600 text-5xl font-bold rounded-lg text-center pt-24 shadow-md">
        Finished!
      </h1>
      <Link
        href="/lessons"
        onClick={() => {
          createUserLessonInfo(userEmail, lessonId, true).then((res) =>
            console.log("res=", res)
          );
        }}
        className="border-[2px] border-sky-500 rounded-lg text-sky-500 text-center hover:bg-sky-100 text-2xl font-semibold p-5"
      >
        Continue to Next Lesson
      </Link>
    </>
  );
}
