import { MessageI } from "../types/data"
import api from "./api"

export function getAll(): Promise<MessageI[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.get("/message")
            resolve(data.messages)
        } catch (error) {
            reject(error)
        }
    })
}

export function toggleView(id: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            await api.patch(`/message/${id}`)
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}