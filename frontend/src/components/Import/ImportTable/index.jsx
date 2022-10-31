import React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

const rows = [
  { id: 1, tnved: "0123456789", name: "Медведи", netto: "1234" },
  { id: 2, tnved: "0123456789", name: "Белые Медведи", netto: "1234" },
  { id: 3, tnved: "0123456789", name: "Бесцветные Медведи", netto: "1234" },
];

const columns = [
  { field: "tnved", headerName: "ТН ВЭД", width: 150 },
  { field: "name", headerName: "Название товара", width: 150 },
  { field: "netto", headerName: "Объем", width: 150 },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ImportTable() {
  const handleEvent = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    console.log(params.row.col1);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
        checkboxSelection
        onRowClick={handleEvent}
      />
    </div>
  );
}
