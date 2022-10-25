import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../layout/Container";
import { Nav, Wrapper } from "./style";

const NavBarHeader = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <Link to="/login">Login</Link>
    </Nav>
  );
};

const NavBarFooter = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </Nav>
  );
};

const NavBar = ({ place }) => {
  return (
    <Wrapper>
      <Container>
        {place === "header" && <NavBarHeader />}
        {place === "footer" && <NavBarFooter />}
      </Container>
    </Wrapper>
  );
};

export default NavBar;
