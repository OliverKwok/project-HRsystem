import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../styles/02c-title.css";
import Filter from "../components/02c-Filter";
import PopupAddTitle from "../components/02c-PopupAddTitle";
import PopupEditTitle from "../components/02c-PopupEditTitle";
import { timeLog } from "console";

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

    // {
    //   name: "Grade",
    //   selector: (row: any) => row.grade,
    //   sortable: true,
    // },

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
        console.log(data);
        let fetchData = data.map((employee: any) => {
          return {
            id: employee.id,
            title: employee.title_name,
            department: employee.dept_name,
            nature: employee.job_nature,
            employee: employee.first_name + employee.last_name,
            photo: (
              <img
                className="title_employee_photo"
                src="../public/profilepic/"
                {...employee.profilepic}
              ></img>
            ),
            edit: <PopupEditTitle />,
          };
        });
        console.log(fetchData);
        setData(fetchData);
      });
  }, []);

  // console.log(setData);

  //       data = fetchTitles;
  //     });
  //   return data;
  // }
  // fetchData();

  // const data = [
  //   {
  //     id: 1,
  //     title: "Admin Assistant",
  //     department: "Administration",
  //     grade: "E1",
  //     nature: "temp",
  //     employee: "Mary Lam",
  //     photo: (
  //       <img
  //         className="title_employee_photo"
  //         src="https://images.pexels.com/photos/3041768/pexels-photo-3041768.jpeg?cs=srgb&dl=pexels-danil-shostak-3041768.jpg&fm=jpg&_gl=1*hp5cao*_ga*MTE1NDk5Mjc2LjE2NjYwNjMzMzQ.*_ga_8JE65Q40S6*MTY2ODI1NTM1Ni4zLjEuMTY2ODI1NTM3MS4wLjAuMA.."
  //       ></img>
  //     ),
  //     edit: <PopupEditTitle />,
  //   },
  //   {
  //     id: 2,
  //     title: "Finance Manager",
  //     department: "Finance",
  //     grade: "B2",
  //     nature: "perm",
  //     employee: "Peter Chan",
  //     photo: (
  //       <img
  //         className="title_employee_photo"
  //         src="https://images.pexels.com/photos/9758175/pexels-photo-9758175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //       ></img>
  //     ),
  //     edit: <PopupEditTitle />,
  //   },
  //   {
  //     id: 3,
  //     title: "Sales Officer",
  //     department: "Sales",
  //     grade: "C3",
  //     nature: "contract",
  //     employee: "Olivia Law",
  //     photo: (
  //       <img
  //         className="title_employee_photo"
  //         src="https://images.pexels.com/photos/14349266/pexels-photo-14349266.jpeg?auto=compress&cs=tinysrgb&w=600"
  //       ></img>
  //     ),
  //     edit: <PopupEditTitle />,
  //   },
  // ];

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
          // striped
          pagination
          paginationComponentOptions={paginationComponentOptions}
          subHeader
          subHeaderComponent={subHeaderComponent}
        />
      )}
    </div>
  );
}
