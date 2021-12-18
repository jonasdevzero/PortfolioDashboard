import { ProjectI } from "../../types/data";

import {
    Container,
    Banner,
    Info,
    Name,
    Links,
    Link,
    Description,
    More,
} from "../../styles/components/Project/Card"
import { FiChevronRight } from "react-icons/fi"

interface ProjectCardI {
    project: ProjectI
}
export default function ProjectCard({ project }: ProjectCardI) {

    return (
        <Container>
            <Banner url={project.banner_url} />

            <Info>
                <Name>{project.name}</Name>

                <Links>
                    <Link href={project.repository_link} rel="noopener noreferrer external nofollow" target="_blank">
                        Repositório
                    </Link>

                    <Link href={project.website_link} rel="noopener noreferrer external nofollow" target="_blank">
                        Website
                    </Link>
                </Links>

                <Description>{project.description}</Description>

                <More>
                    <FiChevronRight />
                </More>
            </Info>
        </Container>
    )
}
