import { APIBadgeObject } from "./badges";

export interface APIUser {
    id: number,
    avatar_type: number,
    created_at: string,
    iphone_user: boolean,
    nickname: string,
    badges: APIBadgeObject,
    projects_count: number
}