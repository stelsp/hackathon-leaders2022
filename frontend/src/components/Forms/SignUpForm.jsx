import React from "react";
import { useForm } from "react-hook-form";

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
      className="container max-w-sm mx-auto flex flex-col gap-2"
    >
      <div className="p-4 flex flex-col gap-4 rounded-lg shadow-lg  bg-white">
        <h3 className="text-center text-xl font-semibold">Регистрация</h3>

        <input
          type="email"
          placeholder="johndoe@mail.com"
          {...register("Email", {})}
          className="p-1 border-2  rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("Password", {})}
          className="p-1 border-2  rounded-md"
        />

        <button
          type="submit"
          className="py-1 px-2 mt-4 self-end border-2 rounded-md bg-white active:scale-110 "
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
