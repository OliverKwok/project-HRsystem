// 想係typescript用emotion就要加呢句
//emotion 係 css in js 嘅其中一款
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

function Attendance_compo({
  show_word,
  month_days,
  handleClickOpen,
  onClick,
}: {
  show_word: {
    employeeId: number;
    name: string;
    department: string;
    grade: string;
    attendance: {
      employeeId: number;
      date: string;
      time_checkedin: string;
      time_checkedout: string;
      status: string;
    }[];
  };
  month_days: number;
  handleClickOpen: () => void;
  onClick: (status: string) => void;
}) {
  const [workedDays, setWorkDays] = useState(0);
  useEffect(() => {
    const ans_arr = show_word.attendance.map((data) => data.status);
    console.log(ans_arr);

    const ans = ans_arr.reduce(
      (count: number, b) => (b == "P" || b == "L" ? count + 1 : count),
      0
    );
    console.log(ans);

    // console.log(
    //   show_word.attendance
    //     .map((data) => data.status)
    //     .reduce(function (count: number, b: string) {
    //       b == "P" ? count + 1 : count;
    //     }, 0)
    // );

    // const ary = Object.values(show_word);
    // const ans = ary.reduce(
    //   (count: number, b) => (b == "P" ? count + 1 : count),
    //   0
    // );

    setWorkDays(ans);
  }, [show_word]);

  return (
    <div className="attendance-row">
      <div className="attendance-info">{show_word.name}</div>
      <div className="attendance-info">{show_word.department}</div>
      <div className="attendance-info">{show_word.grade}</div>
      <div className="attendance-loop-container">
        {new Array(month_days).fill(0).map(function (_: any, index: number) {
          let day_of_week: any = show_word.attendance.filter(
            (data) => new Date(data.date).getDate() === index + 1
          );

          return new Date(
            `${new Date(`${show_word.attendance[0]["date"]}`).getFullYear()},${
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
                handleClickOpen();
                // onClick();
              }}
              key={index}
              css={css`
                background-color: #9294a2;
              `}
            >
              {day_of_week.length == 1 ? day_of_week[0]["status"] : ""}
            </div>
          ) : (
            <div
              className="attendance-loop"
              onClick={() => {
                handleClickOpen();
                // onClick();
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
