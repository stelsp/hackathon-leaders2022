import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-12 flex flex-col gap-6 rounded-lg shadow-lg bg-base-white"
    >
      <h3 className="text-center text-xl font-semibold">Регистрация</h3>
      <TextField
        id="test"
        type="text"
        label="Имя Фамилия"
        variant="outlined"
        {...register("FullName", {})}
      />
      <TextField
        id="email"
        type="email"
        label="johndoe@mail.com"
        variant="outlined"
        {...register("Email", {})}
      />
      <TextField
        id="password"
        type="password"
        label="Пароль"
        variant="outlined"
        {...register("Password", {})}
      />

      <Button variant="contained" type="submit">
        <Link className="w-full h-full" to="/profile">
          Регистрация
        </Link>
      </Button>
      <span className="text-center">
        Уже есть учетная запись?{" "}
        <Link className="w-full h-full text-secondary-150" to="/login">
          Войти
        </Link>
      </span>
    </form>
  );
};

export default SignUpForm;
