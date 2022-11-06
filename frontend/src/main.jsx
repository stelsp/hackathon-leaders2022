import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ComparisonBalance from "./pages/ComparisonBalance";
import ComparisonVolume from "./pages/ComparisonVolume";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound404 from "./pages/NotFound404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="comparison/volume" element={<ComparisonVolume />} />
        <Route path="comparison/balance" element={<ComparisonBalance />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="sign_up" element={<SignUp />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
