import "../styles/02a-Org.css";
import React, { useEffect, useState } from "react";
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
  // have_probation: string;
  // pass_probation: string;
  status: string;
  contract_end_date: string;
  probation_end_date: string;
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
      // age: 0,
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
      contract_end_date: moment(props.editContractEndDate).format("YYYY-MM-DD"),
      probation_end_date: moment(props.editProbationEndDate).format(
        "YYYY-MM-DD"
      ),
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

  // auto-fill after redirect from status update page
  const [eid, setEid] = useState<string | null>();
  // const [statusUpdateInfo, setStatusUpdateInfo] = useState<{}>();

  const [passId, setPassId] = useState("");
  const [passEmployeeid, setPassEmployeeid] = useState("");
  const [passFirstName, setPassFirstName] = useState("");
  const [passLastName, setPassLastName] = useState("");
  const [passChineseName, setPassChineseName] = useState("");
  const [passAlias, setPassAlias] = useState("");
  const [passHkid, setPassHkid] = useState("");
  const [passPassport, setPassPassport] = useState("");
  const [passGender, setPassGender] = useState("");
  const [passNationality, setPassNationality] = useState("");
  const [passDateOfBirth, setPassDateOfBirth] = useState("");
  const [passMobileCountryCode, setPassMobileCountryCode] = useState("");
  const [passMobileNo, setPassMobileNo] = useState("");
  const [passWorkPhoneNo, setPassWorkPhoneNo] = useState("");
  const [passEmailPersonal, setPassEmailPersonal] = useState("");
  const [passEmailWork, setPassEmailWork] = useState("");
  const [passHighestEducation, setPassHighestEducation] = useState("");
  const [passInstitutionName, setPassInstitutionName] = useState("");
  const [passMajor, setPassMajor] = useState("");
  const [passLastJobCompany, setPassLastJobCompany] = useState("");
  const [passLastJobTitle, setPassLastJobTitle] = useState("");
  const [passStartDate, setPassStartDate] = useState("");
  const [passStatus, setPassStatus] = useState("");
  const [passJobNature, setPassJobNature] = useState("");
  const [passNoticePeriod, setPassNoticePeriod] = useState("");
  const [passReportTo, setPassReportTo] = useState("");
  const [passDepartmentId, setPassDepartmentId] = useState("");
  const [passTeamId, setPassTeamId] = useState("");
  const [passTitleId, setPassTitleId] = useState("");
  const [passAlLeaveEntitledPeryear, setPassAlLeaveEntitledPeryear] =
    useState("");
  const [passPayCurrency, setPassPayCurrency] = useState("");
  const [passBasicSalary, setPassBasicSalary] = useState("");
  const [passPaymentMethod, setPassPaymentMethod] = useState("");
  const [passHomeAddress, setPassHomeAddress] = useState("");
  const [passBankCode, setPassBankCode] = useState("");
  const [passBankName, setPassBankName] = useState("");
  const [passBankNumber, setPassBankNumber] = useState("");
  const [passBankPayee, setPassBankPayee] = useState("");
  const [passPaymentRemark, setPassPaymentRemark] = useState("");

  useEffect(() => {
    setEid(window.localStorage.getItem("eid"));
    if (eid !== null) {
      console.log("EID passed to form: ", eid);

      fetch(`${process.env.REACT_APP_BACKEND_URL}/user/checkEID/${eid}`)
        .then((response) => {
          return response.json();
        })
        .then((data: any) => {
          console.log(data);
          console.log(data.first_name);
          setPassId(data.id);
          setPassEmployeeid(data.employeeid);
          setValue("employeeid", data.employeeid);
          setPassFirstName(data.first_name);
          setValue("first_name", data.first_name);
          setPassLastName(data.last_name);
          setValue("last_name", data.last_name);
          setPassChineseName(data.chinese_name);
          setValue("chinese_name", data.chinese_name);
          setPassAlias(data.alias);
          setValue("alias", data.alias);
          setPassHkid(data.hkid);
          setValue("hkid", data.hkid);
          setPassPassport(data.passport);
          setValue("passport", data.passport);
          setPassGender(data.gender);
          setValue("gender", data.gender);
          setPassNationality(data.nationality);
          setValue("nationality", data.nationality);
          setPassDateOfBirth(data.date_of_birth);
          setValue(
            "date_of_birth",
            moment(data.date_of_birth).format("YYYY-MM-DD")
          );
          setPassMobileCountryCode(data.mobile_countrycode);
          setValue("mobile_countrycode", data.mobile_countrycode);
          setPassMobileNo(data.mobile_no);
          setValue("mobile_no", data.mobile_no);
          setPassWorkPhoneNo(data.work_phone_no);
          setValue("work_phone_no", data.work_phone_no);
          setPassEmailPersonal(data.email_personal);
          setValue("email_personal", data.email_personal);
          setPassEmailWork(data.email_work);
          setValue("email_work", data.email_work);
          setPassEmailWork(data.email_work);
          setValue("email_work", data.email_work);
          setPassHighestEducation(data.highest_education);
          setValue("highest_education", data.highest_education);
          setPassInstitutionName(data.instutition_name);
          setValue("institution_name", data.institution_name);
          setPassMajor(data.major);
          setValue("major", data.major);
          setPassLastJobCompany(data.last_job_company);
          setValue("last_job_company", data.last_job_company);
          setPassLastJobTitle(data.last_job_title);
          setValue("last_job_title", data.last_job_title);
          setPassStartDate("data.start_date");
          setValue("start_date", moment(data.start_date).format("YYYY-MM-DD"));
          setPassStatus(data.status);
          setValue("status", data.status);
          setPassJobNature(data.job_nature);
          setValue("job_nature", data.job_nature);
          setPassNoticePeriod(data.notice_period);
          setValue("notice_period", data.notice_period);
          setPassReportTo(data.report_to);
          setValue("report_to", data.report_to);
          setPassDepartmentId(data.department_id);
          setValue("department", data.department_id);
          setPassTeamId(data.team_id);
          setValue("team", data.team_id);
          setPassTitleId(data.title_id);
          setValue("title", data.title_id);
          setPassAlLeaveEntitledPeryear(data.al_leave_entitled_peryear);
          setValue("al_leave_entitled_peryear", data.al_leave_entitled_peryear);
          setPassPayCurrency(data.pay_currency);
          setValue("pay_currency", data.pay_currency);
          setPassBasicSalary(data.basic_salary);
          setValue("basic_salary", data.basic_salary);
          setPassPaymentMethod(data.payment_method);
          setValue("payment_method", data.payment_method);
          setPassHomeAddress(data.home_address);
          setValue("home_address", data.home_address);
          setPassBankCode(data.bank_code);
          setValue("bank_code", data.bank_code);
          setPassBankName(data.bank_name);
          setValue("bank_name", data.bank_name);
          setPassBankNumber(data.bank_number);
          setValue("bank_number", data.bank_number);
          setPassBankPayee(data.bank_payee);
          setValue("bank_payee", data.bank_payee);
          setPassPaymentRemark(data.payment_remark);
          setValue("payment_remark", data.payment_remark);
        });
      console.log("EID passed to form + fetch data");
      showTab4();
      window.localStorage.removeItem("eid");
    } else if (!eid) {
      console.log("noEID found or EID cleared");
      // showTab1();
      // window.localStorage.set("hello", "world");
    }
  }, [eid]);

  // form show probation end date if job status is probation
  // form show contract end date if job status is contract

  const [probationEndDate, setProbationEndDate] = useState(false);
  const [contractEndDate, setContractEndDate] = useState(false);

  console.log(props.editStatus);
  console.log(passStatus);

  useEffect(() => {
    if (props.editStatus == "probation" || passStatus == "probation") {
      handleProbationEndDate();
    } else if (props.editStatus == "contract" || passStatus == "contract") {
      handleContractEndDate();
    }
  }, [passStatus]);

  function handleProbationEndDate() {
    setProbationEndDate(true);
    setContractEndDate(false);
  }

  function handleContractEndDate() {
    setContractEndDate(true);
    setProbationEndDate(false);
  }

  function handleOtherStatus() {
    setContractEndDate(false);
    setProbationEndDate(false);
  }

  // redirect from offboarding
  const [offboard, setOffboard] = useState<string | null>();

  useEffect(() => {
    setOffboard(window.localStorage.getItem("offboarding"));
    if (offboard !== null) {
      showTab4();
      window.localStorage.removeItem("offboarding");
    }
  }, [offboard]);

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
    // const formData = new FormData();

    // formData.append("profilepic", data.profilepic[0]);

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // headers: { "Content-Type": "multi-type/form-data" },
      // body: formData,
    };
    // console.log(JSON.stringify(data));
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/user/update`,
      requestOptions
    );
    const jsonData = await res.json();

    if (jsonData.updateEmployee) {
      alert("Employee's info is updateed");
    }
    props.editShowList(true);
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
      firstNameOutput = firstNameInput.toLowerCase().replace(" ", ".");
    }

    if (lastNameInput != undefined) {
      lastNameOutput = lastNameInput.toLowerCase().replace(" ", "");
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
    <>
      <div className="page-container">
        <div className="tabNewEmployee">
          <div>
            <button className="tablinks" onClick={showTab1}>
              1.Basic Information
              {/* 🪪 */}
            </button>
            <button className="tablinks" onClick={showTab2}>
              2.Contact Infomation
              {/* ☎️ */}
            </button>
            <button className="tablinks" onClick={showTab3}>
              3.Education & Previous Job
              {/* 🎓💼 */}
            </button>
            <button className="tablinks" onClick={showTab4}>
              4.Employment Detail
              {/* 🏢 */}
            </button>
            <button className="tablinks" onClick={showTab5}>
              5.Payment Detail
              {/* 💰 */}
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div id="new-employee-form">
            {show1 && (
              <>
                <h2 className="bigTitle">Basic Infomation</h2>
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
                      <span>
                        Chinese Name
                        {/* 🇭🇰 */}
                      </span>
                    </div>

                    <input type="text" {...register("chinese_name")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Alias
                        {/* 💬 */}
                      </span>
                    </div>

                    <input type="text" {...register("alias")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        HKID*
                        {/* 🆔 */}{" "}
                        {errors.hkid && (
                          <span style={{ color: "red" }}>[Wrong Format]</span>
                        )}
                      </span>
                    </div>

                    <input
                      type="text"
                      placeholder="eg. Z987654(3)"
                      {...register("hkid", {
                        pattern: /^([A-Z]{1,2})([0-9]{6})\(([A0-9])\)$/,
                      })}
                    />
                  </div>
                  <div>
                    <div>
                      <span>
                        Passport Number
                        {/* ✈️ */}
                      </span>
                    </div>

                    <input type="text" {...register("passport")} />
                  </div>

                  <div>
                    <div>
                      <span>
                        Gender*
                        {/* 👩🏻‍⚕️👨🏻‍⚕️ */}{" "}
                        {errors.gender && (
                          <span style={{ color: "red" }}>[Required]</span>
                        )}
                      </span>
                    </div>

                    <select {...register("gender", { required: true })}>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>

                  <div>
                    <div>
                      <span>
                        Nationality*
                        {/* 🌎 */}{" "}
                        {errors.nationality && (
                          <span style={{ color: "red" }}>[Required]</span>
                        )}
                      </span>
                    </div>

                    <select {...register("nationality", { required: true })}>
                      <option value="HK">Hong Kong</option>
                      <option value="China">China</option>
                      <option value="UK">UK</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <div>
                      <span>
                        Date of Birth*
                        {/* 🎂 */}{" "}
                        {errors.date_of_birth && (
                          <span style={{ color: "red" }}>[Required]</span>
                        )}
                      </span>
                    </div>

                    <input
                      type="date"
                      {...register("date_of_birth", {
                        pattern: /^[0-9]{4}/,
                        required: true,
                      })}
                      onChange={calAge}
                    />
                  </div>

                  {/* <div>
                  <div>
                    <span>Age</span>
                  </div>

                  <input
                    value={age}
                    type="text"
                    {...register("age")}
                    disabled
                  />
                </div> */}
                </div>
                <hr />
              </>
            )}

            {show2 && (
              <>
                <h2 className="bigTitle">Contact Infomation</h2>
                <div className="five-column-grid">
                  <div>
                    <div>
                      <span>
                        Country Code*
                        {/* 🌐 */}{" "}
                        {errors.email_personal && (
                          <span style={{ color: "red" }}>[Required]</span>
                        )}
                      </span>
                    </div>

                    <input
                      type="text"
                      {...register("mobile_countrycode", { required: true })}
                    />
                  </div>
                  <div>
                    <div>
                      <span>
                        Mobile No*
                        {/* 📱 */}{" "}
                        {errors.email_personal && (
                          <span style={{ color: "red" }}>[Required]</span>
                        )}
                      </span>
                    </div>

                    <input
                      type="text"
                      {...register("mobile_no", { required: true })}
                    />
                  </div>
                  <div>
                    <div>
                      <span>
                        Work Phone No
                        {/* 📞 */}
                      </span>
                    </div>

                    <input type="text" {...register("work_phone_no")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Personal Email*
                        {/* 📫 */}{" "}
                        {errors.email_personal && (
                          <span style={{ color: "red" }}>[Wrong format]</span>
                        )}
                      </span>
                    </div>

                    <input
                      type="text"
                      {...register("email_personal", {
                        required: true,
                        pattern:
                          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                      })}
                    />
                  </div>
                  <div>
                    <div>
                      <span>
                        Work Email*
                        {/* 📧 */}{" "}
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
                <h2 className="bigTitle">Education and Previous Job</h2>
                <div className="five-column-grid">
                  <div>
                    <div>
                      <span>
                        Highest Education
                        {/* 📚 */}
                      </span>
                    </div>

                    <input type="text" {...register("highest_education")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Institution Name
                        {/* 🏫 */}
                      </span>
                    </div>

                    <input type="text" {...register("institution_name")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Major
                        {/* 🙇🏻‍♀️ */}
                      </span>
                    </div>

                    <input type="text" {...register("major")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Last Job Company
                        {/* 💻 */}
                      </span>
                    </div>

                    <input type="text" {...register("last_job_company")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Last Job Title
                        {/* 👩🏻‍🍳 */}
                      </span>
                    </div>

                    <input type="text" {...register("last_job_title")} />
                  </div>
                </div>
                <hr />
              </>
            )}

            {show4 && (
              <>
                <h2 className="bigTitle">Employment Detail</h2>
                <div className="five-column-grid">
                  <div>
                    <div>
                      <span>
                        Start Date*
                        {/* 🎬 */}
                      </span>
                    </div>

                    <input type="date" {...register("start_date")} />
                  </div>

                  <div>
                    <div>
                      <span>
                        Job Status*
                        {/* 📑 */}
                        {errors.status && (
                          <span style={{ color: "red" }}>[Required]</span>
                        )}
                      </span>
                    </div>

                    <select
                      {...register("status", { required: true })}
                      onChange={(event: any) => {
                        console.log(event.target.value);
                        if (event.target.value == "probation") {
                          handleProbationEndDate();
                        } else if (event.target.value == "contract") {
                          handleContractEndDate();
                        } else {
                          handleOtherStatus();
                        }
                      }}
                    >
                      <option value="probation">Probation</option>
                      <option value="perm">Permanent</option>
                      <option value="contract">Contract</option>
                      <option value="terminated">Terminated</option>
                      <option value="resigned">Resigned</option>
                      <option value="retired">Retired</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {contractEndDate && (
                    <div>
                      <div>
                        <span>
                          Contract End Date*
                          {/* 🔚 */}
                        </span>
                      </div>

                      <input type="date" {...register("contract_end_date")} />
                    </div>
                  )}
                  {probationEndDate && (
                    <div>
                      <div>
                        <span>
                          Probation End Date*
                          {/* 🔚 */}
                        </span>
                      </div>

                      <input type="date" {...register("probation_end_date")} />
                    </div>
                  )}
                  <div>
                    <div>
                      <span>
                        Job Nature*
                        {/* 🕰️ */}
                      </span>
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
                      <span>
                        Notice Period* (Days)
                        {/* 🌤️ */}
                      </span>
                    </div>
                    <input type="text" {...register("notice_period")} />
                  </div>

                  <div>
                    <div>
                      <span>
                        AL Entitle / Year
                        {/* ⛱️ */}
                      </span>
                    </div>

                    <input
                      type="text"
                      {...register("al_leave_entitled_peryear")}
                    />
                  </div>

                  <div>
                    <div>
                      <span>
                        Title*
                        {/* 🎩 */}{" "}
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
                        Department*
                        {/* ⚓️ */}{" "}
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
                        Team*
                        {/* 👥 */}{" "}
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
                        Report to*
                        {/* 🔝 */}{" "}
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
                <h2 className="bigTitle">Payment Detail</h2>
                <div className="five-column-grid">
                  <div>
                    <div>
                      <span>
                        Salary Currency*
                        {/* 💲 */}
                      </span>
                    </div>
                    <select {...register("pay_currency")}>
                      <option value="HKD">HKD</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <span>
                        Basic Salary*
                        {/* 💰 */}
                      </span>
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
                        Payment Method*
                        {/* 🏦 */}{" "}
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
                      <span>
                        Home Address
                        {/* 🏡 */}
                      </span>
                    </div>

                    <input type="text" {...register("home_address")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Bank Code
                        {/* 🔢 */}
                      </span>
                    </div>

                    <input type="text" {...register("bank_code")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Bank Name
                        {/* 🏷️ */}
                      </span>
                    </div>

                    <input type="text" {...register("bank_name")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Bank Number
                        {/* 💳 */}
                      </span>
                    </div>

                    <input type="text" {...register("bank_number")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Payee Name
                        {/* 🤑 */}
                      </span>
                    </div>

                    <input type="text" {...register("bank_payee")} />
                  </div>
                  <div>
                    <div>
                      <span>
                        Payment Remark
                        {/* ✏️ */}
                      </span>
                    </div>

                    <input type="text" {...register("payment_remark")} />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* {false && (
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
        )} */}

          <button type="submit" className="submitButton">
            Submit Amendment
          </button>
        </form>
      </div>
    </>
  );
}
