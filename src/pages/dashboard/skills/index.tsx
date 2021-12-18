import type { NextPage } from "next"
import Link from "next/link"
import { useSelector } from "../../../hooks/useData"
import { SkillI } from "../../../types/data"
import { constant } from "../../../constant"

import Header from "../../../components/Header"

import {
    Container,
    Content,
    OptionsBar,
    Option,
    SkillsContainer,
    Skill,
    SkillBanner,
    SkillContent,
} from "../../../styles/pages/dashboard/skills"
import {
    FiPlus,
    FiEdit2,
    FiTrash2,
} from "react-icons/fi"

const Skills: NextPage = () => {
    const skills: SkillI[] = useSelector(state => state.skills)

    return (
        <Container>
            <Header />

            <Content>
                <OptionsBar>
                    <Link href={constant.routes.DASHBOARD.SKILLS.CREATE} passHref>
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

                <SkillsContainer>
                    {skills?.map(s => (
                        <Skill key={s.id}>
                            <SkillBanner src={s.icon_url} />

                            <SkillContent>
                                <h4>{s.name}</h4>
                                <p>{s.description}</p>
                            </SkillContent>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Content>
        </Container>
    )
}

export default Skills
