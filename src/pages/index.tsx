import { useState, useEffect } from "react"
import type { NextPage, NextPageContext } from 'next'
import Router from "next/router"
import Link from "next/link"
import { parseCookies } from "nookies"
import { login } from "../services/admin"

import {
  Container,
  Form,
  FormTitle,
  Label,
  Input,
  InputWrapper,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Submit,
  StyledLink,
  Error
} from "../styles/utils/Form"

const Home: NextPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [keepConnected, setKeepConnected] = useState(false)

  const [error, setError] = useState<string>()

  useEffect(() => {
    Router.query?.error ? setError(Router.query.error.toString()) : null
    return () => { }
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setError(undefined)
    login({ username, password, keepConnected })
      .then(() => Router.push("/dashboard"))
      .catch(error => setError(error))
  }

  return (
    <Container>
      {error ? (<Error>{error}</Error>) : null}

      <Form onSubmit={handleSubmit}>
        <FormTitle>Dev[0]</FormTitle>

        <InputWrapper>
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </InputWrapper>

        <CheckBoxWrapper>
          <CheckBox id="connected" name="connected" type="checkbox" checked={keepConnected} onChange={() => setKeepConnected(!keepConnected)} />
          <CheckBoxLabel>Keep connected</CheckBoxLabel>
        </CheckBoxWrapper>

        <Submit type="submit">Submit</Submit>

        <Link href="/signup" passHref>
          <StyledLink>SignUp</StyledLink>
        </Link>
      </Form>
    </Container>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { ["branium.jwt"]: jwt } = parseCookies(ctx)

  if (jwt) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Home
