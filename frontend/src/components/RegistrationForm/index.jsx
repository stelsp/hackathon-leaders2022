import React from "react";
import Container from "../../UI/Container";
import { ButtonPrimary } from "../../UI/Button";
import { InputPrimary } from "../../UI/Input";
import { Form } from "./style";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <Container heading="Регистрация" pt="1rem" pb="6rem">
      <Form>
        <InputPrimary id="email" type="email" placeholder="email" />
        <InputPrimary id="password" type="text" placeholder="password" />
        <div>
          <ButtonPrimary>Отправить</ButtonPrimary>
          <Link to="/login">Назад</Link>
        </div>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
