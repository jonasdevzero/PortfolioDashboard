import { useState } from "react"
import type { NextPage } from "next"
import Link from "next/link"
import Router from "next/router"
import { constant } from "../../../constant"
import { useDispatch, useSelector } from "../../../hooks/useData"
import { ProjectI } from "../../../types/data"
import * as projectService from "../../../services/projects"

import Header from "../../../components/Header"

import ProjectCard from "../../../components/Project/Card"
import {
    Container,
    Content,
    OptionsBar,
    Option,
    Overlay,
    ProjectOptions,
    ProjectOption,
    DeleteWindow,
} from "../../../styles/pages/Projects"
import {
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiX,
} from "react-icons/fi"

const Projects: NextPage = () => {
    const projects: ProjectI[] = useSelector(state => state.projects)

    const [projectOption, setProjectOption] = useState<"edit" | "delete">()
    const [deleteProject, setDeleteProject] = useState<ProjectI>()

    const dispatch = useDispatch()

    const editProject = (id: string) => Router.push(constant.routes.DASHBOARD.PROJECTS.EDIT(id))
    const deleteProjectFn = (id: string) => projectService.deleteProject(id).then(() => {
        setDeleteProject(undefined)
        dispatch({ type: constant.actions.REMOVE_PROJECT, whereId: id })
    })

    function onClickProjectOption(p: ProjectI) {
        setProjectOption(undefined)
        projectOption === "edit" ? editProject(p.id) : setDeleteProject(p)
    }

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

                    <Option className="edit" onClick={() => setProjectOption("edit")}>
                        <FiEdit2 />
                    </Option>

                    <Option className="delete" onClick={() => setProjectOption("delete")}>
                        <FiTrash2 />
                    </Option>
                </OptionsBar>

                {projects?.map(p => <ProjectCard key={p.id} project={p} />)}

                {projectOption ? (
                    <>
                        <Overlay onClick={() => setProjectOption(undefined)} />
                        <ProjectOptions>
                            <header>
                                <h3>Select one for {projectOption}</h3>

                                <span onClick={() => setProjectOption(undefined)}>
                                    <FiX />
                                </span>
                            </header>

                            {projects?.map(p => (
                                <ProjectOption key={p.id} onClick={() => onClickProjectOption(p)}>
                                    <img src={p.banner_url} alt="" />
                                    <h4>{p.name}</h4>
                                </ProjectOption>
                            ))}
                        </ProjectOptions>
                    </>
                ) : null}

                {deleteProject ? (
                    <>
                        <Overlay onClick={() => setDeleteProject(undefined)} />
                        <DeleteWindow>
                            <strong>Deseja realmente deletar `{deleteProject.name}`?</strong>

                            <div className="row">
                                <button className="confirm" type="button" onClick={() => deleteProjectFn(deleteProject.id)}>Sim</button>
                                <button className="cancel" type="button" onClick={() => setDeleteProject(undefined)}>Não</button>
                            </div>
                        </DeleteWindow>
                    </>
                ) : null}
            </Content>
        </Container>
    )
}

export default Projects 
