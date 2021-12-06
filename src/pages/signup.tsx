import type { NextPage } from 'next'
import Link from "next/link"

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
} from "../styles/utils/Form"

const SignUp: NextPage = () => {
  return (
    <Container>
      <Form>
        <FormTitle>Dev[0]</FormTitle>

        <InputWrapper>
          <Label>Username</Label>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <Label>Email</Label>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <Label>Password</Label>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <Label>Confirm Password</Label>
          <Input />
        </InputWrapper>

        <InputWrapper>
          <Label>API Password</Label>
          <Input />
        </InputWrapper>

        <CheckBoxWrapper>
          <CheckBox type="checkbox" />
          <CheckBoxLabel>Super admin</CheckBoxLabel>
        </CheckBoxWrapper>

        <Submit type="submit">Submit</Submit>

        <Link href="/">
          <StyledLink>
            SignIn
          </StyledLink>
        </Link>
      </Form>
    </Container>
  )
}

export default SignUp
