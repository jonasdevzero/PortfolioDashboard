import { useState, useEffect } from "react"
import * as skillService from "../../services/skills"
import { SkillI } from "../../types/data"

import CreateSkill from "./components/CreateSkill"
import EditSkill from "./components/EditSkill"
import DeleteSkill from "./components/DeleteSkill"
import {
    SkillsContainer,
    SkillContainer,
    SkillBanner,
    SkillContent,
} from "../../styles/components/Skills"
import {
    Container,
    Optionsbar,
    Option,
} from "../../styles/components/Projects"
import {
    FiPlus,
    FiEdit2,
    FiTrash2,
} from "react-icons/fi"

interface SkillsI {
    skills: SkillI[]
    setSkills: React.Dispatch<React.SetStateAction<SkillI[]>>
}
export default function Skills({ skills, setSkills }: SkillsI) {
    const [option, setOption] = useState<"create" | "update" | "delete">()
    const close = () => setOption(undefined)

    useEffect(() => {
        !skills.length ?
            skillService.getAll()
                .then(s => setSkills(s))
            : null
    }, [skills.length, setSkills])

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
            
            <SkillsContainer>
                {skills.map(s => (
                    <SkillContainer key={s.id}>
                        <SkillBanner src={s.icon_url} />

                        <SkillContent>
                            <h4>{s.name}</h4>
                            <p>{s.description}</p>
                        </SkillContent>
                    </SkillContainer>
                ))}
            </SkillsContainer>

            {function () {
                switch (option) {
                    case "create":
                        return <CreateSkill close={close} />
                    case "update":
                        return <EditSkill skills={skills} close={close} />
                    case "delete":
                        return <DeleteSkill skills={skills} close={close} />
                }
            }()}
        </Container>
    )
}
