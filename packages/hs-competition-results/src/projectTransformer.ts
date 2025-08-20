import { APIProject, PrimitiveAPIProject } from "./types/project";

type DateFields = {
    [K in keyof PrimitiveAPIProject]: PrimitiveAPIProject[K] extends (string | null) ?
    (APIProject[K] extends (Date | null) ? K : never)
    : never
}[keyof PrimitiveAPIProject];

export function parsePrimitiveAPIProject(project: PrimitiveAPIProject): APIProject {
    const DATE_FIELDS: DateFields[] = ["deleted_at", "edited_at", "published_at", "correct_published_at"];

    const dateOverrides: Record<DateFields, (Date | null)> = DATE_FIELDS.reduce((acc, key) => {
        acc[key] = project[key] ? new Date(project[key]) : null;
        return acc;
    }, {} as Record<DateFields, (Date | null)>);

    return { ...project, ...dateOverrides };
}