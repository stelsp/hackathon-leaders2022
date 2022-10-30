import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "./api";

const Home = () => {
  const { isLoading, error, data } = useQuery(["project"], getData);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка {error.message}</div>;

  return <div style={{ textAlign: "center" }}>Home {data}</div>;
};

export default Home;
