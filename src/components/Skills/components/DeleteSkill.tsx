import { useState } from "react"
import Router from "next/router"
import * as skillService from "../../../services/skills"
import { SkillI } from "../../../types/data"

import {
    Content,
    DeleteContainer,
} from "../../../styles/components/Projects/DeleteProject"
import {
    Container,
    Sidebar,
    Inner,
    Header,
    Error,
} from "../../../styles/components/Projects/EditProject"
import { FiX } from "react-icons/fi"


interface DeleteSkillI {
    skills: SkillI[]
    close(): void
}
export default function DeleteSkill({ skills, close }: DeleteSkillI) {
    const [skill, setSkill] = useState<SkillI>({} as SkillI)

    const [error, setError] = useState<string>()

    function handleDelete() {
        setError(undefined)
        skillService.deleteSkill(skill.id)
            .then(() => Router.reload())
            .catch(error => setError(error))
    }

    return (
        <Container>
            <Sidebar>
                <h3>Skills</h3>

                <div className="skills">
                    {skills?.map(s => (
                        <span key={s.id} onClick={() => setSkill(s)}>{s.name}</span>
                    ))}
                </div>
            </Sidebar>

            <Inner>
                <Header>
                    <h2>Delete skill /</h2>

                    <span onClick={() => close()}>
                        <FiX />
                    </span>
                </Header>

                <Content>
                    {skill.name ? (
                        <DeleteContainer>
                            <h2>Deseja realmente deletar `{skill.name}`?</h2>
                            <button type="button" onClick={() => handleDelete()}>Deletar</button>
                        </DeleteContainer>
                    ) : null}

                    {error ? (<Error>{error}</Error>) : null}
                </Content>
            </Inner>
        </Container>
    )
} 
