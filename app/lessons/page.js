import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function LessonsPage() {
  const userData = [
    "archita.bhattacharyya91@gmail.com",
    "santosh@geekskool.com",
  ];

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/lessons");
  }
  const authorizedUser = userData.includes(session.user.email);
  return (
    <>
      {authorizedUser ? (
        <div>Welcome {session.user.name} </div>
      ) : (
        <div>You are not allowed</div>
      )}
    </>
  );
}
