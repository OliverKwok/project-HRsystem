import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "../styles/08-notifications.scss";

export default function Notifications() {
  const { register, handleSubmit } = useForm();
  const handleNotifications = (data: any) => console.log(data);
  const [companyEvent, setCompanyEvent] = useState([]);
  const [notificaitons, setNotifications] = useState([]);

  async function getCompanyEvent() {
    try {
      const options = { method: "GET" };
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/notification/getEventRecord`,
        options
      );

      let event = await res.json();
      event = event["res"];
      setCompanyEvent(event);
    } catch {
      console.log("fetch fail");
    }
  }
  async function getNotifications() {
    try {
      const options = { method: "GET" };
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/notification/getNotifications`,
        options
      );

      let notification = await res.json();
      notification = notification["res"];
      setNotifications(notification);
    } catch {
      console.log("fetch fail");
    }
  }
  console.log(notificaitons);

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

  function dataTimeFormatter(dateTimeString: string) {
    let date_of_dateTimeString = new Date(dateTimeString)
      .toISOString()
      .split("T")[0];
    let time_of_dateTimeString = new Date(dateTimeString)
      .toTimeString()
      .split(" ")[0];
    let final_date_time = date_of_dateTimeString + " " + time_of_dateTimeString;
    return final_date_time;
  }

  useEffect(() => {
    getCompanyEvent();
  }, []);

  return (
    <div className="pageBigContainer">
      <div className="eventBigContainer">
        <div>
          <h1>Events Announcement</h1>
        </div>
        <div className="eventInnerContainer">
          <div className="eventAnnounceContainer">
            <div>
              <h2>Create Announcement</h2>
            </div>
            <div className="eventAnnouncementForm">
              <div className="eventNameContainer">
                <label>
                  Event Name :
                  <div>
                    <input type="text" name="name" className="eventName" />
                  </div>
                </label>
              </div>
              <div className="eventNameContainer">
                <label>
                  Event Date :
                  <div>
                    <input type="date" name="name" className="eventDate" />
                  </div>
                </label>
              </div>
              <div className="eventDetailsContainer">
                <label>
                  <div>Event Details :</div>
                  <textarea name="name" rows={10} className="eventDetails" />
                </label>
              </div>
              <div className="eventButtonContainer">
                <input
                  type="submit"
                  value="Submit"
                  className="boardcastButton"
                />
              </div>
            </div>
          </div>
          <div className="eventRecordContainer">
            <div>
              <h2>Previous Announcements</h2>
            </div>
            <div className="recordsContainer">
              {companyEvent.map((data) => {
                return (
                  <div className="eachRecordContainer">
                    <div className="recordItem">
                      Event Name :{" "}
                      <div className="recordItemText">{data["event_name"]}</div>
                    </div>
                    <div className="recordItem">
                      Event date :{" "}
                      <div className="recordItemText">
                        {dateFormatter(data["date"])}
                      </div>
                    </div>
                    <div className="recordItem">
                      Event details :{" "}
                      <div className="recordItemText">{data["details"]}</div>
                    </div>
                    <div className="recordItem">
                      Create time :{" "}
                      <div className="recordItemText">
                        {" "}
                        {dataTimeFormatter(data["created_at"])}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="notificationBigContainer">
        <div>
          <h1>Notifications Announcement</h1>
        </div>
        <div className="eventInnerContainer">
          <div className="eventAnnounceContainer">
            <div>
              <h2>Create Notification</h2>
            </div>
            <div className="eventAnnouncementForm">
              <div className="eventNameContainer">
                <label>
                  Title :
                  <div>
                    <input type="text" name="name" className="eventName" />
                  </div>
                </label>
              </div>

              <div className="eventDetailsContainer">
                <label>
                  <div>Message :</div>
                  <textarea name="name" rows={10} className="eventDetails" />
                </label>
              </div>

              <div className="eventRecepientContainer">
                <label>
                  <div>Recepient :</div>
                  <select className="eventRecepient">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">
                      Coconut
                    </option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
              </div>
              <div className="eventButtonContainer">
                <input
                  type="submit"
                  value="Submit"
                  className="boardcastButton"
                />
              </div>
            </div>
          </div>
          <div className="eventRecordContainer">
            <div>
              <h2>Previous Notifications</h2>
            </div>
            <div className="recordsContainer">
              {companyEvent.map((data) => {
                return (
                  <div className="eachRecordContainer">
                    <div className="recordItem">
                      Title :{" "}
                      <div className="recordItemText">{data["event_name"]}</div>
                    </div>
                    <div className="recordItem">
                      Message :{" "}
                      <div className="recordItemText">
                        {dateFormatter(data["date"])}
                      </div>
                    </div>
                    <div className="recordItem">
                      Recepients :{" "}
                      <div className="recordItemText">{data["details"]}</div>
                    </div>
                    <div className="recordItem createTime">
                      Create time :{" "}
                      <div className="recordItemText">
                        {" "}
                        {dataTimeFormatter(data["created_at"])}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
