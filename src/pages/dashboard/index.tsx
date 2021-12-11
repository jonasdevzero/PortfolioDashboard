import { useState } from "react"
import type { NextPage } from 'next'
import { authPage } from '../../hooks/useAuth'
import { MessageI, ProjectI, SkillI } from "../../types/data"

import Sidebar from "../../components/Sidebar"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Messages from "../../components/Messages"
import {
  Container,
  Content,
} from "../../styles/pages/Dashboard"

const Dashboard: NextPage = () => {
  const [option, setOption] = useState<"projects" | "skills" | "messages">("projects")

  const [projects, setProjects] = useState<ProjectI[]>([] as ProjectI[])
  const [skills, setSkills] = useState<SkillI[]>([] as SkillI[])
  const [messages, setMessages] = useState<MessageI[]>([] as MessageI[])

  return (
    <Container>
      <Sidebar setOption={setOption} />

      <Content>
        {function () {
          switch (option) {
            case "projects":
              return (<Projects projects={projects} setProjects={setProjects} />)
            case "skills":
              return (<Skills skills={skills} setSkills={setSkills}  />)
            case "messages":
              return (<Messages messages={messages} setMessages={setMessages} />)
          }
        }()}

      </Content>
    </Container>
  )
}

export const getServerSideProps = authPage

export default Dashboard
