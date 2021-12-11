import { useState } from "react"
import Router from "next/router"
import dynamic from "next/dynamic"
import { EditorState, ContentState, RawDraftEntity, ContentBlock, convertToRaw } from "draft-js"
import { EditorProps } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import * as projectService from "../../../services/projects"
import { ProjectI } from "../../../types/data"

import PreviewProject from "../../PreviewProject"
import PreviewCard from "../../PreviewCard"
import {
	Container,
	Sidebar,
	Inner,
	Header,
	Error,
} from "../../../styles/components/Projects/EditProject"
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
	ImagesContainer,
	AddImageFieldBtn,
	RemoveImageFieldBtn,
	TextEditorContainer,
} from "../../../styles/components/Projects/CreateProject"
import {
	FiX,
	FiTrash2,
} from "react-icons/fi"

type HtmlToDraft = (text: string, customChunkRenderer?: ((nodeName: string, node: HTMLElement) => RawDraftEntity | undefined) | undefined) => {
	contentBlocks: ContentBlock[];
	entityMap?: any;
}
const htmlToDraft: HtmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;
const Editor = dynamic<EditorProps>(
	() => import('react-draft-wysiwyg').then(mod => mod.Editor),
	{ ssr: false }
)

interface EditProjectI {
	projects: ProjectI[]
	close(): void
}
export default function EditProject({ projects, close }: EditProjectI) {
	const [previewOption, setPreviewOption] = useState<"card" | "project">()

	const [id, setId] = useState("")
	const [name, setName] = useState("")
	const [images, setImages] = useState<Array<{ id: string, url: string }>>([])
	const [banner_url, setBannerUrl] = useState("")
	const [description, setDescription] = useState("")
	const [repository_link, setRepositoryLink] = useState("")
	const [website_link, setWebsiteLink] = useState("")
	const [video_demo, setVideoDemo] = useState("")
	const [html, setHtml] = useState("")
	const [new_images, setNewImages] = useState<string[]>([])
	const [remove_images, setRemoveImages] = useState<string[]>([])

	const [error, setError] = useState<string>()
	const [loading, setLoading] = useState(false)

	const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

	function selectProject(p: ProjectI) {
		setId(p.id)
		setName(p.name)
		setImages(p.images)
		setBannerUrl(p.banner_url)
		setDescription(p.description)
		setRepositoryLink(p.repository_link)
		setWebsiteLink(p.website_link)
		setVideoDemo(p.video_demo)
		setHtml(p.html)

		const { contentBlocks, entityMap } = htmlToDraft(p.html)
		const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap)
		setEditorState(EditorState.createWithContent(contentState))
	}

	function onEditorStateChange(e: EditorState) {
		setEditorState(e)
		setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	function handleSubmit() {
		if (loading) return;
		setLoading(true)

		setError(undefined)
		projectService.update(id, {
			name,
			description,
			banner_url,
			repository_link,
			website_link,
			html,
			video_demo,
			remove_images: remove_images.map(img => ({ id: img })),
			new_images: new_images.map(img => ({ url: img })),
		})
			.then(() => Router.reload())
			.catch(error => setError(error))
			.then(() => setLoading(false))
	}

	return (
		<Container>
			{function () {
				switch (previewOption) {
					case "project": return (
						<PreviewProject
							project={{ name, banner_url, description, repository_link, website_link, video_demo, html, images: images.map(i => i.url) }}
							close={() => setPreviewOption(undefined)}
						/>
					)
					case "card": return (
						<PreviewCard
							project={{ name, description, repository_link, website_link, banner_url }}
							close={() => setPreviewOption(undefined)}
						/>
					)
					default: return (
						<>
							<Sidebar>
								<h3>Projetos</h3>

								<div className="projects">
									{projects?.map(p => (
										<span key={p.id} onClick={() => selectProject(p)}>{p.name}</span>
									))}
								</div>
							</Sidebar>

							<Inner>
								<Header>
									<h2>Editar projeto / {name}</h2>

									<span onClick={() => close()}>
										<FiX />
									</span>
								</Header>

								{name ? (
									<Content>
										<Options>
											<Option onClick={() => setPreviewOption("project")}>Preview Project</Option>
											<Option onClick={() => setPreviewOption("card")}>Preview Card</Option>
											<Option onClick={() => handleSubmit()}>Edit project</Option>
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
													{images.map((img, i) => (
														<InputWrapper key={i}>
															<Label>Image Url:</Label>

															<div className="row">
																<Input value={img.url} disabled />

																<RemoveImageFieldBtn type="button" onClick={() => {
																	setImages(images.filter((_, index) => index !== i))
																	setRemoveImages([...remove_images, img.id])
																}}>
																	<FiTrash2 />
																</RemoveImageFieldBtn>
															</div>
														</InputWrapper>
													))}
												</ImagesContainer>

												<ImagesContainer>
													<AddImageFieldBtn type="button" onClick={() => setNewImages([...new_images, ""])}>Add image field</AddImageFieldBtn>

													{new_images.map((s, i, arr) => (
														<InputWrapper>
															<Label htmlFor="images">Image Url: </Label>

															<div className="row">
																<Input
																	id="images"
																	name="images"
																	type="text"
																	value={s}
																	onChange={e => setNewImages(arr.map((element, index) => {
																		if (index === i) return e.target.value;
																		return element;
																	}))}
																/>

																<RemoveImageFieldBtn type="button" onClick={() => setNewImages(new_images.filter((_, index) => index !== i))}>
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

										{error ? (<Error>{error}</Error>) : null}
									</Content>
								) : null}

							</Inner>
						</>
					)
				}
			}()}
		</Container>
	)
}
