import { useState } from "react"
import Router from "next/router"
import dynamic from "next/dynamic"
import { EditorState, convertToRaw } from "draft-js"
import { EditorProps } from "react-draft-wysiwyg"
import draftToHtml from 'draftjs-to-html'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import * as projectService from "../../../services/projects"

import PreviewProject from "../../PreviewProject"
import PreviewCard from "../../PreviewCard"
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
	RowWrapper,
	ImagesContainer,
	AddImageFieldBtn,
	RemoveImageFieldBtn,
	TextEditorContainer,
	Textarea,
	Error,
} from "../../../styles/components/Projects/CreateProject"
import {
	FiX,
	FiTrash2,
} from "react-icons/fi"

const Editor = dynamic<EditorProps>(
	() => import('react-draft-wysiwyg').then(mod => mod.Editor),
	{ ssr: false }
)

interface CreateProjectI {
	close(): void
}
export default function CreateProject({ close }: CreateProjectI) {
	const [previewOption, setPreviewOption] = useState<"card" | "project">()

	const [name, setName] = useState("")
	const [images, setImages] = useState<string[]>([""])
	const [banner_url, setBannerUrl] = useState("")
	const [description, setDescription] = useState("")
	const [repository_link, setRepositoryLink] = useState("")
	const [website_link, setWebsiteLink] = useState("")
	const [video_demo, setVideoDemo] = useState("")
	const [html, setHtml] = useState("")
	const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

	const [error, setError] = useState<string>()
	const [loading, setLoading] = useState(false)

	function onEditorStateChange(e: EditorState) {
		setEditorState(e)
		setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	function handleSubmit() {
		if (loading) return;
		setLoading(true)

		const img = images.filter(i => !!i).map(i => ({ url: i }))

		setError(undefined)
		projectService.create({
			name,
			description,
			banner_url,
			html,
			repository_link,
			website_link,
			images: img,
			video_demo,
		})
			.then(() => Router.reload())
			.catch(error => setError(error))
			.then(() => setLoading(false))
	}

	return (
		<Container>
			{function () {
				switch (previewOption) {
					case "project":
						return (
							<PreviewProject
								project={{ name, banner_url, description, repository_link, website_link, video_demo, html, images }}
								close={() => setPreviewOption(undefined)}
							/>
						)
					case "card":
						return (
							<PreviewCard
								project={{ name, description, repository_link, website_link, banner_url }}
								close={() => setPreviewOption(undefined)}
							/>
						)
					default:
						return (
							<>
								<Header>
									<Title>Create Project</Title>

									<CloseButton onClick={() => close()}>
										<FiX />
									</CloseButton>
								</Header>

								<Content>
									<Options>
										<Option onClick={() => setPreviewOption("project")}>Preview Project</Option>
										<Option onClick={() => setPreviewOption("card")}>Preview Card</Option>
										<Option onClick={() => handleSubmit()}>Criar projeto</Option>
									</Options>

									<Form>
										<div className="column">
											<div className="row">
												<div className="column">
													<BannerPreview url={banner_url} />

													<InputWrapper>
														<Label htmlFor="banner_url">Banner Url: </Label>
														<Input id="banner_url" name="banner_url" type="text" value={banner_url} onChange={e => setBannerUrl(e.target.value)} />
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
															<Label htmlFor="repository_link">Repository Link: </Label>
															<Input id="repository_link" name="repository_link" value={repository_link} onChange={e => setRepositoryLink(e.target.value)} />
														</InputWrapper>

														<InputWrapper>
															<Label htmlFor="website_link">Website Link: </Label>
															<Input id="website_link" name="website_link" value={website_link} onChange={e => setWebsiteLink(e.target.value)} />
														</InputWrapper>
													</RowWrapper>

													<InputWrapper>
														<Label htmlFor="video_demo">Video demo Url: </Label>
														<Input id="video_demo" name="video_demo" type="text" value={video_demo} onChange={e => setVideoDemo(e.target.value)} />
													</InputWrapper>
												</BasicData>
											</div>

											<ImagesContainer>
												<AddImageFieldBtn type="button" onClick={() => setImages([...images, ""])}>
													Add image field
												</AddImageFieldBtn>

												{images.map((s, i, arr) => (
													<InputWrapper>
														<Label htmlFor="images">Image Url: </Label>

														<div className="row">
															<Input
																id="images"
																name="images"
																type="text"
																value={s}
																onChange={e => setImages(arr.map((element, index) => {
																	if (index === i) return e.target.value;
																	return element;
																}))}
															/>

															<RemoveImageFieldBtn onClick={() => setImages(images.filter((_, index) => index !== i))}>
																<FiTrash2 />
															</RemoveImageFieldBtn>
														</div>
													</InputWrapper>
												))}
											</ImagesContainer>
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

									{error? (<Error>{error}</Error>) : null}
								</Content>
							</>
						)
				}
			}()}
		</Container>
	)
}
