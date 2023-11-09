import Link from "next/link";
// import AuthProvider from "../auth/provider";

export default function lessonsLayout({ children }) {
  return (
    <div>
      {/* <AuthProvider> */}
      <div className="flex justify-end p-2">
        <Link
          href="/api/auth/signout"
          className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
        >
          Sign Out
        </Link>
      </div>
      <main>{children}</main>
      {/* </AuthProvider> */}
    </div>
  );
}
