import { parsePrimitiveAPIProject } from "./projectTransformer";
import { PrimitiveAPIProject } from "./types/project";

export class APIClient {
    constructor (
        private tag: string
    ) { }

    async fetchPage(page: number) {
        if (page < 1) throw Error('Page number must be >= 1')

        const params = new URLSearchParams({ page: page.toString() });

        return await fetch(
            `https://corsproxy.io/?url=https://community.gethopscotch.com/api/v2/categories/${this.tag}/featured?${params.toString()}`
        ).then(async res => {
            if (!res.ok) throw Error('API returned non-ok response');

            const primitiveProjects = await res.json().then((x: any) => x.projects) as PrimitiveAPIProject[];
            const projects = primitiveProjects.map(p => parsePrimitiveAPIProject(p));

            return projects;
        })
    }
}