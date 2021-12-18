import type { NextPage } from "next"
import Link from "next/link"
import { constant } from "../../../constant"
import { useSelector } from "../../../hooks/useData"
import { ProjectI } from "../../../types/data"

import Header from "../../../components/Header"

import ProjectCard from "../../../components/Project/Card"
import {
    Container,
    Content,
    OptionsBar,
    Option,
} from "../../../styles/pages/dashboard/Projects"
import {
    FiPlus,
    FiEdit2,
    FiTrash2,
} from "react-icons/fi"

const Projects: NextPage = () => {
    const projects: ProjectI[] = useSelector(state => state.projects)

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
