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
