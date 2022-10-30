import React from "react";
import { Form } from "./style";
import { Link } from "react-router-dom";
import Container from "../../../UI/Container";
import { InputPrimary } from "../../../UI/Input";
import { ButtonPrimary } from "../../../UI/Button";

const LoginForm = () => {
  return (
    <Container heading="Логин">
      <Form onSubmit={(e) => e.preventDefault()}>
        <InputPrimary id="email" type="email" placeholder="email" />
        <InputPrimary id="password" type="text" placeholder="password" />
        <div>
          <ButtonPrimary>Отправить</ButtonPrimary>
          <Link to="/registration">Регистрация</Link>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
