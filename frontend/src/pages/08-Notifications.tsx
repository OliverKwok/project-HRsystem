import React from "react";
import { useForm } from "react-hook-form";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "../styles/08-notifications.css";

export default function Notifications() {
  const { register, handleSubmit } = useForm();
  const handleNotifications = (data: any) => console.log(data);

  return (
    <div className="card">
      <Splitter style={{ height: "300px" }} className="mb-5">
        <SplitterPanel className="flex align-items-center justify-content-center">
          <form onSubmit={handleSubmit(handleNotifications)}>
            <div>
              <h2>Create Company Announcement</h2>
              <div>
                <textarea
                  placeholder="write your message here"
                  {...register("name")}
                />
              </div>
              <div>
                <input type="date" {...register("broadcast date")} />

                <input type="time" {...register("broadcast time")} />
              </div>
            </div>
            <button>Broadcast</button>
          </form>
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          <h3>Previous Announcements</h3>
          <div className="prevAnn">
            <p>Date:</p>
            <p>Time:</p>
            <p>Message:</p>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  );
}
