// 想係typescript用emotion就要加呢句
//emotion 係 css in js 嘅其中一款
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
interface attendanceState {
  employeeId: number;
  date: string;
  time_checkedin: string;
  time_checkedout: string;
  status: string;
}
interface show_word_state {
  employeeId: number;
  name: string;
  department: string;
  grade: string;
  attendance: attendanceState[];
}
interface state {
  isShow: boolean;
  attendanceStatus: string;
  employeeId: number;
  attendanceDate: string;
}

interface headerState {
  name: string;
  department: string;
  grade: string;
  year: number;
  month: number;
  month_days: number;
}

function Attendance_compo({
  show_word,
  header_info,
  handleClickOpen,
  obj,
}: {
  show_word: show_word_state;
  header_info: headerState;
  handleClickOpen: (
    status: string,
    employeeId: number,
    attendanceDate: string
  ) => void;
  obj: state;
}) {
  const [workedDays, setWorkDays] = useState(0);
  useEffect(() => {
    const ans_arr = show_word.attendance.map((data) => data.status);
    // console.log(ans_arr);

    const ans = ans_arr.reduce(
      (count: number, b) => (b == "P" || b == "L" ? count + 1 : count),
      0
    );
    // console.log(ans);

    setWorkDays(ans);
  }, [show_word]);

  function handleClick(
    status: string,
    employeeId: number,
    attendanceDate: string
  ) {
    // alert("click open");
    // console.log(day_of_week[0]["status"]);
    handleClickOpen(status, employeeId, attendanceDate);
  }

  return (
    <div className="attendance-row">
      <div className="attendance-info">{show_word.name}</div>
      <div className="attendance-info">{show_word.department}</div>
      <div className="attendance-info">{show_word.grade}</div>
      <div className="attendance-loop-container">
        {new Array(new Date(2022, header_info.month, 0, 0, 0, 0, 0).getDate())
          .fill(0)
          .map(function (_: any, index: number) {
            let day_of_week: any = show_word.attendance.filter(
              (data) => new Date(data.date).getDate() === index + 1
            );

            return new Date(
              `${new Date(
                `${show_word.attendance[0]["date"]}`
              ).getFullYear()},${
                new Date(`${show_word.attendance[0]["date"]}`).getMonth() + 1
              },${index + 1}`
            ).getDay() == 6 ||
              new Date(
                `${new Date(
                  `${show_word.attendance[0]["date"]}`
                ).getFullYear()},${
                  new Date(`${show_word.attendance[0]["date"]}`).getMonth() + 1
                },${index + 1}`
              ).getDay() == 0 ? (
              <div
                className="attendance-loop"
                onClick={() => {
                  // console.log(day_of_week[0]["status"]);
                  // handleClick(
                  //   day_of_week[0]["status"],
                  //   day_of_week[0]["employeeId"],
                  //   day_of_week[0]["date"]
                  // );
                }}
                key={index}
                css={css`
                  background-color: #9294a2;
                  pointer-events: none;
                `}
              >
                {day_of_week.length == 1 ? day_of_week[0]["status"] : ""}
              </div>
            ) : (
              <div
                className="attendance-loop"
                onClick={() => {
                  let status = day_of_week[0] ? day_of_week[0]["status"] : "";
                  let employeeId = day_of_week[0]
                    ? day_of_week[0]["employeeId"]
                    : show_word.employeeId;
                  let date = day_of_week[0]
                    ? day_of_week[0]["date"]
                    : `${header_info.year}-${header_info.month}-${index + 1}`;

                  handleClick(status, employeeId, date);
                }}
                key={index}
              >
                {day_of_week.length == 1 ? day_of_week[0]["status"] : ""}
              </div>
            );
          })}
      </div>
      <div className="header-action">
        <div>{workedDays}</div>
      </div>
    </div>
  );
}

export default Attendance_compo;
