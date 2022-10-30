import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { options, useImportProductChartStore } from "./chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ImportProductChart = () => {
  const state = useImportProductChartStore((state) => state);
  const labels = state.labels.years1;
  const datasets = state.datasets.dataset1;
  const [data, setData] = useState({ labels, datasets });

  const Dataset1 = () => {
    setData({ ...data, datasets: state.datasets.dataset1 });
  };
  const Dataset2 = () => {
    setData({ ...data, datasets: state.datasets.dataset2 });
  };
  const Year1 = () => {
    setData({ ...data, labels: state.labels.years1 });
  };
  const Year2 = () => {
    setData({ ...data, labels: state.labels.years2 });
  };
  const Year3 = () => {
    setData({ ...data, labels: state.labels.years3 });
  };

  return (
    <>
      <Line options={options} data={data} />
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button type="button" onClick={Dataset1}>
          Dataset1
        </button>
        <button type="button" onClick={Dataset2}>
          Dataset2
        </button>
        <button type="button" onClick={Year1}>
          1 год
        </button>
        <button type="button" onClick={Year2}>
          2 года
        </button>
        <button type="button" onClick={Year3}>
          3 года
        </button>
      </div>
    </>
  );
};

export default ImportProductChart;
