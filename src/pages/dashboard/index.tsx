import type { NextPage } from "next"
import { authPage } from "../../hooks/useAuth"

import Header from "../../components/Header"
import {
  Container,
  Content,
} from "../../styles/pages/Dashboard"

const Dashboard: NextPage = () => {
  return (
    <Container>
      <Header />

      <Content>
        <h1>Dev[0]</h1>
        <h1>Dashboard</h1>
      </Content>
    </Container>
  )
}

export const getServerSideProps = authPage

export default Dashboard
