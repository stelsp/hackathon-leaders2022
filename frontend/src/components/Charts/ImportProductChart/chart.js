import create from "zustand";
import data from "../../../store/mockDB.json";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "ImportProductChart",
    },
  },
};

const useImportProductChartStore = create(() => data.importProductChart);

export { useImportProductChartStore, options };
