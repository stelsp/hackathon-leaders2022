import React, { useState } from "react";
import Bars from "../components/Charts/Bars";
import Lines from "../components/Charts/Lines";
import VerticalBars from "../components/Charts/VerticalBars";
import TableVolume from "../components/Tables/TableVolume";

import { TradingVolume } from "../store/mockDB.json";

const ComparisonVolume = () => {
  const [volume] = useState(TradingVolume);
  const [volumeItem, setVolumeItem] = useState(TradingVolume[0]);

  return (
    <main className="py-16 flex flex-col gap-6">
      <h2 className="text-center text-2xl font-bold">Объем торгов</h2>
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
