import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex justify-evenly text-2xl font-bold text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">SignIn</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">SignOut</Link>
        </li>
        <li>
          <Link href="/lessons">Lessons</Link>
        </li>
      </ul>
    </nav>
  );
}
