"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return <p>Signed in as {session?.user.name}</p>;
}
