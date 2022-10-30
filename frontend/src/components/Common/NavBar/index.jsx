import React from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";
import { NavFooter, NavHeader } from "./style";

const NavBarHeader = () => {
  return (
    <NavHeader>
      {/* <Link to="/">Главная</Link> */}
      <Link to="/import">Импорт</Link>
      {/* <Link to="/universalProducts">Универсальные товары</Link> */}
      {/* <Link to="/page3">Page 3</Link> */}
      <Link to="/login">Логин</Link>
    </NavHeader>
  );
};

const NavBarFooter = () => {
  return (
    <NavFooter>
      {/* <Link to="/">Главная</Link> */}
      {/* <Link to="/login">Логин</Link> */}
    </NavFooter>
  );
};

const NavBar = ({ place }) => {
  return (
    <Container>
      {place === "header" && <NavBarHeader />}
      {place === "footer" && <NavBarFooter />}
    </Container>
  );
};

export default NavBar;
