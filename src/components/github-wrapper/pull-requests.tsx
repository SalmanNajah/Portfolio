"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IconArrowDown, IconArrowUp, IconGitMerge } from "@tabler/icons-react";

type PR = {
  id: number;
  title: string;
  url: string;
  repo: string;
  number: number;
};

type SearchIssue = {
  id: number;
  title: string;
  html_url: string;
  repository_url?: string;
  number: number;
};

export const PullRequests = ({ username = "Salman-in" }: { username?: string }) => {
  const [prs, setPrs] = useState<PR[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const showPRs = 5;

  useEffect(() => {
    const fetchPRs = async () => {
      const q = `is:pr author:${username} is:merged`;
  // fetch more items so we can show 10 initially and reveal the rest on demand
  const url = `https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=50`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        const items = (data.items || []).map((it: SearchIssue) => ({
          id: it.id,
          title: it.title,
          url: it.html_url,
          repo: (it.repository_url || "").replace("https://api.github.com/repos/", ""),
          number: it.number,
        }));

        setPrs(items);
      } catch {
        setPrs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPRs();
  }, [username]);

  return (
    <div className="px-2 pt-4">
      <h2 className="text-md font-bold">Merged PRs</h2>
      {loading ? (
        <p className="text-sm text-muted pt-2">Loading…</p>
      ) : (
        <>
          <ul className="mt-3 space-y-3">
            {(showAll ? prs : prs.slice(0, showPRs)).map((pr) => (
            <li
              key={pr.id}
              className="bg-neutral-50 dark:bg-[#1b1b1a] p-3 shadow-standard dark:shadow-[var(--shadow-standard)] hover:shadow-derek dark:hover:shadow-[var(--shadow-derek)] transition-all"
            >
              <Link href={pr.url} target="_blank" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <IconGitMerge stroke={2} color="#aa7df8" className="w-5 h-5 flex-shrink-0 mt-0.5"/>
                  <span className="text-sm text-gray-800 dark:text-gray-200">{pr.title}</span>
                </div>
                <span className="text-xs hidden sm:block text-gray-500 dark:text-gray-400">
                  {pr.repo} #{pr.number}
                </span>
              </Link>
            </li>
            ))}
          </ul>

          {prs.length > 5 && (
            <div className="mt-6 flex justify-start cursor-pointer">
              <button
                type="button"
                onClick={() => setShowAll((s) => !s)}
                className="text-sm text-secondary dark:text-secondary underline flex items-center cursor-pointer"
              >
                {showAll ? <><span>See less</span> <IconArrowUp className="w-4" /></> : <><span>See more ({prs.length - showPRs})</span> <IconArrowDown className="w-4" /></>}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};