import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import TableVolume from "../components/Tables/TableVolume";
import Button from "@mui/material/Button";
import { TradingVolume } from "../store/mockDB.json";

const ComparisonVolume = () => {
  const [volume] = useState(TradingVolume);
  const [volumeItem, setVolumeItem] = useState(TradingVolume[0]);

  return (
    <main className="py-16 flex flex-col gap-6">
      <div className="mb-10">
        <h2 className="text-center text-2xl font-bold mb-10">Объем торгов</h2>
        <div className="flex items-center justify-between">
          <div className="flex">
            <Button variant="contained" type="button" color="inherit">
              <Link className="w-full h-full" to="/comparison/volume">
                Объем Торгов
              </Link>
            </Button>
            <Button variant="contained" type="button">
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
        <div className="grid grid-cols-2 gap-6">
          <Bars
            data={volume}
            bar1="ImportStoimAll"
            bar2="ImportNettoAll"
            x="id"
            height={300}
            title={`Импорт`}
          />

          <Bars
            data={volume}
            bar1="ExportStoimAll"
            bar2="ExportNettoAll"
            x="id"
            height={300}
            title={`Экспорт`}
          />
        </div>
        <div className="bg-white rounded-md shadow-md">
          <TableVolume />
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold">По выделенному товару</h2>
      <div className="grid grid-cols-2 gap-6">
        <Lines
          data={volumeItem && volumeItem.napr.import.lineChart}
          height={300}
          title={`Импорт`}
        />
        <Lines
          data={volumeItem && volumeItem.napr.export.lineChart}
          height={300}
          title={`Экспорт`}
        />
        <Bars
          data={volumeItem && volumeItem.napr.import.barChart}
          bar1="Stoim"
          bar2="Netto"
          x="nastranapr"
          height={300}
          title={`Импорт`}
        />
        <Bars
          data={volumeItem && volumeItem.napr.export.barChart}
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

export default ComparisonVolume;
