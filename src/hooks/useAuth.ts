import { useContext } from "react"
import { NextPageContext } from "next"
import { parseCookies } from "nookies"
import { AuthContext } from "../contexts/AuthContext"

export function useAuth() {
    return useContext(AuthContext)
}

export async function authPage(ctx: NextPageContext) {
    const { ["portfolio.dashboard.jwt"]: jwt } = parseCookies(ctx)

    if (!jwt) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}