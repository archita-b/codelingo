import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li className="text-white">
          <Link href="/lessons">Lessons</Link>
        </li>
      </ul>
    </nav>
  );
}
