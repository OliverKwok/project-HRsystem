import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import moment from "moment";
moment().format();

type FormState = {
  first_name: string;
  last_name: string;
  chinese_name: string;
  alias: string;
  HKID: string;
  gender: string;
  nationality: string;
  date_of_birth: Date;
  age: number;

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

  AL_leave_entitled: string;
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
  const [age, setAge] = useState("0");

  const { register, handleSubmit, watch, setValue, getValues } =
    useForm<FormState>({
      defaultValues: {
        first_name: "",
        last_name: "",
        chinese_name: "",
        alias: "",
        HKID: "",
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

        pay_currency: "",
        basic_salary: "",
        payment_method: "",
        home_address: "",
        bank_code: "",
        bank_name: "",
        bank_number: "",
        bank_payee: "",
        payment_remark: "",

        AL_leave_entitled: "",
      },
    });

  useEffect(() => {
    let sub = watch((data) => {
      console.log("update form data:", data);
      console.log(data.date_of_birth);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  function submit(data: FormState) {
    console.log("submit form data:", data);
  }

  const calAge = (event: any) => {
    const todayDate: any = moment(new Date(), "YYYY-MM-DD");
    const date_of_birth_input = moment(event.target.value, "YYYY-MM-DD");
    let result = todayDate.diff(date_of_birth_input, "years");
    setAge(result);

    // if (date_of_birth_input) {
    //   const result = Math.abs(
    //     date_of_birth_input.getFullYear() - new Date(today).getFullYear()
    //   );
    //   console.log(result)
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
                <span>First Name</span>
              </div>
              <input type="text" {...register("first_name")} />
            </div>
            <div>
              <div>
                <span>Last Name</span>
              </div>

              <input type="text" {...register("last_name")} />
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
                <span>HKID</span>
              </div>

              <input type="text" {...register("HKID")} />
            </div>

            <div>
              <div>
                <span>Gender</span>
              </div>

              <select {...register("gender")}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <div>
                <span>Nationality</span>
              </div>

              <select {...register("nationality")}>
                <option value=""></option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="China">China</option>
                <option value="UK">UK</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <div>
                <span>Date of Birth</span>
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
              <span>Country Code</span>
            </div>

            <input type="text" {...register("mobile_countrycode")} />
          </div>
          <div>
            <div>
              <span>Mobile No</span>
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
              <span>Personal Email</span>
            </div>

            <input type="text" {...register("email_personal")} />
          </div>
          <div>
            <div>
              <span>Work Email</span>
            </div>

            <input type="text" {...register("email_work")} />
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
              <span>Start Time</span>
            </div>

            <input type="text" {...register("start_date")} />
          </div>
          <div>
            <div>
              <span>Probation Period</span>
            </div>

            <input type="text" {...register("have_probation")} />
          </div>
          <div>
            <div>
              <span>Probation Status</span>
            </div>

            <input type="text" {...register("pass_probation")} />
          </div>
          <div>
            <div>
              <span>Job Status</span>
            </div>

            <input type="text" {...register("status")} />
          </div>
          <div>
            <div>
              <span>Job Nature</span>
            </div>

            <input type="text" {...register("job_nature")} />
          </div>
          <div>
            <div>
              <span>Notice Period</span>
            </div>

            <input type="text" {...register("notice_period")} />
          </div>
          <div>
            <div>
              <span>Report To</span>
            </div>

            <input type="text" {...register("report_to")} />
          </div>

        </div>
        <hr />

        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
