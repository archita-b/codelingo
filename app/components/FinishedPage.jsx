import Link from "next/link";

export default function FinishedPage() {
  return (
    <>
      <h1 className="w-96 h-72 bg-sky-100 text-sky-600 text-5xl font-bold rounded-lg text-center pt-24 shadow-md">
        Finished!
      </h1>
      <Link
        href="/lessons"
        className="border-[2px] border-sky-500 rounded-lg text-sky-500 text-center hover:bg-sky-50 text-2xl font-semibold p-5"
      >
        Continue to Next Lesson
      </Link>
    </>
  );
}
