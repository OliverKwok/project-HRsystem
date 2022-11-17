/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Fragment, useState } from "react";
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

const Attendance = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
  console.log(value);
  const handleClickOpen = () => {
    setShowPopUp(true);
  };
  const handleClickClose = () => {
    setShowPopUp(false);
  };

  let header_name = {
    name: "Name",
    department: "Department",
    grade: "Grade",
    year: 2022,
    month: 11,
    month_days: 31,
  };

  // console.log(
  //   new Date(`
  //   ${header_name.year},
  //   ${header_name.month},
  //   ${header_name.month_days}
  //   `).getDay()
  // );

  return (
    <>
      <div className="month-picker-container">
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
          <div className="attendance-info">{header_name.name}</div>
          <div className="attendance-info">{header_name.department}</div>
          <div className="attendance-info">{header_name.grade}</div>
          <div className="attendance-loop-container">
            {new Array(header_name.month_days)
              .fill(0)
              .map((_: any, index: number) => {
                return new Date(`
                ${header_name.year},
                ${header_name.month},
                ${index + 1}
                `).getDay() === 6 ||
                  new Date(`
                ${header_name.year},
                ${header_name.month},
                ${index + 1}
                `).getDay() === 0 ? (
                  <div
                    className="attendance-loop"
                    key={index + 1}
                    css={css`
                      background-color: #9294a2;
                    `}
                  >
                    {index + 1}
                  </div>
                ) : (
                  <div className="attendance-loop" key={index + 1}>
                    {index + 1}
                  </div>
                );
              })}
          </div>
          <div className="header-action">出席日子</div>
        </div>
        {data_arr.map((data) => {
          return (
            <Attendance_compo
              show_word={data}
              month_days={header_name.month_days}
              handleClickOpen={handleClickOpen}
              onClick={(status: string) => {
                setAttendanceStatus(status);
                console.log(status);
              }}
              key={data.employeeId}
            />
          );
        })}
        {showPopUp && <PopUp handleClickClose={handleClickClose} />}
      </div>
    </>
  );
};

export default Attendance;
