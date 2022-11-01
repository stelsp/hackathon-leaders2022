import "./styles/global.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/NotFound404";
import { getData } from "./api";
import { useQuery } from "@tanstack/react-query";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  const { isLoading, error, data } = useQuery(["project"], getData);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка {error.message}</div>;

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </main>
  );
};

export default App;
