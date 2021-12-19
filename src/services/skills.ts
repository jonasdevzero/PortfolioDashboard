import { SkillI } from "../types/data"
import api from "./api"

export function getAll(): Promise<SkillI[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.get("/skill?type=*")
            resolve(data.skills)
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}

interface DataI {
    name: string
    type: string
    description: string
    icon_url: string
    more_link: string
}
export function create(data: DataI): Promise<SkillI> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.post("/skill", data)
            resolve(response.data.skill)
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}

export function update(id: string, data: DataI): Promise<SkillI> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.put(`/skill/${id}`, data)
            resolve(response.data.skill)
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}

export function deleteSkill(id: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            await api.delete(`/skill/${id}`)
            resolve()
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}
