import { APIUser } from "./user"

export interface APIProjectBase {
    uuid: string,
    author: string,
    filename: string,
    number_of_stars: number,
    play_count: number,
    plants: number,
    project_remixes_count: number,
    published_remixes_count: number,
    text_object_label: string | null,
    title: string,
    screenshot_url: string,
    has_been_removed: boolean,
    in_moderation: boolean,
    user: APIUser
    user_id: number,
    original_user: APIUser,
    planted: boolean,
    starred: boolean
}

export interface PrimitiveAPIProject extends APIProjectBase {
    deleted_at: string | null,
    edited_at: string | null,
    published_at: string | null,
    correct_published_at: string | null,
}

export interface APIProject extends APIProjectBase {
    deleted_at: Date | null,
    edited_at: Date | null,
    published_at: Date | null,
    correct_published_at: Date | null,
}