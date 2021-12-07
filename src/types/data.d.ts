export interface AdminI {
    id: string
    username: string
    role: string
}

export interface ProjectI {
    id: string
    name: string
    banner_url: string
    description: string
    html: string
    repository_link: string
    website_link: string
    video_demo: string
    images: Array<{
        id: string
        url: string
    }>
}

export interface SkillI {
    id: string
    name: string
    type: string
    description: string
    icon_url: string
    more_link: string
}

export interface MessageI {
    id: string
    email: string
    text: string
    sent_at: string
    viewed: string
}
