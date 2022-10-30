import axios from "axios";

const instance = axios.create({
  baseURL: "/",
});

export const getData = () => instance.get("/").then((res) => res.data);
