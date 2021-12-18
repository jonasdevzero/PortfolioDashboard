import { useState } from "react"
import type { NextPage } from "next"
import Router from "next/router"
import dynamic from "next/dynamic"
import { EditorState, convertToRaw } from "draft-js"
import { EditorProps } from "react-draft-wysiwyg"
import draftToHtml from 'draftjs-to-html'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import * as projectService from "../../../services/projects"
import { useDispatch } from "../../../hooks/useData"
import { constant } from "../../../constant"

import Header from "../../../components/Header"
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
	ImagesContainer,
	AddImageFieldBtn,
	RemoveImageFieldBtn,
	TextEditorContainer,
	Textarea,
	Error,
} from "../../../styles/pages/dashboard/Projects/Create"
import { FiTrash2 } from "react-icons/fi"

const Editor = dynamic<EditorProps>(
	() => import('react-draft-wysiwyg').then(mod => mod.Editor),
	{ ssr: false }
)

const CreateProject: NextPage = () => {
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

	const dispatch = useDispatch()

	function onEditorStateChange(e: EditorState) {
		setEditorState(e)
		setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	function handleSubmit() {
		if (loading) return;
		setLoading(true)

		const data = {
			name,
			description,
			banner_url,
			html,
			repository_link,
			website_link,
			images: images.filter(i => !!i).map(i => ({ url: i })),
			video_demo,
		}

		setError(undefined)
		projectService.create(data)
			.then(p => {
				dispatch({ type: constant.actions.ADD_PROJECT, project: p })
				Router.push(constant.routes.DASHBOARD.PROJECTS.HOME)
			})
			.catch(error => setError(error))
			.then(() => setLoading(false))
	}

	return (
		<Container>
			<Header />

			<Content>
				<Options>
					<Option className="preview" onClick={() => { }}>Preview Project</Option>
					<Option className="preview" onClick={() => { }}>Preview Card</Option>
					<Option className="create" onClick={() => handleSubmit()}>Create project</Option>
					<Option className="cancel" onClick={() => Router.push(constant.routes.DASHBOARD.PROJECTS.HOME)}>Cancel</Option>
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
								<InputWrapper key={i}>
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

				{error ? (<Error>{error}</Error>) : null}
			</Content>
		</Container>
	)
}

export default CreateProject
