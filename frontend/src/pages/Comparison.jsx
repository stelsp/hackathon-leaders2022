import React, { useState } from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import Table from "../components/Tables/Table";

import { data } from "../store/mockDB.json";

const Comparison = () => {
  const [state, setState] = useState(data[0]);

  const handleB0 = () => {
    const obj = data.find((el) => el.tnved === "0101210000");
    setState(obj);
  };

  const handleB1 = () => {
    const obj = data.find((el) => el.tnved === "3506100000");
    setState(obj);
  };

  const handleB2 = () => {
    const obj = data.find((el) => el.tnved === "8414308106");
    setState(obj);
  };

  return (
    <main className="pt-10 flex flex-col gap-8">
      <div>
        <h2 className="text-center text-4xl font-bold mb-10">Main Page</h2>
        <button
          onClick={handleB0}
          className="px-4 mx-2 bg-sky-100 text-white rounded-md"
        >
          0
        </button>
        <button
          onClick={handleB1}
          className="px-4 mx-2 bg-sky-100 text-white rounded-md"
        >
          1
        </button>
        <button
          onClick={handleB2}
          className="px-4 mx-2 bg-sky-100 text-white rounded-md"
        >
          2
        </button>
        <div className="flex">
          <Lines
            data={state && state.napr.import.lineChart}
            height={300}
            title={`Импорт ${state && state.name}`}
          />
          <Lines
            data={state && state.napr.export.lineChart}
            height={300}
            title={`Экспорт ${state && state.name}`}
          />
        </div>
        <div className="flex">
          <Bars
            data={state && state.napr.import.barChart}
            height={300}
            title={`Импорт ${state && state.name}`}
          />
          <Bars
            data={state && state.napr.export.barChart}
            height={300}
            title={`Экспорт ${state && state.name}`}
          />
        </div>
        <div className="my-16 px-4">
          <Table />
        </div>
      </div>
    </main>
  );
};

export default Comparison;
