import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { TradingVolume } from "../../store/mockDB.json";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "tnved", headerName: "ТН ВЕД", width: 150 },
  { field: "ImportStoimAll", headerName: "ИМ Стоимость", width: 150 },
  { field: "ExportStoimAll", headerName: "ИМ Объем", width: 150 },
  { field: "ImportNettoAll", headerName: "ЭК Стоимость", width: 150 },
  { field: "ExportNettoAll", headerName: "ЭК Объем", width: 150 },
  { field: "name", headerName: "Наименование", width: 2000 },
];

const TableVolume = () => {
  return (
    <div className="h-96">
      <DataGrid
        rows={TradingVolume}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default TableVolume;
