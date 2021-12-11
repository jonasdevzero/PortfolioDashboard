import { useState } from "react"
import Router from "next/router"
import * as skillService from "../../../services/skills"

import {
    Container,
    Header,
    Title,
    CloseButton,
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
import { FiX } from "react-icons/fi"

interface CreateSkillI {
    close(): void
}
export default function CreateSkill({ close }: CreateSkillI) {
    const [name, setName] = useState("")
    const [icon_url, setIconUrl] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [more_link, setMoreLink] = useState("")

    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)

    function handleCreate() {
        if (loading) return;
		setLoading(true)

        setError(undefined)
        skillService.create({
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
            <Header>
                <Title>Create Skill</Title>

                <CloseButton onClick={() => close()}>
                    <FiX />
                </CloseButton>
            </Header>

            <Content>
                <Options>
                    <Option onClick={() => handleCreate()}>Create skill</Option>
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
            </Content>
        </Container>
    )
} 
