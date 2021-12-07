
import {
    Container
} from "../../../styles/components/Projects/EditProject"

interface EditProjectI {
    close(): void
}
export default function EditProject({ close }: EditProjectI) {

    return (
        <Container>
            <h1>Edit Project</h1>
            <button onClick={() => close()}>Close</button>
        </Container>
    )
}
