import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import moment from "moment";
moment().format();

type FormState = {
  employeeid: string;
  first_name: string;
  last_name: string;
  chinese_name: string;
  alias: string;
  hkid: string;
  passport: string;
  gender: string;
  nationality: string;
  date_of_birth: Date;
  age: number;
  profilepic: FileList;

  mobile_countrycode: string;
  mobile_no: string;
  work_phone_no: string;
  email_personal: string;
  email_work: string;
  // password: string;

  highest_education: string;
  institution_name: string;
  major: string;
  last_job_company: string;
  last_job_title: string;

  start_date: string;
  have_probation: string;
  pass_probation: string;
  status: string;
  job_nature: string;
  // length_of_service: string;
  notice_period: string;
  report_to: string;

  al_leave_entitled_peryear: string;
  // AL_leave_taken: string;
  // AL_leave_balance: string;
  // sick_leave_taken: string;
  // sick_leave_balance: string;

  pay_currency: string;
  basic_salary: string;
  payment_method: string;
  home_address: string;
  bank_code: string;
  bank_name: string;
  bank_number: string;
  bank_payee: string;
  payment_remark: string;
};

export default function Employee() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      employeeid: "",
      first_name: "",
      last_name: "",
      chinese_name: "",
      alias: "",
      hkid: "",
      passport: "",
      gender: "",
      nationality: "",
      date_of_birth: new Date(),
      age: 0,

      mobile_countrycode: "",
      mobile_no: "",
      work_phone_no: "",
      email_personal: "",
      email_work: "",
      // password: "",

      highest_education: "",
      institution_name: "",
      major: "",
      last_job_company: "",
      last_job_title: "",

      start_date: "",
      have_probation: "",
      pass_probation: "",
      status: "",
      job_nature: "",
      // length_of_service: "",
      notice_period: "",
      report_to: "",

      al_leave_entitled_peryear: "",

      pay_currency: "",
      basic_salary: "",
      payment_method: "",
      home_address: "",
      bank_code: "",
      bank_name: "",
      bank_number: "",
      bank_payee: "",
      payment_remark: "",
    },
  });

  const [age, setAge] = useState("0");
  const [employeeid, setEmployeeid] = useState("");
  const profilepic = watch("profilepic");
  const [previewSrc, setpreviewSrc] = useState("");

  // check lastest employeeid
  async function checkEmployeeid() {
    const requestOptions = {
      method: "Get",
    };

    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/user/count`,
      requestOptions
    );
    const jsonData = await res.json();
    let newEmployeeid = "DEMO";
    if (jsonData.maxid < 10) {
      newEmployeeid = newEmployeeid + "00" + (jsonData.maxid + 1);
    } else if (jsonData.maxid < 100) {
      newEmployeeid = newEmployeeid + "0" + (jsonData.maxid + 1);
    } else if (jsonData.maxid < 1000) {
      newEmployeeid = newEmployeeid + (jsonData.maxid + 1);
    } else {
      throw new Error();
    }
    setEmployeeid(newEmployeeid);
    setValue("employeeid", newEmployeeid);
  }

  useEffect(() => {
    checkEmployeeid();
  }, []);

  // monitor every step
  useEffect(() => {
    let sub = watch((data) => {
      console.log("update form data:", data);
      // console.log(data.date_of_birth);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  // preview photo
  useEffect(() => {
    if (profilepic?.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setpreviewSrc(reader.result as string);
      });
      reader.readAsDataURL(profilepic[0]);
    }
  }, [profilepic]);

  // submit
  async function submit(data: FormState) {
    console.log("submit form data:", data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/user/create`,
      requestOptions
    );
    const jsonData = await res.json();

    if (jsonData.newEmployee.rowCount) {
      alert("inserted into DB");
    }
    checkEmployeeid();
  }

  const calAge = (event: any) => {
    const todayDate: any = moment(new Date(), "YYYY-MM-DD");
    const date_of_birth_input = moment(event.target.value, "YYYY-MM-DD");
    let result = todayDate.diff(date_of_birth_input, "years");
    setAge(result);

    return result;
  };

  return (
    <div className="page-container">
      <h1>New Employee</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div id="new-employee-form">
          <h2>Basic Infomation</h2>
          <div className="five-column-grid">
            <div>
              <div>
                <span>Employee ID*</span>
              </div>
              <input
                value={employeeid}
                type="text"
                {...register("employeeid")}
                disabled
              />
            </div>
            <div>
              <div>
                <span>
                  First Name*{" "}
                  {errors.first_name && (
                    <span style={{ color: "red" }}>[Required]</span>
                  )}
                </span>
              </div>
              <input
                type="text"
                {...register("first_name", { required: true })}
              />
            </div>
            <div>
              <div>
                <span>
                  Last Name*{" "}
                  {errors.last_name && (
                    <span style={{ color: "red" }}>[Required]</span>
                  )}
                </span>
              </div>

              <input
                type="text"
                {...register("last_name", { required: true })}
              />
            </div>
            <div>
              <div>
                <span>Chinese Name</span>
              </div>

              <input type="text" {...register("chinese_name")} />
            </div>
            <div>
              <div>
                <span>Alias</span>
              </div>

              <input type="text" {...register("alias")} />
            </div>
            <div>
              <div>
                <span>
                  HKID*{" "}
                  {errors.hkid && (
                    <span style={{ color: "red" }}>[Wrong format]</span>
                  )}
                </span>
              </div>

              <input
                type="text"
                {...register("hkid", {
                  pattern: /^([A-Z]{1,2})([0-9]{6})\(([A0-9])\)$/,
                })}
              />
              <div>
                <span style={{ fontSize: "small" }}>
                  eg. Z987654(3) [no brackets]
                </span>
              </div>
            </div>
            <div>
              <div>
                <span>Passport Number</span>
              </div>

              <input type="text" {...register("passport")} />
            </div>

            <div>
              <div>
                <span>Gender*</span>
              </div>

              <select {...register("gender")}>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div>
              <div>
                <span>Nationality*</span>
              </div>

              <select {...register("nationality")}>
                <option value="Hong Kong">Hong Kong</option>
                <option value="China">China</option>
                <option value="UK">UK</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <div>
                <span>Date of Birth*</span>
              </div>

              <input
                type="date"
                {...register("date_of_birth")}
                onChange={calAge}
              />
            </div>

            <div>
              <div>
                <span>Age</span>
              </div>

              <input value={age} type="text" {...register("age")} disabled />
            </div>
          </div>
          <hr />
          <h2>Contact Infomation</h2>
          <div className="five-column-grid">
            <div>
              <div>
                <span>Country Code*</span>
              </div>

              <input type="text" {...register("mobile_countrycode")} />
            </div>
            <div>
              <div>
                <span>Mobile No*</span>
              </div>

              <input type="text" {...register("mobile_no")} />
            </div>
            <div>
              <div>
                <span>Work Phone No</span>
              </div>

              <input type="text" {...register("work_phone_no")} />
            </div>
            <div>
              <div>
                <span>
                  Personal Email*{" "}
                  {errors.email_personal && (
                    <span style={{ color: "red" }}>[Wrong format]</span>
                  )}
                </span>
              </div>

              <input
                type="text"
                {...register("email_personal", {
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                })}
              />
            </div>
            <div>
              <div>
                <span>
                  Work Email*{" "}
                  {errors.email_work && (
                    <span style={{ color: "red" }}>[Wrong format]</span>
                  )}
                </span>
              </div>

              <input
                type="text"
                {...register("email_work", {
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                })}
              />
            </div>
          </div>
          <hr />

          <h2>Education and Previous Job</h2>
          <div className="five-column-grid">
            <div>
              <div>
                <span>Highest Education</span>
              </div>

              <input type="text" {...register("highest_education")} />
            </div>
            <div>
              <div>
                <span>Institution Name</span>
              </div>

              <input type="text" {...register("institution_name")} />
            </div>
            <div>
              <div>
                <span>Major</span>
              </div>

              <input type="text" {...register("major")} />
            </div>
            <div>
              <div>
                <span>Last Job Company</span>
              </div>

              <input type="text" {...register("last_job_company")} />
            </div>
            <div>
              <div>
                <span>Last Job Title</span>
              </div>

              <input type="text" {...register("last_job_title")} />
            </div>
          </div>
          <hr />

          <h2>Employment Detail</h2>
          <div className="five-column-grid">
            <div>
              <div>
                <span>Start Date*</span>
              </div>

              <input type="date" {...register("start_date")} />
            </div>

            <div>
              <div>
                <span>Job Status</span>
              </div>

              <select {...register("status")}>
                <option value="probation">Probation</option>
                <option value="perm">Permanent</option>
                <option value="contract">Contract</option>
                <option value="terminated">Terminated</option>
                <option value="resigned">Resigned</option>
                <option value="retired">Retired</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <div>
                <span>Job Nature</span>
              </div>

              <select {...register("job_nature")}>
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="temp">Temporary</option>
                <option value="intern">Intern</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <div>
                <span>Notice Period* (Days)</span>
              </div>
              <input type="text" {...register("notice_period")} />
            </div>

            <div>
              <div>
                <span>AL Entitle / Year</span>
              </div>

              <input type="text" {...register("al_leave_entitled_peryear")} />
            </div>
          </div>
          <div>
            <div>
              <span>Report To</span>
            </div>

            <input type="text" {...register("report_to")} />
          </div>
          <hr />
          <h2>Payment Detail</h2>
          <div className="five-column-grid">
            <div>
              <div>
                <span>Salary Currency*</span>
              </div>
              <select {...register("pay_currency")}>
                <option value="HKD" selected>
                  HKD
                </option>
              </select>
            </div>
            <div>
              <div>
                <span>Basic Salary*</span>
              </div>

              <input type="text" {...register("basic_salary")} />
            </div>
            <div>
              <div>
                <span>Payment Method</span>
              </div>

              <select {...register("payment_method")}>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="cheque">Cheque</option>
                <option value="cash">Cash</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <div>
                <span>Home Address</span>
              </div>

              <input type="text" {...register("home_address")} />
            </div>
            <div>
              <div>
                <span>Bank Code</span>
              </div>

              <input type="text" {...register("bank_code")} />
            </div>
            <div>
              <div>
                <span>Bank Name</span>
              </div>

              <input type="text" {...register("bank_name")} />
            </div>
            <div>
              <div>
                <span>Bank Number</span>
              </div>

              <input type="text" {...register("bank_number")} />
            </div>
            <div>
              <div>
                <span>Payee Name</span>
              </div>

              <input type="text" {...register("bank_payee")} />
            </div>
            <div>
              <div>
                <span>Payment Remark</span>
              </div>

              <input type="text" {...register("payment_remark")} />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <h3>Profile Pic</h3>
          </div>

          <input type="file" {...register("profilepic")} />
          {previewSrc && (
            <div>
              <div>Preview:</div>
              <div>
                <img
                  src={previewSrc}
                  alt="Preview"
                  // height="200px"

                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}