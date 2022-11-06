import React, { useState } from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import VerticalBars from "../components/Charts/VerticalBars";
import TableBalance from "../components/Tables/TableBalance";

import { TradeBalance } from "../store/mockDB.json";

const ComparisonBalance = () => {
  const [balance] = useState(TradeBalance);
  const [balanceItem, setBalanceItem] = useState();

  console.log(balanceItem);
  const handleItem1 = () => {
    const item = balance.find((el) => el.tnved === "0101210001");
    setBalanceItem(item);
  };
  const handleItem2 = () => {
    const item = balance.find((el) => el.tnved === "0101210002");
    setBalanceItem(item);
  };
  const handleItem3 = () => {
    const item = balance.find((el) => el.tnved === "0101210003");
    setBalanceItem(item);
  };

  return (
    <main className="mt-10 flex flex-col pb-20">
      <h2 className="text-center text-2xl font-bold">Торговый баланс</h2>
      <div className="flex gap-6">
        <div className="flex">
          <button
            onClick={handleItem1}
            className="bg-sky-100 rounded-md shadow-md m-1 px-2 text-white hover:scale-105 active:scale-110"
          >
            первая строка
          </button>
          <button
            onClick={handleItem2}
            className="bg-sky-100 rounded-md shadow-md m-1 px-2 text-white hover:scale-105 active:scale-110"
          >
            вторая строка
          </button>
          <button
            onClick={handleItem3}
            className="bg-sky-100 rounded-md shadow-md m-1 px-2 text-white hover:scale-105 active:scale-110"
          >
            третья строка
          </button>
        </div>
        <div className="min-w-[600px] bg-white rounded-md shadow-md">
          <TableBalance />
        </div>
        <Bars data={balance} bar1="balance" x="id" height={500} title={""} />
      </div>
      <h2 className="text-center text-2xl font-bold">По выделенному товару</h2>

      <div className="grid grid-cols-2 gap-6">
        <Lines
          data={balanceItem && balanceItem.napr.import.lineChart}
          height={300}
          title={`Импорт`}
        />
        <Lines
          data={balanceItem && balanceItem.napr.export.lineChart}
          height={300}
          title={`Экспорт`}
        />
        <Bars
          data={balanceItem && balanceItem.napr.import.barChart}
          bar1="Stoim"
          bar2="Netto"
          x="nastranapr"
          height={300}
          title={`Импорт`}
        />
        <Bars
          data={balanceItem && balanceItem.napr.export.barChart}
          bar1="Stoim"
          bar2="Netto"
          x="nastranapr"
          height={300}
          title={`Экспорт`}
        />
      </div>
    </main>
  );
};

export default ComparisonBalance;
