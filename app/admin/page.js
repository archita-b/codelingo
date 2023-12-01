"use client";

import { useState } from "react";
import CreateQuestion from "./components/CreateQuestion";
// import UpdateQuestion from "./components/UpdateQuestion";
import DeleteQuestion from "./components/DeleteQuestion";

export default function AdminPage() {
  const [displayPage, setDisplayPage] = useState(null);

  return (
    <div className="p-6">
      {displayPage === "create" && (
        <CreateQuestion setDisplayPage={setDisplayPage} />
      )}
      {/* {displayPage === "update" && (
        <UpdateQuestion setDisplayPage={setDisplayPage} />
      )} */}
      {displayPage === "delete" && (
        <DeleteQuestion setDisplayPage={setDisplayPage} />
      )}

      {!displayPage && (
        <div>
          <button
            value="create"
            onClick={(e) => setDisplayPage(e.target.value)}
            className="border p-2 rounded-md bg-green-600 text-white text-2xl hover:bg-green-700"
          >
            Create a Question
          </button>

          {/* <button
            value="update"
            onClick={(e) => setDisplayPage(e.target.value)}
          >
            update
          </button> */}

          {/* <button
            value="delete"
            onClick={(e) => setDisplayPage(e.target.value)}
          >
            delete
          </button> */}
        </div>
      )}
    </div>
  );
}
