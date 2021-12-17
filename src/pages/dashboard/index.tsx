import type { NextPage } from "next"
import { authPage } from "../../hooks/useAuth"

import Sidebar from "../../components/Sidebar"
import {
  Container,
  Content,
} from "../../styles/pages/Dashboard"

const Dashboard: NextPage = () => {
  return (
    <Container>
      <Sidebar />

      <Content>
        <h1>Dev[0]</h1>
        <h1>Dashboard</h1>
      </Content>
    </Container>
  )
}

export const getServerSideProps = authPage

export default Dashboard
