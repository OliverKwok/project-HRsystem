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

const Attendance = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState("");
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
    month_days: 31,
  };

  return (
    <>
      <div className="attendance-container">
        <div className="header-attendance-row">
          <div className="attendance-info">{header_name.name}</div>
          <div className="attendance-info">{header_name.department}</div>
          <div className="attendance-info">{header_name.grade}</div>
          <div className="attendance-loop-container">
            {new Array(header_name.month_days)
              .fill(0)
              .map((_: any, index: number) => {
                return (
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
              key={data.id}
            />
          );
        })}
        {showPopUp && <PopUp handleClickClose={handleClickClose} />}
      </div>
    </>
  );
};

export default Attendance;
