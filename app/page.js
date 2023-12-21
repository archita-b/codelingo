import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/authOptions";

export default async function App() {
  const session = await getServerSession(authOptions);

  const href = session ? "/lessons" : "/api/auth/signin?callbackUrl=/lessons";

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex justify-end p-4">
        <Link
          href="/api/auth/signin"
          className="border-[2px] border-green-600 text-green-600 text-xl font-semibold rounded p-3 hover:text-green-700 hover:border-green-700"
        >
          Sign In
        </Link>
      </div>

      <h1 className="text-6xl text-center text-neutral-600">
        Welcome to Codelingo...
      </h1>

      <div className="flex justify-center pb-20">
        <Link
          href={href}
          className="bg-neutral-600 text-xl text-white font-bold p-4 rounded-md shadow-md hover:bg-neutral-700"
        >
          Get Started with lessons
        </Link>
      </div>
    </div>
  );
}
