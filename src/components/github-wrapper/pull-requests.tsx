"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IconArrowDown, IconArrowUp, IconGitMerge } from "@tabler/icons-react";
import { Skeleton } from "../ui/skeleton";

type PR = {
    id: string;
    title: string;
    url: string;
    repo: string;
    number: number;
};

export function SkeletonDemo() {
    return (
        <div className="flex flex-col mt-3 items-center space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
        </div>
    )
}

export const PullRequests = () => {
    const [prs, setPrs] = useState<PR[]>([]);
    const [loading, setLoading] = useState(true);
    const showPRs = 5;
    const [visibleCount, setVisibleCount] = useState(showPRs);

    useEffect(() => {
        const fetchPRs = async () => {
            try {
                const res = await fetch("/api/github/pull-requests");
                const data = await res.json();
                setPrs(data.pullRequests ?? []);
            } catch {
                setPrs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPRs();
    }, []);

    return (
        <div className="px-2 pt-4">
            <h2 className="text-md font-bold text-neutral-600 dark:text-neutral-200">Merged PRs</h2>
            {loading ? (
                <SkeletonDemo />
            ) : (
                <>
                    <div className="mt-3">
                        <ul className="space-y-3 relative z-0">
                            {prs.slice(0, visibleCount).map((pr) => (
                                <li
                                    key={pr.id}
                                    className="bg-neutral-50 dark:bg-[#1b1b1a] p-3 shadow-standard dark:shadow-[var(--shadow-standard)] hover:shadow-derek dark:hover:shadow-[var(--shadow-derek)] transition-all"
                                >
                                    <Link
                                        href={pr.url}
                                        target="_blank"
                                        className="flex flex-col md:flex-row justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <IconGitMerge
                                                stroke={2}
                                                color="#aa7df8"
                                                className="w-5 h-5 flex-shrink-0 mt-0.5"
                                            />
                                            <span className="text-sm text-gray-800 dark:text-gray-200">
                                                {pr.title}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-400 dark:text-gray-500 pl-8">
                                            {pr.repo} #{pr.number}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {prs.length > showPRs && (
                            <div className="mt-6 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setVisibleCount((current) =>
                                            current >= prs.length
                                                ? showPRs
                                                : Math.min(current + showPRs, prs.length)
                                        )
                                    }
                                    className="relative z-20 inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-neutral-100/70 px-4 py-2 text-xs font-medium text-neutral-700 shadow-[0_0_0_1px_rgba(255,255,255,0.2)] backdrop-blur-md transition hover:bg-neutral-200/80 dark:border-neutral-700/80 dark:bg-neutral-900/70 dark:text-neutral-100"
                                >
                                    {visibleCount >= prs.length ? (
                                        <>
                                            <span>See less</span>
                                            <IconArrowUp className="w-4 h-4" />
                                        </> 
                                    ) : (
                                        <>
                                            <span>See more ({prs.length - visibleCount})</span>
                                            <IconArrowDown className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};