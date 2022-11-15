import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DataTable, { TableColumn } from "react-data-table-component";
import AnimatedMulti from "../components/04a-MonthFilter"

type DataRow = {
  year_month: string;
  employeeID: string;
  first_name: string;
  last_name: string;
  basic_salary: string;
  AL_pay: string;
  mpf: string;
  net_pay: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: "Year - Month",
    selector: (row) => row.year_month,
    sortable: true,
  },
  {
    name: "Employee ID",
    selector: (row) => row.employeeID,
    sortable: true,
  },
  {
    name: "First Name",
    selector: (row) => row.first_name,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.last_name,
    sortable: true,
  },
  {
    name: "AL Payment",
    selector: (row) => row.AL_pay,
    sortable: true,
  },

  {
    name: "MPF",
    selector: (row) => row.mpf,
    sortable: true,
  },
  {
    name: "Net Pay",
    selector: (row) => row.net_pay,
    sortable: true,
  },
];

const data = [
  {
    year_month: "2022-10",
    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-10",

    employeeID: "1",
    first_name: "James",
    last_name: "Chan",
    basic_salary: "14000",
    AL_pay: "400",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-10",
    employeeID: "1",
    first_name: "Good",
    last_name: "Morning",
    basic_salary: "20000",
    AL_pay: "10000",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-10",

    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-11",

    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-11",

    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-11",

    employeeID: "1",
    first_name: "Hello",
    last_name: "World",
    basic_salary: "30000",
    AL_pay: "2000",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-11",

    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-11",

    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-11",

    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
  {
    year_month: "2022-11",

    employeeID: "1",
    first_name: "Peter",
    last_name: "Wong",
    basic_salary: "15000",
    AL_pay: "300",
    mpf: "765",
    net_pay: "14535",
  },
];



const PaySummary = () => {

  return (
    <>
<AnimatedMulti />
      <DataTable pagination columns={columns} data={data} selectableRows />
    </>
  );
};

export default PaySummary;