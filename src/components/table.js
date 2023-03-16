import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FormDialog from "./form-dialog";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { operations, selectors } from "../store/table";
import { useDispatch, useSelector } from "react-redux";

export default function Table() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.table.users);

  // const resultData = useSelector(selectors.getData);

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
      valueGetter: (params) => {
        return `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`;
      },
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
    dispatch(operations.removeUser(row));
  };

  const handleNewItem = (value) => {
    dispatch(operations.addNewUser(value));
  };

  return (
    <>
      <FormDialog onFormSubmit={handleNewItem} />
      <div style={{ height: 400, width: "100%", display: "flex" }}>
        <DataGrid
          rows={data}
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
