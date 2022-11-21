import React from "react";

export default function PopUp({
  handleClickClose,
  attendanceStatus,
  employeeId,
  attendanceDate,
}: {
  handleClickClose: () => void;
  attendanceStatus: string;
  employeeId: number;
  attendanceDate: string;
}) {
  return (
    <div className="attendance-pop-up">
      <div className="employeeInfo-container">
        <div className="employeeId">
          Employee ID : <div>{employeeId}</div>{" "}
        </div>
        <div className="attendance-date">
          Date : <div>{attendanceDate}</div>
        </div>
      </div>
      <div className="attendance-time-container">
        <div className="attendance-start_time-word">
          Check-in time :<p></p>
        </div>
        <div className="attendance-end_time-word">
          Check-out time :<p></p>
        </div>
      </div>
      <div className="attendance-form-container">
        <form>
          <div className="attendance-status-container">
            Status :
            <input type="text" value={attendanceStatus} />
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
