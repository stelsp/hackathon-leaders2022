import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound404 from "./pages/NotFound404";
import SignUp from "./pages/SignUp";
import Comparison from "./pages/Comparison";
import Product from "./pages/Product";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="comparison" element={<Comparison />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="sign_up" element={<SignUp />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
