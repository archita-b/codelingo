"use client";

import { useState } from "react";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-sky-100">
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2 space-y-2">
        <label className="flex flex-col">
          Username
          <input className="shadow rounded border-[2px] border-blue-200"></input>
        </label>
        <label className="flex flex-col">
          Password
          <input className="shadow rounded border-[2px] border-blue-200"></input>
        </label>
        <div className="flex justify-center">
          <button className="shadow rounded p-2 bg-blue-500 text-white font-medium">
            Login / SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
