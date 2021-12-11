import { useState } from "react"
import Router from "next/router"
import * as skillService from "../../../services/skills"
import { SkillI } from "../../../types/data"

import {
    Content,
    Options,
    Option,
    Form,
    BannerPreview,
    BasicData,
    InputWrapper,
    Label,
    Input,
    Textarea,
    RowWrapper,
    Error,
} from "../../../styles/components/Projects/CreateProject"
import {
    Container,
    Sidebar,
    Inner,
    Header,
} from "../../../styles/components/Projects/EditProject"
import { FiX } from "react-icons/fi"

interface EditSkillI {
    skills: SkillI[]
    close(): void
}
export default function EditSkill({ skills, close }: EditSkillI) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [icon_url, setIconUrl] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [more_link, setMoreLink] = useState("")

    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)

    function selectSkill(s: SkillI) {
        setId(s.id)
        setName(s.name)
        setIconUrl(s.icon_url)
        setDescription(s.description)
        setType(s.type)
        setMoreLink(s.more_link)
    }

    function handleEdit() {
        if (loading) return;
        setLoading(true)

        setError(undefined)
        skillService.update(id, {
            name,
            icon_url,
            description,
            type,
            more_link,
        })
            .then(() => Router.reload())
            .catch(error => setError(error))
            .then(() => setLoading(false))
    }

    return (
        <Container>
            <Sidebar>
                <h3>Skills</h3>

                <div className="skills">
                    {skills?.map(s => (
                        <span key={s.id} onClick={() => selectSkill(s)}>{s.name}</span>
                    ))}
                </div>
            </Sidebar>

            <Inner>
                <Header>
                    <h2>Editar skill /</h2>

                    <span onClick={() => close()}>
                        <FiX />
                    </span>
                </Header>

                <Content>
                    {name.length ? (
                        <>
                            <Options>
                                <Option onClick={() => handleEdit()}>Edit skill</Option>
                                <Option onClick={() => close()}>Cancel</Option>
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
                        </>
                    ) : null}
                </Content>
            </Inner>
        </Container>
    )
} 
