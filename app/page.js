import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <>{session ? <h1>You are in</h1> : <h1>sign in to enter</h1>}</>;
}
