import React, { useState } from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import TableBalance from "../components/Tables/TableBalance";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { TradeBalance } from "../store/mockDB.json";

const ComparisonBalance = () => {
  const [balance] = useState(TradeBalance);
  const [balanceItem, setBalanceItem] = useState(TradeBalance[0]);

  const handleRowClick = (params) => {
    const item = balance.find((el) => el.tnved === params.row.tnved);
    setBalanceItem(item);
  };

  return (
    <main className="py-16 flex flex-col gap-6">
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div className="flex">
            <Button variant="outlined" type="button" color="inherit">
              <Link className="w-full h-full" to="/comparison/volume">
                Объем Торгов
              </Link>
            </Button>
            <Button variant="contained" type="button" color="inherit">
              <Link className="w-full h-full" to="/comparison/balance">
                Торговый Баланс
              </Link>
            </Button>
          </div>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Bars
          data={balance}
          bar1="balance"
          x="id"
          height={300}
          title={"Торговый баланс"}
        />
        <div className="rounded-md shadow-md">
          <TableBalance handleRowClick={handleRowClick} />
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold">
        По выделенному товару (по всем странам)
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <Lines
          data={balanceItem && balanceItem.napr.import.lineChart}
          height={300}
          title={`Импорт за период`}
        />
        <Lines
          data={balanceItem && balanceItem.napr.export.lineChart}
          height={300}
          title={`Экспорт за период`}
        />
        <Bars
          data={balanceItem && balanceItem.napr.import.barChart}
          bar1="Stoim"
          bar2="Netto"
          x="nastranapr"
          height={300}
          title={`Импорт по странам`}
        />
        <Bars
          data={balanceItem && balanceItem.napr.export.barChart}
          bar1="Stoim"
          bar2="Netto"
          x="nastranapr"
          height={300}
          title={`Экспорт по странам`}
        />
      </div>
    </main>
  );
};

export default ComparisonBalance;
