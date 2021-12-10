import parse from 'html-react-parser'

import Slider from './Slider'
import {
    Container,
    CloseButton,
    SlideContainer,
    Article,
    Info,
    Title,
    HtmlContainer,
    Text,
    StyledLink,
} from "../styles/components/PreviewProject"
import { FiX } from "react-icons/fi"

interface PreviewProjectI {
    project: {
        name: string
        banner_url: string
        description: string
        html: string
        repository_link: string
        website_link: string
        video_demo: string
        images: string[]
    }
    close(): void
}
export default function PreviewProject({ project, close }: PreviewProjectI) {
    return (
        <Container>
            <CloseButton onClick={() => close()}>
                <FiX />
            </CloseButton>

            <SlideContainer>
                <Slider>
                    {project.images.map((img, i) => {
                        return img ? (<img key={i} src={img} />) : null
                    })}
                </Slider>
            </SlideContainer>

            <Article>
                <Info>
                    <Title>{project?.name}</Title>
                    <Text>{project?.description}</Text>

                    <div>
                        <StyledLink href={project?.repository_link} rel="noopener noreferrer external nofollow" target="_blank">
                            Repositório
                        </StyledLink>
                        <StyledLink href={project?.website_link} rel="noopener noreferrer external nofollow" target="_blank">
                            Website
                        </StyledLink>
                    </div>
                </Info>

                <HtmlContainer>{parse(project?.html)}</HtmlContainer>
            </Article>
        </Container>
    )
}
