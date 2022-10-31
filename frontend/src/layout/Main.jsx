import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ImportPage from "../pages/ImportPage";
import ImportProductPage from "../pages/ImportProductPage";
import Page3 from "../pages/Page3";
import NotFound404 from "../pages/NotFound404";
import SignUp from "../pages/SignUp";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/import" element={<ImportPage />} />
        <Route path="/import_product" element={<ImportProductPage />} />
        <Route path="/page_3" element={<Page3 />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </main>
  );
};

export default Main;
