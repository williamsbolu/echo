"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);

  return (
    <div className="flex bg-green-200 flex-col items-center justify-center min-h-svh">
      <p>app/Widget</p>
      <div className="max-w-sm w-full mx-auto gap-y-4 flex flex-col">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}
