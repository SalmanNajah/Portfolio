"use client";
import { useCallback, useEffect, useState } from "react";

import { Activity, ActivityCalendar } from "react-activity-calendar";
import Container from "../container";
import SideHeaders from "../sideheaders";
import Link from "next/link";

type GithubGraphProps = {
    username: string;
    blockMargin?: number;
    colorPallete?: string[];
};

export const GithubGraph = ({
    username,
    blockMargin,
    colorPallete,
}: GithubGraphProps) => {
    const [contribution, setContribution] = useState<Activity[]>([]);
    const [loading, setIsLoading] = useState<boolean>(true);

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
            <Container className="md:pb-18 pb-6 md:pt-6 pt-3">
                <SideHeaders>GitHub Contributions</SideHeaders>
                
                <Link href={"https://github.com/Salman-in"} target="_blank" className="flex justify-center pt-8">
                    <ActivityCalendar
                        data={contribution}
                        maxLevel={4}
                        blockMargin={blockMargin ?? 2}
                        loading={loading}
                        labels={label}
                        theme={{
                            dark: colorPallete ?? [
                                "#ebedf0",
                                "#9be9a8",
                                "#40c463",
                                "#30a14e",
                                "#216e39",
                            ],
                        }}
                    />
                </Link>
            </Container>
        </div>
    );
};

async function fetchContributionData(username: string): Promise<Activity[]> {
    const response = await fetch(`https://github.vineet.pro/api/${username}`);
    const responseBody = await response.json();

    if (!response.ok) {
        throw Error("Erroring fetching contribution data");
    }
    return responseBody.data;
}