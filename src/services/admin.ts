import { setCookie, parseCookies, destroyCookie } from "nookies"
import { AdminI } from "../types/Admin"
import api from "./api"

interface LoginI {
    username: string
    password: string
    keepConnected: boolean
}
export async function login({ username, password, keepConnected }: LoginI): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.post("/admin/login", { username, password })
            const jwt = `Bearer ${data.token}`

            api.defaults.headers.common["Authorization"] = jwt
            setCookie(null, "portfolio.dashboard.jwt", jwt, {
                path: "/",
                maxAge: keepConnected ? 60 * 60 * 24 : undefined // 1 Day
            })

            resolve()
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}

export async function auth(): Promise<AdminI> {
    return new Promise(async (resolve, reject) => {
        try {
            const { ["portfolio.dashboard.jwt"]: jwt } = parseCookies(undefined)

            const { data } = await api.post("/admin/auth", {}, { headers: { Authorization: jwt } })
            
            api.defaults.headers.common["Authorization"] = jwt

            resolve(data.admin)
        } catch (error: any) {
            destroyCookie(undefined, "portfolio.dashboard.jwt")
            reject(error.response?.data.message)
        }
    })
}

interface SignupI {
    username: string
    email: string 
    password: string
    confirm_password: string
    system_password: string
    super_admin: boolean
}
export async function signup(data: SignupI): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.post("/admin", data)
            const jwt = `Bearer ${response.data.token}`

            api.defaults.headers.common["Authorization"] = jwt
            setCookie(null, "portfolio.dashboard.jwt", jwt, { 
                path: "/",
                maxAge: 60 * 60 * 24 // 1 Day
            })

            resolve()
        } catch (error: any) {
            reject(error.response?.data.message)
        }
    })
}

export function hasJWT() {
    const { ["portfolio.dashboard.jwt"]: jwt } = parseCookies(undefined)
    return !!jwt
}