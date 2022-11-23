import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import Filter from "../components/02c-Filter";
import PopupAddTitle from "../components/02c-PopupAddTitle";
import PopupEditTitle from "../components/02c-PopupEditTitle";
import "../styles/02c-title.css";

export default function Title() {
  // table columns
  const columns = [
    {
      name: "Title",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row: any) => row.department,
      sortable: true,
    },

    {
      name: "Team",
      selector: (row: any) => row.team,
      sortable: true,
    },

    {
      name: "Nature",
      selector: (row: any) => row.nature,
      sortable: true,
    },
    {
      name: "Employee",
      selector: (row: any) => row.employee,
      sortable: true,
    },
    {
      name: "Employee Photo",
      selector: (row: any) => row.photo,
    },
    {
      name: "Edit",
      selector: (row: any) => row.edit,
    },
  ];

  const [data, setData] = useState<any[]>([]);

  // table rows (data)
  const requestOptions = {
    method: "Get",
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/title/all`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        let fetchData = data.map((employee: any) => {
          return {
            id: employee.id,
            title: employee.title_name,
            department: employee.dept_name,
            team: employee.team_name,
            nature: employee.job_nature,
            employee: employee.last_name +", "+ employee.first_name,
            photo: (
              <img
                className="title_employee_photo"
                src={process.env.PUBLIC_URL + employee.profilepic}
                alt="image"
              />
            ),
            edit: <PopupEditTitle />,
          };
        });
        // console.log(fetchData);
        setData(fetchData);
      });
  }, []);

  // pagination configuration
  const paginationComponentOptions = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  // filtering
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = data.filter(
    (item: any) =>
      (item.title && item.title.toLowerCase().includes(filterText)) ||
      (item.employee && item.employee.toLowerCase().includes(filterText)) ||
      (item.department && item.department.toLowerCase().includes(filterText)) ||
      (item.nature && item.nature.toLowerCase().includes(filterText)) ||
      (item.grade && item.grade.toLowerCase().includes(filterText))
  );
  // const filteredItems = data.filter(
  //   (item) =>
  //     JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
  //     -1
  // );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <Filter
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  //rendering

  return (
    <div>
      <PopupAddTitle />
      {data.length > 0 && (
        <DataTable
          title="Titles"
          columns={columns}
          data={filteredItems}
          striped
          pagination
          paginationComponentOptions={paginationComponentOptions}
          subHeader
          subHeaderComponent={subHeaderComponent}
        />
      )}
    </div>
  );
}
