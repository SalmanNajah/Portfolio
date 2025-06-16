"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/container";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex justify-center text-center">
      <Container className="pt-48">
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          The page you’re looking for doesn’t exist. Redirecting...
        </p>
      </Container>
    </div>
  );
}
