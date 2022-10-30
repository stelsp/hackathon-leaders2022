import React from "react";
import Container from "../../UI/Container";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { InputPrimary } from "../../UI/Input";
import { ButtonToExcel, Filter, Wrapper } from "./style";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [1, 5, 6, 2, 1, 1, 7],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: [1, 2, 8, 9, 5, 6, 7],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: [7, 6, 5, 4, 3, 2, 1],
    },
  ],
};

const ImportDynamic = () => {
  return (
    <Container heading="Динамика импорта" pt="1rem" pb="6rem">
      <Wrapper>
        Типа фильтры:
        <Filter>
          <InputPrimary placeholder="регион" />
          <InputPrimary placeholder="период" />
          <InputPrimary placeholder="страна" />
          <InputPrimary placeholder="кол-во строк в таблице" />
        </Filter>
        Типа таблица:
        <Chart type="bar" data={data} />
        <ButtonToExcel>Выгрузить в Excel</ButtonToExcel>
      </Wrapper>
    </Container>
  );
};

export default ImportDynamic;
