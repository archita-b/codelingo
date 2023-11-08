import Link from "next/link";

export default function HomeLayout({ children }) {
  return (
    <div className="flex justify-evenly flex-col items-center h-screen">
      {/* <div>
        <Link
          href="/api/auth/signout"
          className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
        >
          Sign Out
        </Link>
      </div> */}
      <main>{children}</main>
      <Link
        href="/lessons"
        className="bg-blue-500 text-lg font-medium text-white p-4 rounded-md shadow-md hover:bg-blue-600"
      >
        Get Started with Lessons
      </Link>
    </div>
  );
}
