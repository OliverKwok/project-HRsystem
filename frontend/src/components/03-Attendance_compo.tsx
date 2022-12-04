// 想係typescript用emotion就要加呢句
//emotion 係 css in js 嘅其中一款
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
interface attendanceState {
  employeeId: number;
  date: string;
  time_checkedin: string;
  time_checkedout: string;
  status: string;
}
interface show_word_state {
  id: number;
  employeeid: string;
  first_name: string;
  last_name: string;
  dept_name: string;
  gender: string;
}
interface attendInfoState {
  isShow: boolean;
  status: string;
  employee: number;
  date: string;
  time_checkedin: string;
  time_checkedout: string;
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

function Attendance_compo({
  show_word,
  header_info,
  handleClickOpen,
}: // obj,
{
  show_word: show_word_state;
  header_info: headerState;
  handleClickOpen: (
    status: string,
    employee: number,
    date: string,
    time_checkedin: string,
    time_checkedout: string,
    employeeIdFull: string
  ) => void;
  // obj: attendInfoState;
}) {
  const [workedDays, setWorkDays] = useState(0);
  const [attendanceRecord, setAttendanceRecord] = useState([]);
  const [leaveType, setLeaveType] = useState([]);

  async function fetchAttendance() {
    try {
      const options = { method: "GET" };
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/attendance/getAttendanceRecord/${show_word.id}/${header_info.year}/${header_info.month}`,
        options
      );

      let attendanceRecord = await res.json();
      attendanceRecord = attendanceRecord["res"];

      setAttendanceRecord(attendanceRecord);
    } catch {
      console.log("fetch fail");
    }
  }
  // async function fetchLeaveRecord() {
  //   try {
  //     const options = { method: "GET" };
  //     let res = await fetch(
  //       `${process.env.REACT_APP_BACKEND_URL}/attendance/getLeaveRecord/${show_word.id}/${header_info.year}/${header_info.month}`,
  //       options
  //     );

  //     let leaveRecord = await res.json();
  //     leaveRecord = leaveRecord["res"];

  //     setLeaveRecord(leaveRecord);
  //   } catch {
  //     console.log("fetch fail");
  //   }
  // }

  useEffect(() => {
    fetchAttendance();
  }, [header_info]);

  function handleClick(
    status: string,
    employee: number,
    date: string,
    time_checkedin: string,
    time_checkedout: string,
    employeeIdFull: string
  ) {
    // alert("click open");
    // console.log(day_of_week[0]["status"]);
    handleClickOpen(
      status,
      employee,
      date,
      time_checkedin,
      time_checkedout,
      employeeIdFull
    );
  }
  const attendDays_arr = attendanceRecord.map((data) => data["status"]);
  const punctualDays = attendDays_arr.reduce(
    (count: number, b) => (b == "punctual" ? count + 1 : count),
    0
  );
  const lateDays = attendDays_arr.reduce(
    (count: number, b) => (b == "late" ? count + 1 : count),
    0
  );

  return (
    <div className="attendance-row">
      <div className="attendance-info">{show_word.employeeid}</div>
      <div className="attendance-info">{show_word.last_name}</div>
      <div className="attendance-info">{show_word.first_name}</div>
      <div className="attendance-info">{show_word.dept_name}</div>
      <div className="attendance-loop-container">
        {new Array(header_info.month_days)
          .fill(0)
          .map(function (_: any, index: number) {
            let day_of_week: any = attendanceRecord.filter(
              (data) => new Date(data["date"]).getDate() === index + 1
            );
            // console.log(day_of_week);

            return new Date(
              `${header_info.year},${header_info.month},${index + 1}`
            ).getDay() == 6 ||
              new Date(
                `${header_info.year},${header_info.month},${index + 1}`
              ).getDay() == 0 ? (
              <SatOrSun className="attendance-loop" key={index}>
                {day_of_week.length == 1 ? day_of_week[0]["status"] : ""}
              </SatOrSun>
            ) : day_of_week.length == 1 ? (
              day_of_week[0]["status"] == "punctual" ? (
                <Punctual
                  className="attendance-loop"
                  onClick={() => {
                    console.log(day_of_week[0]["status"]);
                    handleClick(
                      day_of_week[0]["status"],
                      day_of_week[0]["employee"],
                      day_of_week[0]["date"],
                      day_of_week[0]["time_checkedin"],
                      day_of_week[0]["time_checkedout"],
                      show_word["employeeid"]
                    );
                  }}
                  key={index}
                >
                  P
                </Punctual>
              ) : day_of_week[0]["status"] == "late" ? (
                <Late
                  className="attendance-loop"
                  onClick={() => {
                    console.log(day_of_week[0]["status"]);
                    handleClick(
                      day_of_week[0]["status"],
                      day_of_week[0]["employee"],
                      day_of_week[0]["date"],
                      day_of_week[0]["time_checkedin"],
                      day_of_week[0]["time_checkedout"],
                      show_word["employeeid"]
                    );
                  }}
                  key={index}
                >
                  L
                </Late>
              ) : day_of_week[0]["status"] == "absent" ? (
                <Absent
                  className="attendance-loop"
                  onClick={() => {
                    console.log(day_of_week[0]["status"]);
                    handleClick(
                      day_of_week[0]["status"],
                      day_of_week[0]["employee"],
                      day_of_week[0]["date"],
                      day_of_week[0]["time_checkedin"],
                      day_of_week[0]["time_checkedout"],
                      show_word["employeeid"]
                    );
                  }}
                  key={index}
                >
                  A
                </Absent>
              ) : (
                <Other
                  className="attendance-loop"
                  onClick={() => {
                    let status = day_of_week[0] ? day_of_week[0]["status"] : "";
                    let employeeId = day_of_week[0]
                      ? day_of_week[0]["employeeId"]
                      : show_word["id"];
                    let date = day_of_week[0]
                      ? day_of_week[0]["date"]
                      : `${header_info.year}-${header_info.month}-${index + 1}`;
                    let time_checkedin = day_of_week[0]
                      ? day_of_week[0]["time_checkedin"]
                      : "";
                    let time_checkedout = day_of_week[0]
                      ? day_of_week[0]["time_checkedout"]
                      : "";
                    handleClick(
                      day_of_week[0]["status"],
                      day_of_week[0]["employee"],
                      day_of_week[0]["date"],
                      day_of_week[0]["time_checkedin"],
                      day_of_week[0]["time_checkedout"],
                      show_word["employeeid"]
                    );
                  }}
                  key={index}
                >
                  {day_of_week[0]["status"]}
                </Other>
              )
            ) : (
              <Nothing
                className="attendance-loop"
                onClick={() => {
                  let status = day_of_week[0] ? day_of_week[0]["status"] : "";
                  let employeeId = day_of_week[0]
                    ? day_of_week[0]["employeeId"]
                    : show_word["id"];
                  let date = day_of_week[0]
                    ? day_of_week[0]["date"]
                    : `${header_info.year}-${header_info.month}-${index + 1}`;
                  let time_checkedin = day_of_week[0]
                    ? day_of_week[0]["time_checkedin"]
                    : "";
                  let time_checkedout = day_of_week[0]
                    ? day_of_week[0]["time_checkedout"]
                    : "";
                  handleClick(
                    status,
                    employeeId,
                    date,
                    time_checkedin,
                    time_checkedout,
                    show_word["employeeid"]
                  );
                }}
                key={index}
              ></Nothing>
            );
          })}
      </div>
      <div className="header-action">
        <div>{punctualDays}</div>
      </div>
      <div className="header-action">
        <div>{lateDays}</div>
      </div>
    </div>
  );
}

export default Attendance_compo;

export const SatOrSun = styled.div`
  background-color: #9294a2;
  pointer-events: none;
`;

export const Punctual = styled.div`
  background-color: #deeeee;
  &:hover {
    transform: scale(1.12);
    background-color: #c6e9e9;
  }
`;

export const Late = styled.div`
  background-color: #d4a76f;
  &:hover {
    transform: scale(1.12);
    background-color: #cf954e;
  }
`;
export const Absent = styled.div`
  background-color: #ef6b6b;
  &:hover {
    transform: scale(1.12);
    background-color: #e95353;
  }
`;

export const Other = styled.div`
  background-color: #75a5e0;
  &:hover {
    transform: scale(1.12);
    background-color: #4581cb;
  }
`;

export const Nothing = styled.div`
  background-color: #f3fbfd;
  &:hover {
    transform: scale(1.12);
    background-color: #d9f6ff;
  }
`;
