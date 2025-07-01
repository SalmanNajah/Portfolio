"use client";
import { IconBrandX } from "@tabler/icons-react";
import { useState } from "react";

export default function ContactContent() {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    // write the logic to send the email #TODO
    if (!email) return alert("Please enter your email.");
    alert(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <div className="w-full max-w-xl space-y-3 py-3 px-2">
      <a
        href="https://twitter.com/messages/compose?recipient_id=salmancodess"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 mb-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-md shadow hover:opacity-90 transition"
      >
        <IconBrandX className="w-4 h-4" />
        DM me
      </a>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Or drop your email, and I’ll reach out.
      </p>

      <div className="flex gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 text-sm rounded-md border border-color-new dark:border-color-new bg-white dark:bg-neutral-900 text-black dark:text-white placeholder-color-new dark:placeholder-color-new focus:outline-none focus:ring-1 focus:ring-neutral-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black text-sm font-medium rounded-md hover:opacity-90 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
