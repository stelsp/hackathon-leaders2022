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
      text: "ExportProductChart",
    },
  },
};

const useExportProductChartStore = create(() => data.importProductChart);

export { useExportProductChartStore, options };
