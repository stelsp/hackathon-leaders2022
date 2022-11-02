import React from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import Table from "../components/Tables/Table";

import { data } from "../store/mockDB.json";

const Product = () => {
  return (
    <main className="pt-16 flex flex-col gap-8">
      <div>
        <h2 className="text-center text-4xl font-bold mb-16">Product Page</h2>
        <div className="flex">
          <Lines data={data} height={300} title={"Импорт"} />
          <Lines data={data} height={300} title={"Экспорт"} />
        </div>
        <div className="flex">
          <Bars data={data} height={300} title={"Импорт"} />
          <Bars data={data} height={300} title={"Экспорт"} />
        </div>
        <div className="my-16 px-4">
          <Table />
        </div>
      </div>
    </main>
  );
};

export default Product;
