
import {
    Container,
    CloseButton,
    Project,
    ProjectBanner,
    ProjectDetails,
    ProjectName,
    ProjectLinks,
    ProjectLink,
    ProjectDescription,
    StyledLink,
} from "../styles/components/PreviewCard"
import {
    FiX,
    FiChevronRight,
} from "react-icons/fi"

interface PreviewCardI {
    project: {
        name: string
        banner_url: string
        description: string
        repository_link: string
        website_link: string
    }
    close(): void
}
export default function PreviewCard({ project, close }: PreviewCardI) {
    return (
        <Container>
            <CloseButton onClick={() => close()}>
                <FiX />
            </CloseButton>

            <Project>
                <ProjectBanner image={project.banner_url} />

                <ProjectDetails>
                    <div>
                        <ProjectName>{project.name}</ProjectName>
                        <ProjectLinks>
                            <div>
                                <StyledLink href={project.repository_link} target='_blank' rel="noopener noreferrer external nofollow">
                                    Repositório
                                </StyledLink>

                                <StyledLink href={project.website_link} target='_blank' rel="noopener noreferrer external nofollow">
                                    Website
                                </StyledLink>
                            </div>
                        </ProjectLinks>
                    </div>

                    <ProjectDescription>{project.description}</ProjectDescription>

                    <ProjectLink>
                        <FiChevronRight />
                    </ProjectLink>
                </ProjectDetails>
            </Project>
        </Container>
    )
}
