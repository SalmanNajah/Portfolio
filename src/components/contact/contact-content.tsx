"use client";
import { IconBrandX } from "@tabler/icons-react";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email({ message: "Please enter a valid email address." });

export default function ContactContent() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!email) return alert("Please enter your email.");

    try {
      const parsedEmail = emailSchema.safeParse(email);
      if (!parsedEmail.success) {
        setError(parsedEmail.error.errors[0]?.message);
        return;
      }
      setError("");
      setIsSubmitting(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: email }),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Thanks! I’ll get back to you soon.");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="w-full max-w-xl space-y-3 px-2">
      <a
        href="https://twitter.com/salmanxcodes"
        target="_blank"
        rel="noopener noreferrer"
        className="md:inline-flex flex items-center justify-center gap-2 px-4 mb-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-md shadow hover:opacity-90 transition"
      >
        <IconBrandX className="w-4 h-4" />
        DM me
      </a>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Or drop your email and I’ll reach out, or{" "}
        <a
          href="mailto:salmannajah123@gmail.com?subject=Contact%20via%20Portfolio"
          className="underline text-blue-600 dark:text-blue-400 hover:opacity-80"
        >
          email me directly
        </a>
        .
      </p>

      <div className="md:flex gap-2 flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow max-w-lg px-4 py-2 text-sm rounded-md border border-color-new dark:border-color-new bg-white dark:bg-neutral-900 text-black dark:text-white placeholder-color-new dark:placeholder-color-new focus:outline-none focus:ring-1 focus:ring-neutral-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black text-sm font-medium rounded-md hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          Send
        </button>
      </div>
      {error && <div className="text-red-500 text-sm pl-2">{error}</div>}
    </div>
  );
}
