import { useState } from "react"
import type { NextPage } from 'next'
import Router from "next/router"
import Link from "next/link"
import { signup } from "../services/admin"

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

const SignUp: NextPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("")
  const [system_password, setSystemPassword] = useState("")
  const [super_admin, setSuperAdmin] = useState(false)

  const [error, setError] = useState<string>()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = {
      username,
      email,
      password,
      confirm_password,
      system_password,
      super_admin,
    }

    setError(undefined)
    signup(data)
      .then(() => Router.replace("/dashboard"))
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
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input id="confirm_password" name="confirm_password" type="password" value={confirm_password} onChange={e => setConfirmPassword(e.target.value)} />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="system_password">API Password</Label>
          <Input id="system_password" name="system_password" type="password" value={system_password} onChange={e => setSystemPassword(e.target.value)} />
        </InputWrapper>

        <CheckBoxWrapper>
          <CheckBox id="super_admin" name="super_admin" type="checkbox" checked={super_admin} onChange={() => setSuperAdmin(!super_admin)} />
          <CheckBoxLabel htmlFor="super_admin">Super admin</CheckBoxLabel>
        </CheckBoxWrapper>

        <Submit type="submit">Submit</Submit>

        <Link href="/" passHref>
          <StyledLink>
            SignIn
          </StyledLink>
        </Link>
      </Form>
    </Container>
  )
}

export default SignUp
