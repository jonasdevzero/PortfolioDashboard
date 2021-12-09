import { useState } from "react"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"

import {
    Container,
    Header,
    Title,
    CloseButton,
    Content,
    Form,
    BannerPreview,
    BasicData,
    InputWrapper,
    Label,
    Input,
    RowWrapper,
    TextEditorContainer,
    Textarea,
} from "../../../styles/components/Projects/CreateProject"
import { FiX } from "react-icons/fi"

interface CreateProjectI {
    close(): void
}
export default function CreateProject({ close }: CreateProjectI) {
    const [editorState, setEditorState] = useState<EditorState>()

    function onEditorStateChange(e: EditorState) {

    }

    return (
        <Container>
            <Header>
                <Title>Create Project</Title>

                <CloseButton onClick={() => close()}>
                    <FiX />
                </CloseButton>
            </Header>

            <Content>
                <Form>
                    <div className="row">
                        <div className="column">
                            <BannerPreview url="" />

                            <InputWrapper>
                                <Label>Banner Url: </Label>
                                <Input type="text" />
                            </InputWrapper>
                        </div>

                        <BasicData>
                            <InputWrapper>
                                <Label htmlFor="name">Name: </Label>
                                <Input id="name" name="name" type="text" />
                            </InputWrapper>

                            <InputWrapper>
                                <Label htmlFor="description">Description: </Label>
                                <Textarea id="description" name="description" />
                            </InputWrapper>

                            <RowWrapper>
                                <InputWrapper>
                                    <Label htmlFor="repository_link">Repository Link: </Label>
                                    <Input id="repository_link" name="repository_link" />
                                </InputWrapper>

                                <InputWrapper>
                                    <Label htmlFor="website_link">Website Link: </Label>
                                    <Input id="website_link" name="website_link" />
                                </InputWrapper>
                            </RowWrapper>

                            <InputWrapper>
                                <Label htmlFor="video_demo">Video demo Url: </Label>
                                <Input id="video_demo" name="video_demo" type="text" />
                            </InputWrapper>
                        </BasicData>
                    </div>

                    <TextEditorContainer>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </TextEditorContainer>
                </Form>
            </Content>
        </Container>
    )
}
