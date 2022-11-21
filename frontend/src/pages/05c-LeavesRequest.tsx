import React, { useState } from "react";

export default function LeavesRequest() {
  const data = [
    {
      Employee: "Amy Chan",
      LeaveType: "Annual Leave",
      AppliedDate: "2022-11-18",
      FromDate: "2022-12-20",
      ToDate: "2022-12-31",
      Duration: "10 days",
      Status: "pending",
      Action: "Approve/Cancel/Delete",
    },
    {
      Employee: "Peter So",
      LeaveType: "Annual Leave",
      AppliedDate: "2022-11-18",
      FromDate: "2022-12-20",
      ToDate: "2022-12-21",
      Duration: "1 day",
      Status: "pending",
      Action: "Approve/Cancel/Delete",
    },
  ];
  const [rows, setRows] = useState(data);

  const Row = (props: any) => {
    const {
      Employee,
      LeaveType,
      AppliedDate,
      FromDate,
      ToDate,
      Duration,
      Status,
      Action,
    } = props;
    return (
      <tr>
        <td>{Employee}</td>
        <td>{LeaveType}</td>
        <td>{AppliedDate}</td>
        <td>{FromDate}</td>
        <td>{ToDate}</td>
        <td>{Duration}</td>
        <td>{Status}</td>
        <td>{Action}</td>
      </tr>
    );
  };

  const Table = (props: any) => {
    const { data } = props;
    return (
      <table>
        <tbody>
          {data.map((row: any, index: any) => (
            <Row
              key={index}
              Employee={row.Employee}
              LeaveType={row.LeaveType}
              AppledDate={row.AppliedDate}
              FromDate={row.FromDate}
              ToDate={row.ToDate}
              Duration={row.Duration}
              Status={row.Status}
              Action={row.Action}
            />
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <Table data={rows} />
    </>
  );
}
