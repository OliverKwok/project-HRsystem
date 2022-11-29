// import { R } from "chart.js/dist/chunks/helpers.core";
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
      ActionApprove: <button>Approve</button>,
      ActionCancel: <button>Cancel</button>,
    },
    {
      Employee: "Peter So",
      LeaveType: "Annual Leave",
      AppliedDate: "2022-11-18",
      FromDate: "2022-12-20",
      ToDate: "2022-12-21",
      Duration: "1 day",
      Status: "pending",
      ActionApprove: <button>Approve</button>,
      ActionCancel: <button>Cancel</button>,
    },
    {
      Employee: "Mandy Ho",
      LeaveType: "Annual Leave",
      AppliedDate: "2022-11-18",
      FromDate: "2022-12-20",
      ToDate: "2022-12-21",
      Duration: "1 day",
      Status: "approved",
      ActionApprove: <button>Reject</button>,
      ActionCancel: <button>Cancel</button>,
    },
    {
      Employee: "Jackie Chan",
      LeaveType: "Annual Leave",
      AppliedDate: "2022-11-18",
      FromDate: "2022-12-20",
      ToDate: "2022-12-21",
      Duration: "1 day",
      Status: "taken",
      ActionApprove: <button>Approve</button>,
      ActionCancel: <button>Cancel</button>,
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
      ActionApprove,
      ActionCancel,
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
        <td>{ActionApprove}</td>
        <td>{ActionCancel}</td>
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
              ActionApprove={row.ActionApprove}
              ActionCancel={row.ActionCancel}
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
