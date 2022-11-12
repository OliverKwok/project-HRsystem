import React from "react";
import DataTable from "react-data-table-component";
import "./styles/02c-title.css";

const Title = () => {
  const columns = [
    {
      name: "Title",
      selector: (row: any) => row.title,
    },
    {
      name: "Department",
      selector: (row: any) => row.department,
    },

    {
      name: "Grade",
      selector: (row: any) => row.grade,
    },
    {
      name: "Employee",
      selector: (row: any) => row.employee,
    },
    {
      name: "Employee Photo",
      selector: (row: any) => row.photo,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Admin Assistant",
      department: "Administration",
      grade: "E1",
      employee: "Mary Lam",
      photo: <img className="title_employee_photo" src="https://images.pexels.com/photos/3041768/pexels-photo-3041768.jpeg?cs=srgb&dl=pexels-danil-shostak-3041768.jpg&fm=jpg&_gl=1*hp5cao*_ga*MTE1NDk5Mjc2LjE2NjYwNjMzMzQ.*_ga_8JE65Q40S6*MTY2ODI1NTM1Ni4zLjEuMTY2ODI1NTM3MS4wLjAuMA.."></img>,
    },
    {
      id: 2,
      title: "Finance Manager",
      department: "Finance",
      grade: "B2",
      employee: "Peter Chan",
      photo: <img className="title_employee_photo" src="https://images.pexels.com/photos/14350440/pexels-photo-14350440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Title;
