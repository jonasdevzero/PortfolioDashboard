
import {
    Container
} from "../../../styles/components/Projects/CreateProject"

interface CreateProjectI {
    close(): void
}
export default function CreateProject({ close }: CreateProjectI) {

    return (
        <Container>
            <h1>Create Project</h1>
            <button onClick={() => close()}>Close</button>
        </Container>
    )
}
