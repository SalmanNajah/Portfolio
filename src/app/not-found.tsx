"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/blog"); // Auto redirect after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-2xl font-bold mb-2">Blog Not Found</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        The blog you’re looking for doesn’t exist. Redirecting to all blogs...
      </p>
      <p className="mt-4 text-sm text-blue-500 underline cursor-pointer" onClick={() => router.replace("/blog")}>
        Go to All Blogs Now
      </p>
    </div>
  );
}
