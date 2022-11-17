import React, { useEffect, useState } from "react";

function Attendance_compo({
  show_word,
  month_days,
  handleClickOpen,
  onClick,
}: {
  show_word:
    | {
        id: number;
        name: string;
        department: string;
        grade: string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
        "21": string;
        "22": string;
        "23": string;
        "24": string;
        "25": string;
        "26": string;
        "27": string;
        "28": string;
        "29": string;
        "30": string;
        "31": string;
      }
    | any;
  month_days: number;
  handleClickOpen: () => void;
  onClick: (status: string) => void;
}) {
  const [workedDays, setWorkDays] = useState(0);
  useEffect(() => {
    const ary = Object.values(show_word);
    const ans = ary.reduce(
      (count: number, b) => (b == "P" ? count + 1 : count),
      0
    );
    setWorkDays(ans);
  }, [show_word]);

  return (
    <div className="attendance-row">
      <div className="attendance-info">{show_word.name}</div>
      <div className="attendance-info">{show_word.department}</div>
      <div className="attendance-info">{show_word.grade}</div>
      <div className="attendance-loop-container">
        {new Array(month_days).fill(0).map((_: any, index: number) => {
          return (
            <div
              className="attendance-loop"
              onClick={() => {
                handleClickOpen();
                onClick(show_word[index + 1]);
              }}
              key={index + 1}
            >
              {show_word[index + 1]}
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
