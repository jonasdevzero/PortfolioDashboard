import { useState } from "react"
import type { NextPage } from "next"
import Router from "next/router"
import Link from "next/link"
import { useDispatch, useSelector } from "../../../hooks/useData"
import * as skillService from "../../../services/skills"
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
    Overlay,
    SkillOptions,
    SkillOption,
    DeleteWindow,
} from "../../../styles/pages/Skills"
import {
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiX,
} from "react-icons/fi"

const Skills: NextPage = () => {
    const skills: SkillI[] = useSelector(state => state.skills)

    const [skillOption, setSkillOption] = useState<"edit" | "delete">()
    const [deleteSkill, setDeleteSkill] = useState<SkillI>()

    const dispatch = useDispatch()

    const editSkill = (id: string) => Router.push(constant.routes.DASHBOARD.SKILLS.EDIT(id))
    const deleteSkillFn = (id: string) => skillService.deleteSkill(id).then(() => {
        setDeleteSkill(undefined)
        dispatch({ type: constant.actions.REMOVE_SKILL, whereId: id })
    })

    function onClickSkillOption(s: SkillI) {
        setSkillOption(undefined)
        skillOption === "edit" ? editSkill(s.id) : setDeleteSkill(s)
    }

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

                    <Option className="edit" onClick={() => setSkillOption("edit")}>
                        <FiEdit2 />
                    </Option>

                    <Option className="delete" onClick={() => setSkillOption("delete")}>
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

                {skillOption ? (
                    <>
                        <Overlay onClick={() => setSkillOption(undefined)} />
                        <SkillOptions>
                            <header>
                                <h3>Select one for {skillOption}</h3> 
                                
                                <span onClick={() => setSkillOption(undefined)}>
                                    <FiX />
                                </span>
                            </header>

                            {skills?.map(s => (
                                <SkillOption key={s.id} onClick={() => onClickSkillOption(s)}>
                                    <img src={s.icon_url} alt="" />
                                    <h4>{s.name}</h4>
                                </SkillOption>
                            ))}
                        </SkillOptions>
                    </>
                ) : null}

                {deleteSkill ? (
                    <>
                        <Overlay onClick={() => setDeleteSkill(undefined)} />
                        <DeleteWindow>
                            <strong>Deseja realmente deletar `{deleteSkill.name}`?</strong>

                            <div className="row">
                                <button className="confirm" type="button" onClick={() => deleteSkillFn(deleteSkill.id)}>Sim</button>
                                <button className="cancel" type="button" onClick={() => setDeleteSkill(undefined)}>Não</button>
                            </div>
                        </DeleteWindow>
                    </>
                ) : null}
            </Content>
        </Container>
    )
}

export default Skills
