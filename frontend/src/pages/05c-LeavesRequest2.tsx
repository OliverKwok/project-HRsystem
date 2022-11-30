import React, { useReducer, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { classNames } from "primereact/utils";
import { Splitter, SplitterPanel } from "primereact/splitter";
import Moment from "moment";
import "../styles/05c-LeaveRequests.css";

export default function LeavesRequest2() {
  const [applicationData, setApplicationData] = useState([]);
  const [nonPending, setNonPending] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/pending_application`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let fetchData = data.map((app: any) => {
          console.log(typeof app.start_date);
          return {
            status: app.status,
            employee: app.employee_name,
            leavetype: app.leavetype,
            start_date: Moment(app.start_date).format("DD-MM-YYYY"),
            start_date_period: app.start_date_period,
            end_date: Moment(app.end_date).format("DD-MM-YYYY"),
            end_date_period: app.end_date_period,
            number_of_days: app.number_of_days,
            applied_date: Moment(app.created_at).format("DD-MM-YYYY"),
            action_approve: <button>Approve</button>,
            action_reject: <button>Reject</button>,
            action_cancel: <button>Cancel</button>,
            action_taken: <button>Marked as Taken</button>,
          };
        });
        setApplicationData(fetchData);
      });
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/nonpending_application`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let fetchNonPendingData = data.map((app: any) => {
          return {
            employee: app.employee_name,
            leavetype: app.leavetype,
            start_date: Moment(app.start_date).format("DD-MM-YYYY"),
            start_date_period: app.start_date_period,
            end_date: Moment(app.end_date).format("DD-MM-YYYY"),
            end_date_period: app.end_date_period,
            number_of_days: app.number_of_days,
            applied_date: Moment(app.created_at).format("DD-MM-YYYY"),
            status: app.status,
            action_undo: <button>Back to Pending</button>,
            action_cancel: <button>Cancel</button>,
          };
        });
        setNonPending(fetchNonPendingData);
      });
  }, []);

  const statusColors = (rowData: any) => {
    const statusClassName = classNames({
      pending: rowData.status === "pending",
      approved: rowData.status === "approved",
      rejected: rowData.status === "rejected",
      cancelled: rowData.status === "cancelled",
      taken: rowData.status === "taken",
      onleave: rowData.status === "onleave",
    });
    return <div className={statusClassName}>{rowData.status}</div>;
  };

  return (
    <>
      <Splitter style={{ height: "500px" }} layout="vertical">
        <SplitterPanel className="flex align-items-center justify-content-center">
          <DataTable
            value={applicationData}
            resizableColumns
            columnResizeMode="fit"
            className="datatable"
          >
            <Column field="status" header="Status" body={statusColors} />
            <Column field="employee" header="Employee" />
            <Column field="leavetype" header="Leave Type" />
            <Column field="start_date" header="Start Date" />
            <Column field="start_date_period" header="Period" />
            <Column field="end_date" header="End Date" />
            <Column field="end_date_period" header="Period" />
            <Column field="number_of_days" header="No. of Days" />
            <Column field="applied_date" header="Applied Date" />
            <Column field="action_approve" header="Action" />
            <Column field="action_reject" header="" />
            <Column field="action_cancel" header="" />
            <Column field="action_taken" header="" />
          </DataTable>

          <hr />
        </SplitterPanel>

        <SplitterPanel className="flex align-items-center justify-content-center">
          <DataTable
            value={nonPending}
            resizableColumns
            columnResizeMode="fit"
            className="datatable"
          >
            <Column field="status" header="Status" body={statusColors} />
            <Column field="employee" header="Employee" />
            <Column field="leavetype" header="Leave Type" />
            <Column field="start_date" header="Start Date" />
            <Column field="start_date_period" header="Period" />
            <Column field="end_date" header="End Date" />
            <Column field="end_date_period" header="Period" />
            <Column field="number_of_days" header="No. of Days" />
            <Column field="applied_date" header="Applied Date" />
            <Column field="action_undo" header="Action" />
            <Column field="action_reject" header="" />
            <Column field="action_cancel" header="" />
          </DataTable>
        </SplitterPanel>
      </Splitter>
    </>
  );
}

//DONE - TODO change status color
//DONE - TODO date format
//DONE - TODO split table for pending and non-pending status
// TODO button functions
