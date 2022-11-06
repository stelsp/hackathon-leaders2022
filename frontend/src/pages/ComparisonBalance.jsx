import React, { useState } from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import VerticalBars from "../components/Charts/VerticalBars";
import TableBalance from "../components/Tables/TableBalance";

import { TradeBalance } from "../store/mockDB.json";

const ComparisonBalance = () => {
  const [balance] = useState(TradeBalance);
  const [balanceItem, setBalanceItem] = useState(TradeBalance[0]);

  return (
    <main className="py-16 flex flex-col gap-6">
      <h2 className="text-center text-2xl font-bold">Торговый баланс</h2>
      <div className="flex gap-6">
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
