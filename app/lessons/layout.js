import Link from "next/link";

export default function lessonsLayout({ children }) {
  return (
    <div>
      <div className="flex justify-end p-2">
        <Link
          href="/api/auth/signout"
          className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
        >
          Sign Out
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
}
