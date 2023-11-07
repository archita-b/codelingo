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
        <div className="space-y-6">
          <h1 className="text-xl">Sign in to continue with lessons</h1>
          <div className="flex justify-center">
            <Link
              href="/api/auth/signin"
              className="bg-green-500 text-white rounded p-2"
            >
              SignIn
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
