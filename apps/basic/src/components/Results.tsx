import type { APIProject } from "@/packages/hs-competition-results/dist/src";
import "./Results.scss";
import { Submissions } from "./stats/Submissions";
import { Users } from "./stats/Users";
import { SubmissionChart } from "./stats/SubmissionChart";

interface Props {
    results: APIProject[],
    tag: string
}

export function Results({ results, tag }: Props) {
    const publishDates = results.map(r => r.correct_published_at).filter(d => !!d);
    const firstPublish = publishDates.reduce(function (a, b) { return a < b ? a : b; });
    const lastPublish = publishDates.reduce(function (a, b) { return a > b ? a : b; });

    const uniqueUsers = [...new Set(results.map(r => r.user_id))].length;

    return (
        <div>
            <h1>#{tag.toUpperCase()}</h1>
            <div className="stat-collection">
                <Submissions total={results.length} first={firstPublish} last={lastPublish} />
                <Users total={uniqueUsers} />
                <SubmissionChart dates={publishDates} first={firstPublish} last={lastPublish} />
            </div>
        </div>
    )
}