import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/authOptions";

export default async function App() {
  const session = await getServerSession(authOptions);

  const href = session ? "/lessons" : "/api/auth/signin?callbackUrl=/lessons";

  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-r from-neutral-400">
      <div className="flex justify-end p-4">
        <Link
          href="/api/auth/signin"
          className="border-[2px] border-green-600 text-green-600 text-xl font-semibold rounded p-3 hover:bg-green-600 hover:text-white"
        >
          Sign In
        </Link>
      </div>

      <h1 className="text-6xl text-center text-neutral-600 font-semibold font-serif">
        Welcome to Codelingo...
      </h1>

      <div className="flex justify-center pb-20">
        <Link
          href={href}
          className="bg-gradient-to-r from-neutral-500 to-neutral-600 hover:shadow-xl text-xl text-white font-bold p-4 rounded-md shadow-xl"
        >
          Get Started with lessons
        </Link>
      </div>
    </div>
  );
}
