import Link from "next/link";
import { getServerSession } from "next-auth/next";

export default async function App() {
  return (
    <div className="flex justify-evenly flex-col items-center h-screen">
      <h1 className="text-6xl">Welcome to Codelingo...</h1>
      <Link
        href="/home"
        className="bg-green-500 text-white rounded shadow-md p-3 hover:bg-green-600"
      >
        Get Started
      </Link>
    </div>
  );
}
