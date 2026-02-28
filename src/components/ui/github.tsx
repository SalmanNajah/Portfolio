"use client";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import Container from "../container";
import SideHeaders from "../sideheaders";
import Link from "next/link";
import { useTheme } from "next-themes";
import { PullRequests } from "../github-wrapper/pull-requests";
import HeatmapSkeleton from "./heatmap-skeleton";

type Activity = {
    date: string;
    count: number;
    level: number;
};

const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Prisma",
    "Git",
    "Docker",
    "Postman"
];

const GithubGraph = () => {
    const [contributions, setContributions] = useState<Activity[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const res = await fetch("/api/github/contributions");
                const data = await res.json();
                setContributions(data.contributions ?? []);
                setTotalCount(data.totalContributions ?? 0);
            } catch {
                setContributions([]);
                setTotalCount(0);
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, []);

    return (
        <div>
            <SideHeaders>Proof of work</SideHeaders>
            <Container className="pb-6 pt-3">
                <Link
                    href={"https://github.com/SalmanNajah"}
                    target="_blank"
                    className="block pt-8 w-full"
                >
                    <div className="w-full overflow-x-auto overflow-y-visible">
                        <div className="min-w-fit flex justify-center p-2">
                            <div className="w-max">
                                {loading || contributions.length === 0 ? (
                                    <HeatmapSkeleton />
                                ) : (
                                    <ActivityCalendar
                                        data={contributions}
                                        labels={{
                                            totalCount: `${totalCount} contributions in the last year`,
                                        }}
                                        theme={{
                                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                        }}
                                        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                                        blockMargin={3}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Link>

                <PullRequests />

                <div className="pt-4 px-2">
                    <h2 className="text-md font-bold text-neutral-600 dark:text-neutral-200">Skills</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="inline-flex items-center rounded-full border border-neutral-200/80 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700/70 dark:bg-neutral-900 dark:text-neutral-100"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default GithubGraph;