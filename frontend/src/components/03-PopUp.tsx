import React, { useState } from "react";

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
  console.log(data);

  let date_of_checkinTime = new Date(data["time_checkedin"])
    .toISOString()
    .split("T")[0];
  let time_of_checkinTime = new Date(data["time_checkedin"])
    .toTimeString()
    .split(" ")[0];
  let checkinTime = date_of_checkinTime + " " + time_of_checkinTime;

  let date_of_checkoutTime = new Date(data["time_checkedout"])
    .toISOString()
    .split("T")[0];
  let time_of_checkoutTime = new Date(data["time_checkedout"])
    .toTimeString()
    .split(" ")[0];
  let checkoutTime = date_of_checkoutTime + " " + time_of_checkoutTime;

  function handleChange(event: any) {
    setSelectValue(event?.target.value);
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
            {data["attendanceDate"]}
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
                <option value="punctual">Punctual</option>
                <option value="late">Late</option>
                <option value="remote">Work from Home</option>
                <option value="unknown">Unknown</option>
                <option value="osther">Other</option>
              </select>
            </label>
          </div>
          <div className="button-container">
            <button type="submit">Confirm</button>
            <button onClick={handleClickClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
