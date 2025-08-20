import { APIClient } from "./apiClient";
import { APIProject } from "./types/project";

export class CompetitionResults {
    private apiClient: APIClient;

    constructor (
        tag: string
    ) {
        this.apiClient = new APIClient(tag);
    }

    page(page: number) {
        return this.apiClient.fetchPage(page);
    }

    all() {
        const client = this.apiClient;

        async function crawlRecursive(page: number = 1, acc: APIProject[] = []): Promise<APIProject[]> {
            const projects = await client.fetchPage(page);
            return projects.length ? crawlRecursive(page + 1, acc.concat(projects)) : acc
        }

        return crawlRecursive();
    }
}