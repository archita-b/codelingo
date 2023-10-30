"use client";

// import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex justify-center items-center h-screen">
      {/* <GoogleButton onClick={() => signIn("google")} /> */}
      <button onClick={() => signIn("google")}>Sign in with google</button>
    </main>
  );
}
