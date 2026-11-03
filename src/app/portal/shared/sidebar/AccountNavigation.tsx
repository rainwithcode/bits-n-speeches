"use client";

import { LogOut } from "lucide-react";
import { useState, useTransition } from "react";

import { signOut } from "@/app/(auth)/actions";

export default function AccountNavigation() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSignOut() {
    setError(null);

    startTransition(async () => {
      const result = await signOut();

      if (result?.error) {
        setError(result.error);
      }
    });
  }

  return (
    <nav className="border-t border-white/15">
      <div className="px-4 py-6">
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isPending}
          className="flex gap-2 cursor-pointer disabled:opacity-50"
        >
          <LogOut size={18} />
          {isPending ? "Signing out..." : "Log Out"}
        </button>

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </nav>
  );
}
