"use client";
import { useEffect, useState } from "react";
import { ActivityCalendar } from 'react-activity-calendar';
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
                                {loading ? (
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
            </Container>
        </div>
    );
};

export default GithubGraph;