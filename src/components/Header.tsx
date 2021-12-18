import Link from "next/link"
import { constant } from "../constant"

import {
    Container,
    StyledLink,
} from "../styles/components/Header"

export default function Header() {
    return (
        <Container>
            <h3>Dashboard</h3>

            <Link href={constant.routes.DASHBOARD.PROJECTS.HOME} passHref>
                <StyledLink>Projects</StyledLink>
            </Link>

            <Link href={constant.routes.DASHBOARD.SKILLS.HOME} passHref>
                <StyledLink>Skills</StyledLink>
            </Link>

            <Link href={constant.routes.DASHBOARD.MESSAGES} passHref>
                <StyledLink>Messages</StyledLink>
            </Link>
        </Container>
    )
}
