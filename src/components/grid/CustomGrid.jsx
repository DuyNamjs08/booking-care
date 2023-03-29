import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function CustomGrid(props) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Họ Tên",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Tuổi",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 110,
    editable: true,
  },
  {
    field: "department",
    headerName: "Khoa",
    width: 110,
    editable: true,
  },
  {
    field: "fromdate",
    headerName: "Ngày vào",
    width: 110,
    editable: true,
  },
  {
    field: "enddate",
    headerName: "Ngày Ra",
    width: 110,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
    editable: true,
    renderCell: (row) => {
      return (
        <div>
          <button className="btn btn-primary">Xem chi tiết</button>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, name: "Snow", age: 35 },
  { id: 2, name: "Lannister", age: 42 },
  { id: 3, name: "Lannister", age: 45 },
  { id: 4, name: "Stark", age: 16 },
  { id: 5, name: "Targaryen", age: null },
  { id: 6, name: "Melisandre", age: 150 },
  { id: 7, name: "Clifford", age: 44 },
  { id: 8, name: "Frances", age: 36 },
  { id: 9, name: "Roxie", age: 65 },
];
export default CustomGrid;
