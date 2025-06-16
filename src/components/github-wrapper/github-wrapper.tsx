"use client";
import dynamic from "next/dynamic";
const GithubGraph = dynamic(() => import("@/components/ui/github"), {
  ssr: false,
});
// SSR is disabled for this component because of the hydration issue with the ActivityCalendar component.
// SSR Enabled solution is there in Urgent Bookmark(chrome) - implement that later if needed(By creating a server component for the graph and passing the data as props to the client component).

export default function GithubWrapper() {
  return (
    <div>
      <GithubGraph username="Salman-in" blockMargin={2} />
    </div>
  );
}


//For github graph color pallete
// colorPallete={["#000000", "#2c2c2c", "#595959", "#a6a6a6", "#e0e0e0"]} looks good in dark mode
// colorPallete={["#ffffff", "#d9d9d9", "#b3b3b3", "#808080", "#404040"]} //looks good in light mode