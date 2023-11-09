import Link from "next/link";
import AuthProvider from "../auth/provider";
import Navbar from "../components/Navbar";

export default function lessonsLayout({ children }) {
  return (
    <div>
      <AuthProvider>
        <div className="flex justify-between bg-blue-600 text-white p-4">
          <Navbar />
          <Link href="/api/auth/signout" className="rounded hover:font-bold">
            Sign Out
          </Link>
        </div>
        <main>{children}</main>
      </AuthProvider>
    </div>
  );
}
