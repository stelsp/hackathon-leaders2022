import React from "react";
import { Container } from "../UI/Container";
import { PageHeading } from "../UI/PageHeading";
import { ButtonPrimary } from "../UI/Button";
import { InputPrimary } from "../UI/Input";
import { Form, Wrapper } from "./style";

const LoginForm = () => {
  return (
    <Wrapper>
      <Container pt="10rem" pb="10rem">
        <PageHeading>Login</PageHeading>
        <Form>
          <InputPrimary id="email" type="email" placeholder="email" />
          <InputPrimary id="password" type="text" placeholder="password" />
          <ButtonPrimary>submit</ButtonPrimary>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default LoginForm;
