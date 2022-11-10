import React, { useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormState = {
  firstName: string;
  lastName: string;
  chineseName: string;
  alias: string;
  mobileLocation: string;
  mobile: string;
  personalEmail: string;
  workEmail: string;
  birthday: string;
  hkid: string;
  gender: string;
};

export default function Employee() {
  const { register, handleSubmit, watch } = useForm<FormState>({
    defaultValues: {
      firstName: "",
      lastName: "",
      chineseName: "",
      alias: "",
      mobileLocation: "852",
      mobile: "",
      personalEmail: "",
      workEmail: "",
      birthday: "",
      hkid: "",
      gender: "",
    },
  });

  useEffect(() => {
    let sub = watch((data) => {
      console.log("update form data:", data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  function submit(data: FormState) {
    console.log("submit form data:", data);
  }

  return (
    <div className="page-container">
      <h1>New Employee</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <span>First Name</span>
          <input
            type="text"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <span>Last Name</span>
          <input
            type="text"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          />
        </div>
        <div>
          <span>Chinese Name</span>
          <input type="text" {...register("chineseName")} />
        </div>
        <div>
          <span>Alias</span>
          <input type="text" {...register("alias")} />
        </div>
        <div>
          <span>Mobile Location</span>
          <input type="text" {...register("mobileLocation")} />
        </div>
        <div>
          <span>Mobile</span>
          <input type="text" {...register("mobile")} />
        </div>
        <div>
          <span>Personal Email</span>
          <input type="text" {...register("personalEmail")} />
        </div>
        <div>
          <span>Work Email</span>
          <input type="text" {...register("workEmail")} />
        </div>
        <div>
          <span>Birthday</span>
          <input type="text" {...register("birthday")} />
        </div>
        <div>
          <span>HKID</span>
          <input type="text" {...register("hkid")} />
        </div>
        <div>
          <span>Gender</span>
          <select {...register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
