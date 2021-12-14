import { useState } from "react"
import Router from "next/router"
import { ProjectI } from "../../../types/data"
import * as projectService from "../../../services/projects"

import {
    Container,
    Sidebar,
    Inner,
    Header,
    Error,
} from "../../../styles/components/Projects/EditProject"
import {
    Content,
    DeleteContainer,
} from "../../../styles/components/Projects/DeleteProject"
import { FiX } from "react-icons/fi"

interface DeleteProjectI {
    projects: ProjectI[]
    close(): void
}
export default function DeleteProject({ projects, close }: DeleteProjectI) {
    const [project, setProject] = useState<ProjectI>({} as ProjectI)
    const [error, setError] = useState<string>()

    function handleDelete() {
        setError(undefined)

        projectService.deleteProject(project.id)
            .then(() => Router.reload())
            .catch(error => setError(error))
    }

    return (
        <Container>
            <Sidebar>
                <h3>Projetos</h3>

                <div className="projects">
                    {projects?.map(p => (
                        <span key={p.id} onClick={() => setProject(p)}>{p.name}</span>
                    ))}
                </div>
            </Sidebar>

            <Inner>
                <Header>
                    <h2>Delete Project / {project.name}</h2>

                    <span onClick={() => close()}>
                        <FiX />
                    </span>
                </Header>

                <Content>
                    {project.name ? (
                        <DeleteContainer>
                            <h2>Deseja realmente deletar `{project.name}`?</h2>
                            <button type="button" onClick={() => handleDelete()}>Deletar</button>
                        </DeleteContainer>
                    ) : null}

                    {error ? (<Error>{error}</Error>) : null}
                </Content>
            </Inner>
        </Container>
    )
}
