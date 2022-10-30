import React from "react";
import Container from "../../UI/Container";
import ImportProductChart from "../Charts/ImportProductChart";

const ImportProduct = () => {
  return (
    <Container heading="Импорт выбранный продукт">
      <ImportProductChart />
    </Container>
  );
};

export default ImportProduct;
