"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#07070a] px-5 text-[#f5f7fa]">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30">
            <AlertTriangle className="h-6 w-6 text-red-400" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-2xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-sm text-[#9297a6]">
            An unexpected error occurred while loading this page. You can try
            again or head back to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Back home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
