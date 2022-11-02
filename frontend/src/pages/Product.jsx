import React from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import Pies from "../components/Charts/Pies";
import Table from "../components/Tables/Table";

import { data } from "../store/mockDB.json";

const Product = () => {
  return (
    <main className="pt-10 flex flex-col gap-8">
      <div>
        <h2 className="text-center text-4xl font-bold mb-10">Product Page</h2>
        <div className="flex items-start">
          <Lines data={data} height={304} title={"Импорт"} />
          <div className="w-full px-4">
            <Table />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 px-4">
            <Table />
          </div>
          <div className="w-1/2 px-4">
            <Table />
          </div>
          <Bars data={data} height={304} title={"Экспорт"} />
        </div>
        <div className="flex items-start">
          <div className="w-full px-4">
            <Table />
          </div>
          <Bars data={data} height={304} title={"Экспорт"} />
        </div>
      </div>
    </main>
  );
};

export default Product;
