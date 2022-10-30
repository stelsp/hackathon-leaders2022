import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ImportDynamicPage from "../pages/ImportDynamicPage";
import UniversalProductsPage from "../pages/UniversalProductsPage";
import Page3 from "../pages/Page3";
import NotFound404 from "../pages/NotFound404";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/importDynamic" element={<ImportDynamicPage />} />
        <Route path="/universalProducts" element={<UniversalProductsPage />} />
        <Route path="/page3" element={<Page3 />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </main>
  );
};

export default Main;
