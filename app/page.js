import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/authOptions";

export default async function App() {
  const session = await getServerSession(authOptions);

  const href = session ? "/lessons" : "/api/auth/signin?callbackUrl=/lessons";

  return (
    <div>
      <div className="flex justify-end p-4">
        <Link
          href="/api/auth/signin"
          className="bg-green-500 text-white font-medium rounded p-3 hover:bg-green-600"
        >
          Sign In
        </Link>
      </div>

      <div className="flex justify-evenly flex-col items-center h-screen">
        <h1 className="text-6xl">Welcome to Codelingo...</h1>
        <Link
          href={href}
          className="bg-blue-500 text-lg font-medium text-white p-4 rounded-md shadow-md hover:bg-blue-600"
        >
          Get Started with lessons
        </Link>
      </div>
    </div>
  );
}
