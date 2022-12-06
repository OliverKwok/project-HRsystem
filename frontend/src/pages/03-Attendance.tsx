/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "styled-components";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import "../styles/03-Attendance.scss";
import { nanoid } from "nanoid";
// import path from "path";
// import * as fs from "fs";
import data_arr from "../jsonFiles/attendance_data.json";
import ReadOnlyRow from "../components/03-ReadOnlyRow";
import EditableRow from "../components/03-EditableRow";
import Attendance_compo from "../components/03-Attendance_compo";
import PopUp from "../components/03-PopUp";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";

interface attendanceInfoState {
  isShow: boolean;
  status: string;
  employeeId: number;
  attendanceDate: string;
  time_checkedin: string;
  time_checkedout: string;
  employeeIdFull: string;
}

interface headerState {
  employeeId: string;
  lastName: string;
  firstName: string;
  department: string;
  gender: string;
  year: number;
  month: number;
  month_days: number;
}

interface attendRecordType {
  id: number;
  employeeid: string;
  first_name: string;
  last_name: string;
  gender: string;
  dept_name: string;
  full_name: string;
}

const Attendance = () => {
  const [obj, setObj] = useState<attendanceInfoState>({
    isShow: false,
    status: "",
    employeeId: 0,
    attendanceDate: "",
    time_checkedin: "",
    time_checkedout: "",
    employeeIdFull: "",
  });

  const [value, setValue] = React.useState<any>(dayjs(new Date()));
  const [attend_preData, setAttend_preData] = useState<Array<attendRecordType>>(
    []
  );
  // const [searchFilter, setSearchFilter] = useState("");

  //import csv file in react
  const [file, setFile] = useState();
  const [array, setArray] = useState<any>([]);
  const [attendanceforSearch, setAttendanceforSearch] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = async (string: string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object: any, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    console.log(array, "from 90");

    console.log(
      new Date(array[0]["time_checkedin"]).getTime() >
        new Date(`${array[0]["date"]} 09:00:00`).getTime()
    );

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(array),
      // headers: { "Content-Type": "multi-type/form-data" },
      // body: formData,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/attendance/importAttendanceRecord`,
      requestOptions
    );
    const import_res = await res.json();
    console.log(import_res);

    setArray(array);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event: any) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
    // console.log(array, "from 106");
    getAttendance();
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  //get the record of attendance
  async function getAttendance() {
    try {
      const options = { method: "GET" };
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/attendance/getAttendance`,
        options
      );

      let attendanceRecord = await res.json();
      attendanceRecord = attendanceRecord["res"];

      for (let x = 0; x < attendanceRecord.length; x++) {
        // Object.assign(
        //   attendanceRecord[x],
        //   (attendanceRecord[x]["full_name"] =
        //     attendanceRecord[x]["last_name"] +
        //     " " +
        //     attendanceRecord[x]["first_name"])
        // );
        attendanceRecord[x]["full_name"] =
          attendanceRecord[x]["last_name"] +
          " " +
          attendanceRecord[x]["first_name"];
        // console.log(attendanceRecord[x]);
      }

      // attendanceRecord.sort((a: any, b: any) => {
      //   const firstName = a["last_name"].toUpperCase();
      //   const secondName = b["last_name"].toUpperCase();
      //   if (firstName < secondName) {
      //     return -1;
      //   }
      //   if (firstName > secondName) {
      //     return 1;
      //   }
      //   return 0;
      // });
      setAttendanceforSearch(attendanceRecord);
      setAttend_preData(attendanceRecord);
    } catch {
      console.log("fetch fail");
    }
  }

  useEffect(() => {
    getAttendance();
  }, []);
  // console.log(attend_preData);

  const handleClickOp = useCallback(
    (
      status: string,
      employee: number,
      date: string,
      time_checkedin: string,
      time_checkedout: string,
      employeeIdFull: string
    ) => {
      handleClickOpen(
        status,
        employee,
        date,
        time_checkedin,
        time_checkedout,
        employeeIdFull
      );
    },
    []
  );

  const handleClickOpen = (
    status: string,
    employeeId: number,
    attendanceDate: string,
    time_checkedin: string,
    time_checkedout: string,
    employeeIdFull: string
  ) => {
    setObj({
      ...obj,
      isShow: true,
      status: status,
      employeeId: employeeId,
      attendanceDate: attendanceDate,
      time_checkedin: time_checkedin,
      time_checkedout: time_checkedout,
      employeeIdFull: employeeIdFull,
    });

    console.log(obj);
  };

  const handleClickCl = useCallback(() => {
    handleClickClose();
  }, []);

  const handleClickClose = () => {
    setObj({
      ...obj,
      isShow: false,
    });
  };

  // console.log("from mui ", new Date(value).getFullYear());
  // console.log("from mui ", new Date(value).getMonth() + 1);

  let header_name: headerState = {
    employeeId: "Employee ID",
    lastName: "Last Name",
    firstName: "First Name",
    department: "Department",
    gender: "Gender",
    year: new Date(value).getFullYear(),
    month: new Date(value).getMonth() + 1,
    month_days: new Date(
      new Date(value).getFullYear(),
      new Date(value).getMonth() + 1,
      0,
      0,
      0,
      0,
      0
    ).getDate(),
  };

  let isOpen = true;

  return (
    <div className="bigPageContainer">
      <div className="month-picker-container">
        <div className="searchFilterContainer">
          <div className="searchText">Search by name :</div>
          <input
            type="text"
            name="name"
            className="searchFilter"
            onChange={(e) => {
              // setSearchFilter(e.target.value);
              console.log(attend_preData);
              // console.log(searchFilter);
              console.log(e.target.value);
              setAttend_preData(attendanceforSearch);

              const results = attendanceforSearch.filter((data: any) => {
                // if (e.target.value == "") {
                //   return;
                // }
                return (data["full_name"] as any)
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              });
              console.log(results);
              setAttend_preData(results);
            }}
          />
        </div>

        <div className="importCSVpartContainer">
          <form>
            <input
              // className="CSVinput custom-file-input"
              type={"file"}
              id={"csvFileInput"}
              accept={".csv"}
              onChange={handleOnChange}
            />

            <button
              className="importCSVbutton"
              onClick={(e) => {
                handleOnSubmit(e);
              }}
            >
              IMPORT CSV
            </button>
          </form>
        </div>
        <div className="month-picker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                views={["year", "month"]}
                label="Year and Month"
                minDate={dayjs("2018-01-01")}
                maxDate={dayjs("2023-06-01")}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </div>
      </div>

      <div className="attendance-container">
        <div className="header-attendance-row">
          <div className="attendance-info">{header_name.employeeId}</div>
          <div className="attendance-info">{header_name.lastName}</div>
          <div className="attendance-info">{header_name.firstName}</div>
          <div className="attendance-info">{header_name.department}</div>
          <div className="attendance-loop-container">
            {new Array(header_name.month_days)
              .fill(0)
              .map((_: any, index: number) => {
                return new Date(`
                ${header_name["year"]},
                ${header_name["month"]},
                ${index + 1}
                `).getDay() === 6 ||
                  new Date(`
                ${header_name.year},
                ${header_name.month},
                ${index + 1}
                `).getDay() === 0 ? (
                  <SatOrSun className="attendance-loop" key={index + 1}>
                    {index + 1}
                  </SatOrSun>
                ) : (
                  <div className="attendance-loop" key={index + 1}>
                    {index + 1}
                  </div>
                );
              })}
          </div>
          <div className="header-action">Days of Punctual</div>
          <div className="header-action">Days of Late</div>
        </div>
        {attend_preData.map((data) => {
          return (
            <Attendance_compo
              show_word={data}
              header_info={header_name}
              handleClickOpen={handleClickOp}
              // obj={obj}
              key={data.employeeid}
            />
          );
        })}
        {obj.isShow ? (
          <PopUp handleClickClose={handleClickCl} data={obj} />
        ) : null}
      </div>
    </div>
  );
};

export default Attendance;

export const SatOrSun = styled.div`
  background-color: #9294a2;
  // &:hover {
  //   background-color: white;
  // }
`;
