import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data } from "react-data-grid-addons";

export default function Users() {
  const data = [
    { id: 0, name: "Abhishek", title: "row1", count: 20 },
    { id: 1, name: "Vishnu", title: "row1", count: 40 },
    { id: 2, name: "Ankit", title: "row1", count: 60 },
  ];

  const columns = [
    { key: "id", name: "ID", sortable: true },
    {
      key: "name",
      name: "Name",
      editable: true,
      sortable: true,
      filterable: true,
    },
    {
      key: "title",
      name: "Title",
      editable: true,
      sortable: true,
      filterable: true,
    },
    {
      key: "count",
      name: "Count",
      editable: true,
      sortable: true,
      filterable: true,
    },
  ];
  const [rows, setRows] = useState(data);
  const [filters, setFilters] = useState({});
  const selectors = Data.Selectors;

  const getRows = (rows, filters) => {
    return selectors.getRows({ rows, filters });
  };

  const filteredRows = getRows(rows, filters);

  const rowGetter = (rowNumber) => filteredRows[rowNumber];

  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const item = rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      item[i] = { ...item[i], ...updated };
    }
    setRows(item);
  };

  const sortRows = (initialRows, sortColumn, sortType) => (rows) => {
    const comparer = (a, b) => {
      if (sortType === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortType === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    return sortType === "NONE" ? initialRows : [...rows].sort(comparer);
  };

  const handleFilterChange = (filter) => (filters) => {
    const newFilters = { ...filters };
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    return newFilters;
  };

  return (
    <div>
      <h1>Users Table</h1>
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={rowGetter}
          rowsCount={filteredRows.length}
          minHeight={300}
          onGridRowsUpdated={onGridRowsUpdated}
          enableCellSelect={true}
          enableCellAutoFocus={false}
          toolbar={<Toolbar enableFilter={true} />}
          onGridSort={(sortColumn, sortType) => {
            setRows(sortRows(data, sortColumn, sortType));
          }}
          onAddFilter={(filter) => {
            setFilters(handleFilterChange(filter));
          }}
          onClearFilters={() => setFilters({})}
        />
      </div>
    </div>
  );
}
