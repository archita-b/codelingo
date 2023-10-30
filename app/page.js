import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to CodeLingo</h1>
      <Link href="/login">Get started</Link>
    </main>
  );
}
