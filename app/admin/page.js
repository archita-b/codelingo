"use client";

import { useState } from "react";
import CreateQuestion from "./components/CreateQuestion";
import UpdateQuestion from "./components/UpdateQuestion";
import DeleteQuestion from "./components/DeleteQuestion";

export default function AdminPage() {
  const [displayPage, setDisplayPage] = useState(null);

  return (
    <div>
      {displayPage === "create" && (
        <CreateQuestion setDisplayPage={setDisplayPage} />
      )}
      {displayPage === "update" && (
        <UpdateQuestion setDisplayPage={setDisplayPage} />
      )}
      {displayPage === "delete" && (
        <DeleteQuestion setDisplayPage={setDisplayPage} />
      )}

      {!displayPage && (
        <div>
          <button
            value="create"
            onClick={(e) => setDisplayPage(e.target.value)}
          >
            create
          </button>

          <button
            value="update"
            onClick={(e) => setDisplayPage(e.target.value)}
          >
            update
          </button>

          <button
            value="delete"
            onClick={(e) => setDisplayPage(e.target.value)}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}
