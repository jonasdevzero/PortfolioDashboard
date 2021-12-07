import { MessageI } from "../types/data"
import api from "./api"

export async function getAll(): Promise<MessageI[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.get("/skill")
            resolve(data.messages)
        } catch (error) {
            reject(error)
        }
    })
}
