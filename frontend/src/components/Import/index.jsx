import React from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";
import ImportTable from "./ImportTable";
import { Wrapper } from "./style";

const Import = () => {
  return (
    <Container heading="Импорт">
      <Wrapper>
        <ImportTable />
        <Link to="/importProduct">на страницу с графиком</Link>
      </Wrapper>
    </Container>
  );
};

export default Import;
