import React, { useReducer, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Splitter, SplitterPanel } from "primereact/splitter";
import Moment from "moment";
// moment().format();

// let data = [
//   { brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff" },
//   { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
//   { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
//   { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
//   { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
//   { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
//   { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
//   { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
//   { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
//   { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" },
// ];

// const init = (initialState: any) => initialState;

// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "dataLoaded":
//       return { ...state, results: action.payload, loading: false };
//     default:
//       throw new Error();
//   }
// };

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

  // const initialState = {
  //   results: [],
  //   loading: true,
  // };
  // const [state, dispatch] = useReducer(reducer, initialState, init);
  // const { results, loading } = state;

  // useEffect(() => {
  //   // if (loading) {
  //   dispatch({ type: "dataLoaded", payload: data });
  //   // }
  // }, [loading]);

  return (
    <>
      <Splitter style={{ height: "500px" }} layout="vertical">
        <SplitterPanel className="flex align-items-center justify-content-center">
          <DataTable
            value={applicationData}
            resizableColumns
            columnResizeMode="fit"
          >
            <Column field="status" header="Status" />
            <Column field="employee" header="Employee" />
            <Column field="leavetype" header="Leave Type" />
            <Column field="start_date" header="Start Date" />
            <Column field="start_date_period" header="Start Date Period" />
            <Column field="end_date" header="End Date" />
            <Column field="end_date_period" header="End Date Period" />
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
          <DataTable value={nonPending} resizableColumns columnResizeMode="fit">
            <Column field="status" header="Status" />
            <Column field="employee" header="Employee" />
            <Column field="leavetype" header="Leave Type" />
            <Column field="start_date" header="Start Date" />
            <Column field="start_date_period" header="Start Date Period" />
            <Column field="end_date" header="End Date" />
            <Column field="end_date_period" header="End Date Period" />
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

//TODO change status color
//TODO date format
//DONE - TODO split table for pending and non-pending status
