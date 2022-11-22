import React from "react";
import { useForm } from "react-hook-form";

export default function Notifications() {
  const { register, handleSubmit } = useForm();
  const handleNotifications = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleNotifications)}>
      <div>
        <h2>Create Company Announcement</h2>

        <textarea placeholder="write your message here" {...register("name")} />
        <input type="date" {...register("broadcast date")} />
        <input type="time" {...register("broadcast time")} />
      </div>
      {/* <div>
        <label>Email</label>
        <input type="email" {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
      </div> */}
      <button>Broadcast</button>
    </form>
  );
}
