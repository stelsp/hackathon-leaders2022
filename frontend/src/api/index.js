import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getData = () => instance.get("/").then((res) => res.data);
export const postUser = () =>
  instance.post("/users/me/").then((res) => res.data);
