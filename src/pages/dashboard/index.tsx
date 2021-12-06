import type { NextPage } from 'next'
import { authPage } from '../../hooks/useAuth'

const Dashboard: NextPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export const getServerSideProps = authPage

export default Dashboard
