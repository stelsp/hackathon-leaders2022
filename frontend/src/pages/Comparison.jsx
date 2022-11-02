import React from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";

import { data } from "../store/mockDB.json";

const Comparison = () => {
  return (
    <main className="min-h-[500px] px-4 flex flex-col">
      <div className="min-h-[500px] w-[100%] flex">
        <Lines data={data} />
        <Lines data={data} />
      </div>
      <div className="min-h-[500px] w-[100%] flex">
        <Bars data={data} />
        <Bars data={data} />
      </div>
    </main>
  );
};

export default Comparison;
