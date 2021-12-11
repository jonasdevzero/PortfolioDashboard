import api from "./api"
import { ProjectI } from "../types/data"

export async function getAll(): Promise<ProjectI[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.get("/project")
            resolve(data.projects)
        } catch (error) {
            reject(error)
        }
    })
}

interface CreateProjectI {
    name: string
    banner_url: string
    description: string
    html: string
    repository_link: string
    website_link: string
    video_demo: string
    images: Array<{ url: string }>
}
export async function create(data: CreateProjectI): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            await api.post("/project", data)
            resolve()
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}

interface UpdateProjectI {
    name: string
    banner_url: string
    description: string
    html: string
    repository_link: string
    website_link: string
    video_demo: string
    remove_images: Array<{ id: string }>
    new_images: Array<{ url: string }>
}
export function update(id: string, data: UpdateProjectI): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            await api.put(`/project/${id}`, data)
            resolve()
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}

export function deleteProject(id: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            await api.delete(`/project/${id}`)
            resolve()
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}