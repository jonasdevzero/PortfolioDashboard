import { useEffect, useState } from "react"
import type { NextPage } from "next"
import Link from "next/link"
import * as projectService from "../../../services/projects"
import { constant } from "../../../constant"
import { ProjectI } from "../../../types/data"

import Header from "../../../components/Header"

import ProjectCard from "../../../components/Project/Card"
import {
    Container,
    Content,
    OptionsBar,
    Option,
} from "../../../styles/pages/dashboard/projects"
import {
    FiPlus,
    FiEdit2,
    FiTrash2,
} from "react-icons/fi"

const Projects: NextPage = () => {
    const [projects, setProjects] = useState<ProjectI[]>()

    useEffect(() => {
        projectService.getAll().then(p => setProjects(p))
    }, [])

    return (
        <Container>
            <Header />

            <Content>
                <OptionsBar>
                    <Link href={constant.routes.DASHBOARD.PROJECTS.CREATE} passHref>
                        <Option className="create">
                            <FiPlus />
                        </Option>
                    </Link>

                    <Option className="edit">
                        <FiEdit2 />
                    </Option>

                    <Option className="delete">
                        <FiTrash2 />
                    </Option>
                </OptionsBar>

                {projects?.map(p => <ProjectCard key={p.id} project={p} />)}
            </Content>
        </Container>
    )
}

export default Projects 
