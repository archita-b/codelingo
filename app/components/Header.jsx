import Link from "next/link";
import { useState } from "react";

export default function Header({ percentageOfProgress, lessonId }) {
  const [showQuitLink, setShowQuitLink] = useState(false);

  return (
    <div className="w-3/4 flex justify-center items-center space-x-3 transition-all">
      <button
        onClick={() => setShowQuitLink(true)}
        className="text-gray-400 text-2xl hover:text-gray-500 transition-colors"
      >
        {"\u00d7"}
      </button>

      {showQuitLink && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm">
          <div className="w-1/3 h-1/4 p-5 bg-gray-300 absolute top-1/3 left-1/3 flex flex-col justify-between items-center rounded-lg shadow-lg">
            <div className="text-3xl text-slate-700">Do you want to quit?</div>
            <div className="flex space-x-4">
              <Link
                href={`/lessons/${lessonId}`}
                onClick={() => setShowQuitLink(false)}
                className="bg-gray-400 border-gray p-2 w-6/12 rounded-lg text-white text-xl text-center hover:bg-gray-500 transition-colors"
              >
                Stay on this page
              </Link>
              <Link
                href="/lessons"
                className="bg-blue-600 border-blue p-2 w-6/12 rounded-lg text-white text-xl text-center hover:bg-blue-700 transition-colors"
              >
                Quit this lesson
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="w-3/5">
        <div className="h-2.5 bg-gray-300 rounded-full">
          <div
            className="h-full bg-green-600 rounded-full"
            style={{ width: `${percentageOfProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
