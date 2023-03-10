import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FormDialog from "./form-dialog";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Table(mockDataProps) {
  const [rows, addRows] = React.useState(mockDataProps.mockData);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "Actions columns",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <Button
            onClick={(e) => onButtonClick(e, params.row)}
            variant="contained"
            color="primary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    addRows(preState => preState.filter(user => user.id !== row.id))
  };

  const handleNewItem = (value) => {
    addRows((preState) => [
      ...preState,
      {
        id: preState.length + 1,
        lastName: value.lastName || "",
        firstName: value.firstName || "",
        age: value.age || "",
      },
    ]);
  };

  return (
    <>
      <FormDialog onFormSubmit={handleNewItem} />
      <div style={{ height: 400, width: "100%", display: "flex" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
