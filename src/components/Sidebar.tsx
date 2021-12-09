
import {
    Container,
    Title,
    Row,
    Options,
    Option,
} from "../styles/components/Sidebar"

interface SidebarI {
    setOption: React.Dispatch<React.SetStateAction<"projects" | "skills" | "messages">>
}
export default function Sidebar({ setOption }: SidebarI) {

    return (
        <Container>
            <Title>Dev[0]</Title>

            <Row />

            <Options>
                <Option onClick={() => setOption("projects")}>Projects</Option>
                <Option onClick={() => setOption("skills")}>Skills</Option>
                <Option onClick={() => setOption("messages")}>Messages</Option>
            </Options>
        </Container>
    )
}
