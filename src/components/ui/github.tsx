"use client";

import { useEffect, useState } from "react";
import { Activity, ActivityCalendar } from "react-activity-calendar";
import Container from "../container";
import SideHeaders from "../sideheaders";
import Link from "next/link";

// Replace this mockData with data fetching using useCallback etc
const mockData: Activity[] = [
    { date: "2024-06-14", count: 0, level: 0 },
    { date: "2024-06-15", count: 0, level: 0 },
    { date: "2024-06-16", count: 0, level: 0 },
    { date: "2024-06-17", count: 0, level: 0 },
    { date: "2024-06-18", count: 0, level: 0 },
    { date: "2024-06-19", count: 0, level: 0 },
    { date: "2024-06-20", count: 0, level: 0 },
    { date: "2024-06-21", count: 0, level: 0 },
    { date: "2024-06-22", count: 0, level: 0 },
    { date: "2024-06-23", count: 0, level: 0 },
    { date: "2024-06-24", count: 0, level: 0 },
    { date: "2024-06-25", count: 0, level: 0 },
    { date: "2024-06-26", count: 0, level: 0 },
    { date: "2024-06-27", count: 0, level: 0 },
    { date: "2024-06-28", count: 0, level: 0 },
    { date: "2024-06-29", count: 0, level: 0 },
    { date: "2024-06-30", count: 0, level: 0 },
    { date: "2024-07-01", count: 0, level: 0 },
    { date: "2024-07-02", count: 0, level: 0 },
    { date: "2024-07-03", count: 0, level: 0 },
    { date: "2024-07-04", count: 0, level: 0 },
    { date: "2024-07-05", count: 0, level: 0 },
    { date: "2024-07-06", count: 0, level: 0 },
    { date: "2024-07-07", count: 0, level: 0 },
    { date: "2024-07-08", count: 0, level: 0 },
    { date: "2024-11-25", count: 0, level: 0 },
    { date: "2024-11-26", count: 0, level: 0 },
    { date: "2024-11-27", count: 1, level: 1 },
    { date: "2024-11-28", count: 1, level: 1 },
    { date: "2025-06-14", count: 3, level: 1 },
    {
        "date": "2025-05-16",
        "count": 1,
        "level": 1
    },
    {
        "date": "2025-05-17",
        "count": 5,
        "level": 1
    },
    {
        "date": "2025-05-18",
        "count": 4,
        "level": 1
    },
    {
        "date": "2025-05-19",
        "count": 0,
        "level": 0
    },
    {
        "date": "2025-05-20",
        "count": 0,
        "level": 0
    },
    {
        "date": "2025-05-21",
        "count": 0,
        "level": 0
    },
    {
        "date": "2025-05-22",
        "count": 2,
        "level": 1
    },
];

type GithubGraphProps = {
    blockMargin?: number;
    colorPallete?: string[];
};

const GithubGraph = ({ blockMargin, colorPallete }: GithubGraphProps) => {
    const [contributions, setContributions] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate delay to mock loading state
        const timer = setTimeout(() => {
            setContributions(mockData);
            setLoading(false);
        }, 500); // 500ms fake delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <Container>
            <SideHeaders>GitHub Contributions</SideHeaders>
            <Link
                href="https://github.com/Salman-in"
                target="_blank"
                className="flex justify-center"
            >
                <ActivityCalendar
                    data={contributions}
                    loading={loading}
                    maxLevel={4} // must match data range
                    blockMargin={blockMargin ?? 2.5}
                    theme={{
                        dark: [
                            "#a0a0a0",
                            "#808080",
                            "#404040",
                            "#1a1a1a",
                            "#000000",
                        ],
                    }}

                />


            </Link>
        </Container>
    );
};

export default GithubGraph;
