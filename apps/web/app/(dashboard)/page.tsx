"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { OrganizationSwitcher } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <div className="flex bg-green-200 flex-col items-center justify-center min-h-svh">
        <p>app/web</p>

        <OrganizationSwitcher hidePersonal />
        <Button onClick={() => addUser()}>Add</Button>

        <div className="max-w-sm w-full mx-auto gap-y-4 flex flex-col bg-red-500">
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </>
  );
}
