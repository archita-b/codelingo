import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <div className="h-96 w-96 space-y-8">
          <div className="flex justify-center flex-col items-center space-y-4">
            <h1 className="text-3xl">Hi {session.user.name}</h1>
            <p className="text-xl">continue with lessons</p>
          </div>
        </div>
      ) : (
        <div className="flex-col justify-strech h-96">
          <div className="flex justify-end">
            <Link
              href="/api/auth/signin"
              className="bg-green-500 text-white font-medium rounded p-3 hover:bg-green-600"
            >
              Sign In
            </Link>
          </div>
          <h1 className="text-2xl">Sign in to continue with lessons</h1>
        </div>
      )}
    </>
  );
}
