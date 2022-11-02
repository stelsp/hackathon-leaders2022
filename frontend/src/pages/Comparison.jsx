import React from "react";
import Areas from "../components/Charts/Areas";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import VerticalBars from "../components/Charts/VerticalBars";
import Table from "../components/Tables/Table";

import { data } from "../store/mockDB.json";

const Comparison = () => {
  return (
    <main className="pt-10 flex flex-col gap-8">
      <div>
        <h2 className="text-center text-4xl font-bold mb-10">Main Page</h2>
        <div className="flex">
          <Lines data={data} height={300} title={"Импорт"} />
          <Areas data={data} height={300} title={"Экспорт"} />
        </div>
        <div className="flex">
          <Bars data={data} height={300} title={"Импорт"} />
          <VerticalBars data={data} height={300} title={"Экспорт"} />
        </div>
        <div className="my-16 px-4">
          <Table />
        </div>
      </div>
    </main>
  );
};

export default Comparison;
