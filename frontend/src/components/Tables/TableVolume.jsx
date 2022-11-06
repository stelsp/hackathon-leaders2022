import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { TradingVolume } from "../../store/mockDB.json";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "tnved", headerName: "ТН ВЕД", width: 150 },
  { field: "Import_Stoim", headerName: "ИМ Стоимость", width: 150 },
  { field: "Export_Stoim", headerName: "ИМ Объем", width: 150 },
  { field: "Import_Netto", headerName: "ЭК Стоимость", width: 150 },
  { field: "Export_Netto", headerName: "ЭК Объем", width: 150 },
  { field: "name", headerName: "Наименование", width: 700 },
];

const TableVolume = ({ handleRowClick }) => {
  return (
    <div className="h-96">
      <DataGrid
        onRowClick={handleRowClick}
        rows={TradingVolume}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default TableVolume;
