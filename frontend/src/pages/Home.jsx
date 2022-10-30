import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api";
import Hero from "../components/Hero";

const Home = () => {
  const { isLoading, error, data } = useQuery(["project"], getData);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка {error.message}</div>;

  return <Hero />;
};

export default Home;
