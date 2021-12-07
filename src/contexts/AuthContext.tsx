import { createContext, useState, useEffect } from "react"
import { useRouter } from "next/router"
import * as adminService from "../services/admin"
import { AdminI } from "../types/data"

interface AuthContextI {
    isAuthenticated: boolean
    admin: AdminI
}

const authRoutes = ["/", "/dashboard"]

export const AuthContext = createContext({} as AuthContextI)

export function AuthProvider({ children }: { children: React.ReactChild }) {
    const [admin, setAdmin] = useState<AdminI>({} as AdminI)
    const isAuthenticated = !!admin.id

    const router = useRouter()

    useEffect(() => {
        authRoutes.includes(router.asPath) && adminService.hasJWT() && !isAuthenticated ?
            adminService.auth()
                .then(adm => {
                    setAdmin(adm)
                    router.replace("/dashboard")
                })
                .catch(error => router.replace(`/?error=${error}`))
            : null
    }, [router, isAuthenticated])

    return (
        <AuthContext.Provider value={{ isAuthenticated, admin }}>
            {children}
        </AuthContext.Provider>
    )
}
