
import {
    Container
} from "../../../styles/components/Projects/DeleteProject"

interface DeleteProjectI {
    close(): void
}
export default function DeleteProject({ close }: DeleteProjectI) {

    return (
        <Container>
            <h1>Delete Project</h1>
            <button onClick={() => close()}>Close</button>
        </Container>
    )
}
