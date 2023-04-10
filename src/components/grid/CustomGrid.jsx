import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

function CustomGrid({
  data,
  handleDelete,
  path,
  fullname = "username",
  major,
  gender,
  billColums,
}) {
  const columns = [
    { index: 1, field: "id", headerName: "ID", width: 90, align: "center" },
    {
      index: 2,
      field: fullname,
      headerName: "Họ Tên",
      width: 150,
      editable: true,
      headerAlign: "center",
    },
    {
      index: 3,
      field: "email",
      headerName: "Email",
      width: 160,
      editable: true,
      headerAlign: "center",
    },
    {
      index: 4,
      field: "createdAt",
      headerName: "Ngày đăng kí",
      width: 160,
      editable: true,
      headerAlign: "center",
    },
    {
      index: 100,
      field: "action",
      headerName: "Action",
      width: 300,
      editable: true,
      headerAlign: "center",
      renderCell: (row) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`${path}${row.row._id}`}>
              <button className="btn btn-primary">View</button>
            </Link>
            <button
              onClick={() => handleDelete(row.row._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  const newCols = [
    {
      index: 5,
      field: "major",
      headerName: "Khoa",
      width: 200,
      editable: true,
      headerAlign: "center",
    },
  ];
  const newColsGender = [
    {
      index: 6,
      field: "gender",
      headerName: "Giới tính",
      width: 80,
      editable: true,
      headerAlign: "center",
      renderCell: (row) => {
        return (
          <div>
            {row?.row?.gender === 1 && "Nam"}
            {row?.row?.gender === 2 && "Nữ"}
            {row?.row?.gender === 3 && "Khác"}
          </div>
        );
      },
    },
  ];
  const [newRows, setNewRows] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      let arr = [];
      arr = data.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      setNewRows(arr);
    }
  }, [data]);
  const handleRenderCols = () => {
    if (gender && major) {
      return columns
        .concat(newCols)
        .concat(newColsGender)
        .sort((a, b) => a.index - b.index);
    } else if (gender) {
      return columns.concat(newColsGender).sort((a, b) => a.index - b.index);
    } else if (major) {
      return columns.concat(newCols).sort((a, b) => a.index - b.index);
    } else {
      return columns;
    }
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={newRows.length > 0 ? newRows : []}
        columns={billColums ? billColums : handleRenderCols()}
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
