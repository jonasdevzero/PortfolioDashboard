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

const Home: NextPage = () => {
  return (<Container>
    <Form>
      <FormTitle>Dev[0]</FormTitle>

      <InputWrapper>
        <Label>Username</Label>
        <Input />
      </InputWrapper>

      <InputWrapper>
        <Label>Password</Label>
        <Input />
      </InputWrapper>

      <CheckBoxWrapper>
        <CheckBox type="checkbox" />
        <CheckBoxLabel>Keep connected</CheckBoxLabel>
      </CheckBoxWrapper>

      <Submit type="submit">Submit</Submit>

      <Link href="/signup">
        <StyledLink>
          SignUp
        </StyledLink>
      </Link>
    </Form>
  </Container>
  )
}

export default Home
