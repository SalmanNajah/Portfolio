import { NextResponse } from "next/server";

export const revalidate = 43200; // 12 hours

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const query = `
  query {
    search(query: "is:pr author:SalmanNajah is:merged", type: ISSUE, first: 50) {
      nodes {
        ... on PullRequest {
          id
          title
          url
          number
          repository {
            nameWithOwner
          }
        }
      }
    }
  }
`;

type PRNode = {
  id: string;
  title: string;
  url: string;
  number: number;
  repository: {
    nameWithOwner: string;
  };
};

type GitHubResponse = {
  data: {
    search: {
      nodes: PRNode[];
    };
  };
};

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("GITHUB_TOKEN is not set");
    return NextResponse.json({ pullRequests: [] });
  }

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      return NextResponse.json({ pullRequests: [] });
    }

    const json: GitHubResponse = await response.json();

    const pullRequests = (json.data?.search?.nodes ?? []).map((pr) => ({
      id: pr.id,
      title: pr.title,
      url: pr.url,
      repo: pr.repository.nameWithOwner,
      number: pr.number,
    }));

    return NextResponse.json({ pullRequests });
  } catch (error) {
    console.error("Failed to fetch GitHub pull requests:", error);
    return NextResponse.json({ pullRequests: [] });
  }
}
