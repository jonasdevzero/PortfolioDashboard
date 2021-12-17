import Router from "next/router"
import { constant } from "../constant"

import {
    Container,
    Title,
    Row,
    Options,
    Option,
} from "../styles/components/Sidebar"

export default function Sidebar() {
    return (
        <Container>
            <Title>Dev[0]</Title>

            <Row />

            <Options>
                <Option onClick={() => Router.push(constant.routes.DASHBOARD.PROJECTS.HOME)}>Projects</Option>
                <Option onClick={() => Router.push(constant.routes.DASHBOARD.SKILLS.HOME)}>Skills</Option>
                <Option onClick={() => Router.push(constant.routes.DASHBOARD.MESSAGES)}>Messages</Option>
            </Options>
        </Container>
    )
}
