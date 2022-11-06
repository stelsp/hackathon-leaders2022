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

  const handleRowClick = (params) => {
    const item = volume.find((el) => el.tnved === params.row.tnved);
    setVolumeItem(item);
  };

  return (
    <main className="py-16 flex flex-col gap-6">
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div className="flex">
            <Button variant="contained" type="button" color="inherit">
              <Link className="w-full h-full" to="/comparison/volume">
                Объем Торгов
              </Link>
            </Button>
            <Button variant="outlined" type="button" color="inherit">
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
            bar1="Import_Stoim"
            bar2="Import_Netto"
            x="id"
            height={300}
            title={`Импорт за период`}
          />

          <Bars
            data={volume}
            bar1="Export_Stoim"
            bar2="Export_Netto"
            x="id"
            height={300}
            title={`Экспорт за период`}
          />
        </div>
        <div className="rounded-md shadow-md">
          <TableVolume handleRowClick={handleRowClick} />
        </div>
      </div>
      <h3 className="text-center text-2xl font-bold">По выделенному товару</h3>
      <div className="grid grid-cols-2 gap-6">
        <Lines
          data={volumeItem && volumeItem.napr.import.lineChart}
          height={300}
          title={`Импорт за период`}
        />
        <Lines
          data={volumeItem && volumeItem.napr.export.lineChart}
          height={300}
          title={`Экспорт за период`}
        />
        <Bars
          data={volumeItem && volumeItem.napr.import.barChart}
          bar1="Stoim"
          bar2="Netto"
          x="nastranapr"
          height={300}
          title={`Импорт по странам`}
        />
        <Bars
          data={volumeItem && volumeItem.napr.export.barChart}
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

export default ComparisonVolume;
