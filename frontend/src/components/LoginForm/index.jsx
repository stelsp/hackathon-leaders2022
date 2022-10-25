import React from "react";
import { Container } from "../../layout/Container";
import { PageHeading } from "../../layout/PageHeading";
import { Form, Wrapper } from "./style";

const LoginForm = () => {
  return (
    <Wrapper>
      <Container>
        <PageHeading>Login</PageHeading>
        <Form>
          <input id="email" type="email" placeholder="email" />
          <input id="password" type="text" placeholder="password" />
          <button>submit</button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default LoginForm;
