import Link from "next/link";
import UserInfo from "../components/UserInfo";

export default function lessonsLayout({ children }) {
  return (
    <>
      <nav className="absolute w-full flex justify-between bg-neutral-500 text-white text-xl font-semibold p-4">
        <UserInfo />
        <Link href="/api/auth/signout" className="rounded hover:font-extrabold">
          Sign Out
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
