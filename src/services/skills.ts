import { SkillI } from "../types/data"
import api from "./api"

export async function getAll(): Promise<SkillI[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.get("/skill")
            resolve(data.skills)
        } catch (error) {
            reject(error)
        }
    })
}
