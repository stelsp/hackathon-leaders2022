import React from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";

import { data } from "../store/mockDB.json";

const Comparison = () => {
  return (
    <main className="pt-16 flex flex-col gap-8">
      <h2 className="text-center text-4xl font-bold">Main Page</h2>
      <div className="flex">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-center text-2xl font-bold">Импорт</h2>
          <Lines data={data} height={300} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-center text-2xl font-bold">Экспорт</h2>
          <Lines data={data} height={300} />
        </div>
      </div>
      <div className="flex">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-center text-2xl font-bold">Импорт</h2>
          <Bars data={data} height={300} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-center text-2xl font-bold">Экспорт</h2>
          <Bars data={data} height={300} />
        </div>
      </div>
    </main>
  );
};

export default Comparison;
