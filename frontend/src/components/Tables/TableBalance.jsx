import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { TradeBalance } from "../../store/mockDB.json";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  // { field: "tnved", headerName: "ТН ВЕД", width: 150 },
  { field: "ImportNettoAll", headerName: "Объем Импорта", width: 150 },
  { field: "ExportNettoAll", headerName: "Объем Экспорта", width: 150 },
  { field: "balance", headerName: "Баланс", width: 150 },
  { field: "name", headerName: "Наименование", width: 2000 },
];

const TableBalance = () => {
  return (
    <div className="h-96">
      <DataGrid
        rows={TradeBalance}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default TableBalance;
