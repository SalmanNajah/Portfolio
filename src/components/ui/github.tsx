"use client";
import { useCallback, useEffect, useState } from "react";

import { Activity, ActivityCalendar } from "react-activity-calendar";
import Container from "../container";
import SideHeaders from "../sideheaders";
import Link from "next/link";
import { useTheme } from "next-themes";

type GithubGraphProps = {
    username: string;
    blockMargin?: number;
    colorPallete?: string[];
};

const GithubGraph = ({
    username,
    blockMargin,
}: GithubGraphProps) => {
    const [contribution, setContribution] = useState<Activity[]>([]);
    const [loading, setIsLoading] = useState<boolean>(true);
    const { resolvedTheme } = useTheme(); 

    const fetchData = useCallback(async () => {
        try {
            const contributions = await fetchContributionData(username);
            setContribution(contributions);
            console.log("COntri", contributions)
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw Error(`Error fetching contribution data: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    }, [username]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const label = {
        totalCount: `{{count}} contributions in the last year`,
    };

    return (
        <div>
            <Container className="md:pb-18 pb-6 md:pt-6 pt-3 border-b-1 border-neutral-200 dark:border-neutral-700">
                <SideHeaders>GitHub Contributions</SideHeaders>

                <Link href={"https://github.com/Salman-in"} target="_blank" className="flex justify-center pt-8">
                    <ActivityCalendar
                        data={contribution}
                        maxLevel={4}
                        blockMargin={blockMargin ?? 2}
                        loading={loading}
                        labels={label}
                        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                        theme={{
                            light: [
                                "#ffffff", "#d9d9d9", "#b3b3b3", "#808080", "#404040"
                            ],
                            dark: [
                                "#000000", "#2c2c2c", "#595959", "#a6a6a6", "#e0e0e0"
                            ],
                        }}
                    />
                </Link>
            </Container>
        </div>
    );
};

export default GithubGraph;

async function fetchContributionData(username: string): Promise<Activity[]> {
    const response = await fetch(`https://github.vineet.pro/api/${username}`);
    const responseBody = await response.json();

    if (!response.ok) {
        throw Error("Erroring fetching contribution data");
    }
    return responseBody.data;
}

// SSR is disabled for this component because of the hydration issue with the ActivityCalendar component.
// SSR Enabled solution is there in Urgent Bookmark(chrome) - implement that later if needed(By creating a server component for the graph and passing the data as props to the client component).