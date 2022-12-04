import React, { useEffect, useState } from "react";

interface attendanceInfoState {
  isShow: boolean;
  status: string;
  employeeId: number;
  attendanceDate: string;
  time_checkedin: string;
  time_checkedout: string;
  employeeIdFull: string;
}

export default function PopUp({
  handleClickClose,
  data,
}: {
  handleClickClose: () => void;
  data: attendanceInfoState;
}) {
  const [selectValue, setSelectValue] = useState(data.status);
  const [leaveType, setLeaveType] = useState([]);
  const [patchObj, setPatchObject] = useState({
    employeeId: data["employeeId"],
    attendanceDate: dateFormatter(data["attendanceDate"]),
    status: selectValue,
  });

  function dateFormatter(dateString: string) {
    // Create a date object from a date string
    var date = new Date(dateString);

    // Get year, month, and day part from the date
    var year = date
      .toLocaleString("default", { year: "numeric" })
      .replace("年", "");
    var month = date
      .toLocaleString("default", { month: "2-digit" })
      .replace("月", "");

    var day = date
      .toLocaleString("default", { day: "2-digit" })
      .replace("日", "");

    // Generate yyyy-mm-dd date string
    var formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }

  console.log(patchObj);

  let attendanceDate;
  attendanceDate = new Date(data["attendanceDate"])
    .toLocaleString()
    .split("T")[0];

  let checkinTime;
  let checkoutTime;
  if (data["time_checkedin"] == "") {
    checkinTime = "";
    checkoutTime = "";
  } else if (!data["time_checkedin"]) {
    checkinTime = "";
    checkoutTime = "";
  } else {
    let date_of_checkinTime = new Date(data["time_checkedin"])
      .toISOString()
      .split("T")[0];
    let time_of_checkinTime = new Date(data["time_checkedin"])
      .toTimeString()
      .split(" ")[0];
    checkinTime = date_of_checkinTime + " " + time_of_checkinTime;

    let date_of_checkoutTime = new Date(data["time_checkedout"])
      .toISOString()
      .split("T")[0];
    let time_of_checkoutTime = new Date(data["time_checkedout"])
      .toTimeString()
      .split(" ")[0];
    checkoutTime = date_of_checkoutTime + " " + time_of_checkoutTime;
  }

  async function fetchLeaveType() {
    try {
      const options = { method: "GET" };
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/attendance/getLeaveType`,
        options
      );

      let leaveType = await res.json();
      leaveType = leaveType["res"];

      setLeaveType(leaveType);
    } catch {
      console.log("fetch fail");
    }
  }
  // console.log(leaveType);

  useEffect(() => {
    fetchLeaveType();
  }, []);

  function handleChange(event: any) {
    setSelectValue(event?.target.value);
    setPatchObject({ ...patchObj, status: event.target.value });
  }

  async function handleClickConfirm() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patchObj),
      // headers: { "Content-Type": "multi-type/form-data" },
      // body: formData,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/attendance/changeAttendanceRecord`,
      requestOptions
    );
    const patchRecordRes = await res.json();
    console.log(patchRecordRes);
  }

  return (
    <div className="attendance-pop-up">
      <div className="employeeInfo-container">
        <div className="employeeId_and_date">
          Employee ID :
          <div className="employeeId_and_date_innerText">
            {data["employeeIdFull"]}
          </div>
        </div>
        <div className="employeeId_and_date">
          Date :
          <div className="employeeId_and_date_innerText">
            {dateFormatter(data["attendanceDate"])}
          </div>
        </div>
      </div>
      <div className="attendance-time-container">
        <div className="attendance-checkInOut_time">
          Check-in time :
          <div className="attendance-checkInOut_time_innerText">
            {checkinTime}
          </div>
        </div>
        <div className="attendance-checkInOut_time">
          Check-out time :
          <div className="attendance-checkInOut_time_innerText">
            {checkoutTime}
          </div>
        </div>
      </div>
      <div className="attendance-form-container">
        <form>
          <div className="attendance-status-container">
            <label>
              Status :
              <select
                className="attendSelection"
                value={selectValue}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="punctual">Punctual</option>
                <option value="late">Late</option>
                <option value="absent">Absent</option>
                <option value="other">Other</option>
                {leaveType.map((data, index) => {
                  return (
                    <option value={data["type"]} key={index}>
                      {data["type"]}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="button-container">
            <div className="button" onClick={handleClickConfirm}>
              Confirm
            </div>
            <div className="button" onClick={handleClickClose}>
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
