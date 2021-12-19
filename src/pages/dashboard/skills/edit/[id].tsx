import { useState, useEffect } from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "../../../../hooks/useData"
import { SkillI } from "../../../../types/data"
import * as skillService from "../../../../services/skills"

import Header from "../../../../components/Header"
import {
    Container,
    Content,
    Options,
    Option,
    Form,
    BannerPreview,
    BasicData,
    InputWrapper,
    Label,
    Input,
    RowWrapper,
    Textarea,
    Error,
} from "../../../../styles/utils/ProjectForm"
import { constant } from "../../../../constant"

const EditSkill: NextPage = () => {
    const skills: SkillI[] = useSelector(state => state.skills)
    
    const [name, setName] = useState("")
    const [icon_url, setIconUrl] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [more_link, setMoreLink] = useState("")

    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        if (skills && router.query.id) {
            const s = skills.find(s => s?.id === router.query.id)

            if (s) {
                setName(s.name)
                setIconUrl(s.icon_url)
                setDescription(s.description)
                setType(s.type)
                setMoreLink(s.more_link)
            } else router.replace(constant.routes.DASHBOARD.SKILLS.HOME);
        }
    }, [router, skills])

    function handleEdit() {
        if (loading) return;
        setLoading(true)
        setError(undefined)

        const id = router.query.id as string
        skillService.update(id, {
            name,
            icon_url,
            description,
            type,
            more_link,
        })
            .then(skill => {
                dispatch({ type: constant.actions.UPDATE_SKILL, whereId: id, data: { skill } })
                router.push(constant.routes.DASHBOARD.SKILLS.HOME)
            })
            .catch(error => setError(error))
            .then(() => setLoading(false))
    }


    return (
        <Container>
            <Header />

            <Content>
                <Options>
                    <Option className="create" onClick={() => handleEdit()}>Edit skill</Option>
                    <Option className="cancel" onClick={() => router.push(constant.routes.DASHBOARD.SKILLS.HOME)}>Cancel</Option>
                </Options>

                <Form>
                    <div className="row">
                        <div className="column">
                            <BannerPreview url={icon_url} />

                            <InputWrapper>
                                <Label htmlFor="icon_url">Icon Url: </Label>
                                <Input id="icon_url" name="icon_url" type="text" value={icon_url} onChange={e => setIconUrl(e.target.value)} />
                            </InputWrapper>
                        </div>

                        <BasicData>
                            <InputWrapper>
                                <Label htmlFor="name">Name: </Label>
                                <Input id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                            </InputWrapper>

                            <InputWrapper>
                                <Label htmlFor="description">Description: </Label>
                                <Textarea id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                            </InputWrapper>

                            <RowWrapper>
                                <InputWrapper>
                                    <Label htmlFor="type">Type: </Label>
                                    <Input id="type" name="type" value={type} onChange={e => setType(e.target.value)} />
                                </InputWrapper>

                                <InputWrapper>
                                    <Label htmlFor="more_link">More Link: </Label>
                                    <Input id="more_link" name="more_link" value={more_link} onChange={e => setMoreLink(e.target.value)} />
                                </InputWrapper>
                            </RowWrapper>
                        </BasicData>
                    </div>
                </Form>

                {error ? (<Error>{error}</Error>) : null}
            </Content>
        </Container>
    )
}

export default EditSkill
