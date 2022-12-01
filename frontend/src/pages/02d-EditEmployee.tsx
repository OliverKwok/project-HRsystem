import React, { useCallback, useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import moment from "moment";
// import { useParams } from "react-router-dom";
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
  date_of_birth: string;
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
  notice_period: number;
  report_to: string;
  title: string;
  department: string;
  team: string;

  al_leave_entitled_peryear: number;
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

export default function Employee(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      employeeid: props.editEmployeeid,
      first_name: props.editFirstName,
      last_name: props.editLastName,
      chinese_name: props.editChineseName,
      alias: props.editAlias,
      hkid: props.editHkid,
      passport: props.editPassport,
      gender: props.editGender,
      nationality: props.editNationality,
      date_of_birth: moment(props.editDateOfBirth).format("YYYY-MM-DD"),
      age: 0, // TODO make calulation

      mobile_countrycode: props.editMobileCountryCode,
      mobile_no: props.editMobileNo,
      work_phone_no: props.editWorkPhoneNo,
      email_personal: props.editEmailPersonal,
      email_work: props.editEmailWork,
      // password: "",

      highest_education: props.editHighestEducation,
      institution_name: props.editInstitutionName,
      major: props.editMajor,
      last_job_company: props.editLastJobCompany,
      last_job_title: props.editLastJobTitle,

      start_date: moment(props.editStartDate).format("YYYY-MM-DD"),
      // have_probation: "",
      // pass_probation: "",
      status: props.editStatus,
      job_nature: props.editJobNature,
      // length_of_service: "",
      notice_period: props.editNoticePeriod,
      report_to: props.editReportTo,
      department: props.editDepartmentId,
      team: props.editTeamId,
      title: props.editTitleId,

      al_leave_entitled_peryear: props.editAlLeaveEntitledPeryear,

      pay_currency: props.editPayCurrency,
      basic_salary: props.editBasicSalary,
      payment_method: props.editPaymentMethod,
      home_address: props.editHomeAddress,
      bank_code: props.editBankCode,
      bank_name: props.editBankName,
      bank_number: props.editBankNumber,
      bank_payee: props.editBankPayee,
      payment_remark: props.editPaymentRemark,
    },
  });

  const [age, setAge] = useState("0");
  // const [employeeid, setEmployeeid] = useState("");
  const profilepic = watch("profilepic");
  const [previewSrc, setpreviewSrc] = useState("");
  const [reportTo, setReportTo] = useState([]);
  const [title, setTitle] = useState([]);
  const [department, setDepartment] = useState([]);
  const [team, setTeam] = useState([]);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");

  // tab show
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  function showTab1() {
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
  }
  function showTab2() {
    setShow1(false);
    setShow2(true);
    setShow3(false);
    setShow4(false);
    setShow5(false);
  }
  function showTab3() {
    setShow1(false);
    setShow2(false);
    setShow3(true);
    setShow4(false);
    setShow5(false);
  }
  function showTab4() {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(true);
    setShow5(false);
  }
  function showTab5() {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(true);
  }

  // check lastest employeeid
  // async function checkEmployeeid() {
  //   const requestOptions = {
  //     method: "Get",
  //   };

  //   const res = await fetch(
  //     `${process.env.REACT_APP_BACKEND_URL}/user/count`,
  //     requestOptions
  //   );
  //   const jsonData = await res.json();
  //   let newEmployeeid = "DEMO";
  //   if (jsonData.maxid < 10) {
  //     newEmployeeid = newEmployeeid + "00" + (jsonData.maxid + 1);
  //   } else if (jsonData.maxid < 100) {
  //     newEmployeeid = newEmployeeid + "0" + (jsonData.maxid + 1);
  //   } else if (jsonData.maxid < 1000) {
  //     newEmployeeid = newEmployeeid + (jsonData.maxid + 1);
  //   } else {
  //     throw new Error();
  //   }
  //   setEmployeeid(newEmployeeid);
  //   setValue("employeeid", newEmployeeid);
  // }

  // useEffect(() => {
  //   checkEmployeeid();
  // }, []);

  // check report to employee list
  useEffect(() => {
    async function fetchReportTo() {
      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/reportTo`
      );
      let reportToFetch = await response.json();
      setReportTo(reportToFetch);
    }
    fetchReportTo();
  }, []);

  // check title list
  useEffect(() => {
    async function fetchTitle() {
      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/title/all`
      );
      let titleFetch = await response.json();
      setTitle(titleFetch);
    }
    fetchTitle();
  }, []);

  // check department list
  useEffect(() => {
    async function fetchDept() {
      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/department/all`
      );
      let deptFetch = await response.json();
      setDepartment(deptFetch);
    }
    fetchDept();
  }, []);

  // check department list
  useEffect(() => {
    async function fetchTeam() {
      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/team/all`
      );
      let teamFetch = await response.json();
      setTeam(teamFetch);
    }
    fetchTeam();
  }, []);

  // monitor every step
  useEffect(() => {
    let sub = watch((data) => {
      console.log("update form data:", data);
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

    // formData version
    const formData = new FormData();

    // formData.append("employeeid", data.employeeid);
    // formData.append("first_name", data.first_name);
    // formData.append("last_name", data.last_name);
    // formData.append("chinese_name", data.chinese_name);
    // formData.append("alias", data.alias);
    // formData.append("hkid", data.hkid);
    // formData.append("passport", data.passport);
    // formData.append("gender", data.gender);
    // formData.append("nationality", data.nationality);
    // formData.append("date_of_birth", JSON.stringify(data.date_of_birth));
    formData.append("profilepic", data.profilepic[0]);
    // formData.append("mobile_countrycode", data.mobile_countrycode);
    // formData.append("mobile_no", data.mobile_no);
    // formData.append("work_phone_no", data.work_phone_no);
    // formData.append("email_personal", data.email_personal);
    // formData.append("email_work", data.email_work);
    // // formData.append("password",data.password);
    // formData.append("highest_education", data.highest_education);
    // formData.append("institution_name", data.institution_name);
    // formData.append("major", data.major);
    // formData.append("last_job_company", data.last_job_company);
    // formData.append("last_job_title", data.last_job_title);
    // formData.append("start_date", JSON.stringify(data.start_date));
    // formData.append("status", data.status);
    // formData.append("job_nature", data.job_nature);
    // formData.append("notice_period", JSON.stringify(data.notice_period));
    // formData.append("report_to", data.report_to);
    // formData.append(
    //   "al_leave_entitled_peryear",
    //   JSON.stringify(data.al_leave_entitled_peryear)
    // );
    // formData.append("pay_currency", data.pay_currency);
    // formData.append("basic_salary", data.basic_salary);
    // formData.append("payment_method", data.payment_method);
    // formData.append("home_address", data.home_address);
    // formData.append("bank_code", data.bank_code);
    // formData.append("bank_name", data.bank_name);
    // formData.append("bank_number", data.bank_number);
    // formData.append("bank_payee", data.bank_payee);
    // formData.append("payment_remark", data.payment_remark);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // headers: { "Content-Type": "multi-type/form-data" },
      // body: formData,
    };

    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/user/create`,
      requestOptions
    );
    const jsonData = await res.json();

    if (jsonData.newEmployee.rowCount) {
      alert("inserted into employee table");
    }

    // const resRole = await fetch(
    //   `${process.env.REACT_APP_BACKEND_URL}/role/create`,
    //   requestOptions
    // );
    // const jsonDataRole = await res.json();

    // if (jsonDataRole.newRole.rowCount) {
    //   alert("inserted into role table");
    // }

    // checkEmployeeid();
  }

  // auto calculate the age
  const calAge = (event: any) => {
    const todayDate: any = moment(new Date(), "YYYY-MM-DD");
    const date_of_birth_input = moment(event.target.value, "YYYY-MM-DD");
    let result = todayDate.diff(date_of_birth_input, "years");
    setAge(result);

    return result;
  };

  // auto gen the work email address

  function genWorkEmail(firstNameInput: string, lastNameInput: string) {
    let firstNameOutput;
    let lastNameOutput;

    if (firstNameInput != undefined) {
      firstNameOutput = firstNameInput.replace(" ", ".");
    }

    if (lastNameInput != undefined) {
      lastNameOutput = lastNameInput.replace(" ", "");
    }

    let workEmailGenerated =
      firstNameOutput + "." + lastNameOutput + "@company.com";
    setValue("email_work", workEmailGenerated);
    return workEmailGenerated;
  }

  const getFirstName = (event: any) => {
    // setFirstName(event.target.value);
    setValue("first_name", event.target.value);
    setWorkEmail(genWorkEmail(event.target.value, getValues("last_name")));
    return;
  };

  const getLastName = (event: any) => {
    // setLastName(event.target.value);
    setValue("last_name", event.target.value);
    setWorkEmail(genWorkEmail(getValues("first_name"), event.target.value));
    return;
  };

  return (
    <div className="page-container">
      <div className="tab">
        <div>
          <button className="tablinks" onClick={showTab1}>
            1.Basic Information
          </button>
          <button className="tablinks" onClick={showTab2}>
            2.Contact Infomation
          </button>
          <button className="tablinks" onClick={showTab3}>
            3.Education and Previous Job
          </button>
          <button className="tablinks" onClick={showTab4}>
            4.Employment Detail
          </button>
          <button className="tablinks" onClick={showTab5}>
            5.Payment Detail
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div id="new-employee-form">
          {show1 && (
            <>
              <h2>Basic Infomation</h2>
              <div className="five-column-grid">
                <div>
                  <div>
                    <span>Employee ID*</span>
                  </div>
                  <input
                    // value={employeeid}
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
                    onChange={getFirstName}
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
                    onChange={getLastName}
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
                    <option value="HK">Hong Kong</option>
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

                  <input
                    value={age}
                    type="text"
                    {...register("age")}
                    disabled
                  />
                </div>
              </div>
              <hr />
            </>
          )}

          {show2 && (
            <>
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
                    value={workEmail}
                    disabled
                  />
                </div>
              </div>
              <hr />
            </>
          )}

          {show3 && (
            <>
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
            </>
          )}

          {show4 && (
            <>
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

                  <input
                    type="text"
                    {...register("al_leave_entitled_peryear")}
                  />
                </div>

                <div>
                  <div>
                    <span>
                      Title*{" "}
                      {errors.title && (
                        <span style={{ color: "red" }}>[Required]</span>
                      )}
                    </span>
                  </div>

                  <select {...register("title", { required: true })}>
                    {title.length > 0 &&
                      title.map((title) => (
                        <option
                          value={title["id"]}
                          key={"jobTitle" + title["id"]}
                        >
                          {title["title_name"]}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <div>
                    <span>
                      Department*{" "}
                      {errors.department && (
                        <span style={{ color: "red" }}>[Required]</span>
                      )}
                    </span>
                  </div>

                  <select {...register("department", { required: true })}>
                    {department.length > 0 &&
                      department.map((department) => (
                        <option
                          value={department["id"]}
                          key={"department" + department["id"]}
                        >
                          {department["dept_name"]}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <div>
                    <span>
                      Team*{" "}
                      {errors.team && (
                        <span style={{ color: "red" }}>[Required]</span>
                      )}
                    </span>
                  </div>

                  <select {...register("team", { required: true })}>
                    {team.length > 0 &&
                      team.map((team) => (
                        <option value={team["id"]} key={"team" + team["id"]}>
                          {team["team_name"]}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <div>
                    <span>
                      Report to*{" "}
                      {errors.report_to && (
                        <span style={{ color: "red" }}>[Required]</span>
                      )}
                    </span>
                  </div>

                  <select {...register("report_to", { required: true })}>
                    {reportTo.length > 0 &&
                      reportTo.map((reportTo) => (
                        <option
                          value={reportTo["id"]}
                          key={"report" + reportTo["id"]}
                        >
                          {reportTo["full_name"]}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <hr />
            </>
          )}
          {show5 && (
            <>
              <h2>Payment Detail</h2>
              <div className="five-column-grid">
                <div>
                  <div>
                    <span>Salary Currency*</span>
                  </div>
                  <select {...register("pay_currency")}>
                    <option value="HKD">HKD</option>
                  </select>
                </div>
                <div>
                  <div>
                    <span>Basic Salary*</span>
                  </div>

                  <input type="text" {...register("basic_salary")} />
                </div>
                {/* <div>
              <div>
                <span>Payment Method</span>
              </div>

              <select {...register("payment_method")}>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="cheque">Cheque</option>
                <option value="cash">Cash</option>
                <option value="other">Other</option>
              </select>
            </div> */}
                <div>
                  <div>
                    <span>
                      Payment Method*{" "}
                      {errors.payment_method && (
                        <span style={{ color: "red" }}>[Required]</span>
                      )}
                    </span>
                  </div>

                  <select {...register("payment_method", { required: true })}>
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
            </>
          )}
        </div>

        {false && (
          <>
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
          </>
        )}

        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
