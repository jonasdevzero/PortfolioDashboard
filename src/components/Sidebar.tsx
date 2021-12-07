
import {
    Container,
    Title,
    Row,
    Options,
    Option,
} from "../styles/components/Sidebar"

export default function Sidebar() {

    return (
        <Container>
            <Title>Dev[0]</Title>

            <Row />

            <Options>
                <Option>Projects</Option>
                <Option>Skills</Option>
                <Option>Messages</Option>
            </Options>
        </Container>
    )
}
