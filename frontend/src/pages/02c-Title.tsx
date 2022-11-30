import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import Filter from "../components/02c-Filter";
import PopupAddTitle from "../components/02c-PopupAddTitle";
import PopupEditTitle from "../components/02c-PopupEditTitle";
import "../styles/02c-title.css";
import EditEmployee from "./02d-EditEmployee";

export default function Title() {
  const [showList, setShowList] = useState(true);
  const [passId, setPassId] = useState("");
  const [passEmployeeid, setPassEmployeeid] = useState("");
  const [passFirstName, setPassFirstName] = useState("");
  const [passLastName, setPassLastName] = useState("");
  const [passChineseName, setPassChineseName] = useState("");

  // table columns
  const columns = [
    {
      name: "Employee Photo",
      selector: (row: any) => row.photo,
    },
    {
      name: "Employee ID",
      selector: (row: any) => row.employeeid,
      sortable: true,
    },
    {
      name: "Employee",
      selector: (row: any) => row.employee,
      sortable: true,
    },
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
            employeeid: employee.employeeid,
            first_name: employee.first_name,
            last_name: employee.last_name,
            chinese_name: employee.chinese_name,
            alias: employee.alias,
            hkid: employee.hkid,
            passport: employee.passport,
            gender: employee.gender,
            title: employee.title_name,
            department: employee.dept_name,
            team: employee.team_name,
            nature: employee.job_nature,
            employee: employee.alias + " " + employee.last_name,
            photo: (
              <img
                className="title_employee_photo"
                src={process.env.PUBLIC_URL + employee.profilepic}
                alt="image"
              />
            ),
            edit: (
              <button
                onClick={() => {
                  setShowList(false);
                  setPassId(employee.id);
                  setPassEmployeeid(employee.employeeid);
                  setPassFirstName(employee.first_name);
                  setPassLastName(employee.last_name);
                  setPassChineseName(employee.chinese_name);
                }}
              >
                Edit
              </button>
            ),
            // edit: (
            //   <PopupEditTitle
            //     employeeTitle={employee.title_name}
            //     employeeDepartment={employee.dept_name}
            //   />
            // ),
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

  // TODO cannot filter capital letter
  const filteredItems = data.filter(
    (item: any) =>
      (item.employeeid && item.employeeid.toLowerCase().includes(filterText)) ||
      (item.employee && item.employee.toLowerCase().includes(filterText)) ||
      (item.title && item.title.toLowerCase().includes(filterText)) ||
      (item.department && item.department.toLowerCase().includes(filterText)) ||
      (item.team && item.team.toLowerCase().includes(filterText)) ||
      (item.nature && item.nature.toLowerCase().includes(filterText))
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
    <>
      {showList ? (
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
      ) : (
        <EditEmployee
          editId={passId}
          editEmployeeid={passEmployeeid}
          editFirstName={passFirstName}
          editLastName={passLastName}
          editChineseName={passChineseName}
        />
      )}

      {!showList && <button onClick={() => setShowList(true)}>Cancel</button>}
    </>
  );
}
