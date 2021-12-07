import { useState } from "react"
import type { NextPage } from 'next'
import { authPage } from '../../hooks/useAuth'
import { MessageI, ProjectI, SkillI } from "../../types/data"

import Sidebar from "../../components/Sidebar"
import Projects from "../../components/Projects"
import {
  Container,
  Content,
} from "../../styles/pages/Dashboard"

const Dashboard: NextPage = () => {
  const [projects, setProjects] = useState<ProjectI[]>()
  const [skills, setSkills] = useState<SkillI[]>()
  const [messages, setMessages] = useState<MessageI[]>()

  return (
    <Container>
      <Sidebar />

      <Content>
        <Projects projects={projects} setProjects={setProjects} />
      </Content>
    </Container>
  )
}

export const getServerSideProps = authPage

export default Dashboard
