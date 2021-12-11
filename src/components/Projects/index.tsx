import { useState, useEffect } from "react"
import { ProjectI } from "../../types/data"
import * as projectsServices from "../../services/projects"

import CreateProject from "./components/CreateProject"
import EditProject from "./components/EditProject"
import DeleteProject from "./components/DeleteProject"
import {
    Container,
    Optionsbar,
    Option,
    Project,
    ProjectBanner,
    ProjectInfo,
    ProjectName,
    ProjectLinks,
    ProjectLink,
    ProjectDescription,
} from "../../styles/components/Projects"
import {
    FiPlus,
    FiEdit2,
    FiTrash2,
} from "react-icons/fi"

interface ProjectsI {
    projects: ProjectI[]
    setProjects: React.Dispatch<React.SetStateAction<ProjectI[]>>
}
export default function Projects({ projects, setProjects }: ProjectsI) {
    const [option, setOption] = useState<"create" | "update" | "delete">()
    const close = () => setOption(undefined)

    useEffect(() => {
        !projects.length ? projectsServices.getAll().then(p => setProjects(p)) : null
    }, [])


    return (
        <Container>
            <Optionsbar>
                <Option className="create" onClick={() => setOption("create")}>
                    <FiPlus />
                </Option>

                <Option className="update" onClick={() => setOption("update")}>
                    <FiEdit2 />
                </Option>

                <Option className="delete" onClick={() => setOption("delete")}>
                    <FiTrash2 />
                </Option>
            </Optionsbar>

            {projects?.map(p => (
                <Project key={p.id}>
                    <ProjectBanner url={p.banner_url} />

                    <ProjectInfo>
                        <ProjectName>
                            {p.name}
                        </ProjectName>
                        
                        <ProjectLinks>
                            <ProjectLink href={p.repository_link} rel="noopener noreferrer external nofollow" target="_blank">
                                Repositório
                            </ProjectLink>

                            <ProjectLink href={p.website_link} rel="noopener noreferrer external nofollow" target="_blank">
                                Website
                            </ProjectLink>
                        </ProjectLinks>

                        <ProjectDescription>
                            {p.description}
                        </ProjectDescription>
                    </ProjectInfo>
                </Project>
            ))}

            {function() {
                switch(option) {
                    case "create":
                        return <CreateProject close={close} />
                    case "update":
                        return <EditProject projects={projects} close={close} />
                    case "delete":
                        return <DeleteProject projects={projects} close={close} />
                }
            }()}
        </Container>
    )
}