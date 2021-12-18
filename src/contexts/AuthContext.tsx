import { createContext, useState, useEffect } from "react"
import { useRouter } from "next/router"
import * as adminService from "../services/admin"
import { AdminI } from "../types/data"

interface AuthContextI {
    isAuthenticated: boolean
    admin: AdminI
}

export const AuthContext = createContext({} as AuthContextI)

export function AuthProvider({ children }: { children: React.ReactChild }) {
    const [admin, setAdmin] = useState<AdminI>({} as AdminI)
    const isAuthenticated = !!admin.id

    const router = useRouter()

    useEffect(() => {
        router.asPath.startsWith("/dashboard") && !isAuthenticated ?
            adminService.auth()
                .then(adm => setAdmin(adm))
                .catch(error => router.replace(`/?error=${error}`))
            : null

        router.asPath === "/" && adminService.hasJWT() ? router.replace("/dashboard") : null
    }, [router, isAuthenticated])

    return (
        <AuthContext.Provider value={{ isAuthenticated, admin }}>
            {children}
        </AuthContext.Provider>
    )
}
