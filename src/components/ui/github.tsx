"use client";
import { useCallback, useState } from "react";
import dynamic from 'next/dynamic';
import { Activity } from 'react-github-calendar';
import Container from "../container";
import SideHeaders from "../sideheaders";
import Link from "next/link";
import { useTheme } from "next-themes";

const GitHubCalendar = dynamic(() => import('react-github-calendar'), {
  ssr: false,
  loading: () => <div className="h-[159px] w-full" />,
});

type GithubGraphProps = {
    username: string;
    blockMargin?: number;
};

const GithubGraph = ({
    username,
}: GithubGraphProps) => {
    const [totalCount, setTotalCount] = useState(0);
    const { resolvedTheme } = useTheme(); 

    const processContributions = useCallback((contributions: Activity[]) => {
        // Calculate total count after rendering
        setTimeout(() => {
            const total = contributions
                .map((el) => el.count)
                .reduce((acc, curr) => acc + curr, 0);

            setTotalCount(total);
        }, 0);

        return contributions;
    }, []);

    return (
        <div>
            <Container className="md:pb-12 pb-6 md:pt-6 pt-3 border-y-1 border-color-new dark:border-color-new shadow-inset-all dark:shadow-inset-all">
                <SideHeaders>GitHub Contributions</SideHeaders>

                <Link href={"https://github.com/Salman-in"} target="_blank" className="flex justify-center pt-8 w-full">
                    <div className="w-full flex justify-center">
                        <div className="transform scale-75 sm:scale-90 md:scale-100 origin-center">
                            <GitHubCalendar
                                username={username}
                                transformData={processContributions}
                                totalCount={totalCount}
                                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                            />
                        </div>
                    </div>
                </Link>
            </Container>
        </div>
    );
};

export default GithubGraph;