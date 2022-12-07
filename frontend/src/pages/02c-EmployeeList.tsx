import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import Filter from "../components/02c-Filter";
// import PopupAddTitle from "../components/02c-PopupAddTitle";
// import PopupEditTitle from "../components/02c-PopupEditTitle";
import "../styles/02c-EmployeeList.css";
import EditEmployee from "./02d-EditEmployee";

export default function Title() {
  const [showList, setShowList] = useState(true);
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

  // get eid from status update page
  const [eid, setEid] = useState<string | null>(null);
  const [offboard, setOffboard] = useState<string | null>(null);

  // table columns
  const columns = [
    {
      name: "Employee Photo",
      selector: (row: any) => row.photo,
    },
    {
      name: "Employee ID",
      selector: (row: any) => row.employeeid,
      sortable: true,
    },
    {
      name: "Employee",
      selector: (row: any) => row.employee,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row: any) => row.department,
      sortable: true,
    },

    {
      name: "Team",
      selector: (row: any) => row.team,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: "Nature",
      selector: (row: any) => row.nature,
      sortable: true,
    },

    {
      name: "Edit",
      selector: (row: any) => row.edit,
    },
  ];

  const [data, setData] = useState<any[]>([]);

  // table rows (data)
  const requestOptions = {
    method: "Get",
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/title/all`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        let fetchData = data.map((employee: any) => {
          return {
            id: employee.id,
            employeeid: employee.employeeid,
            first_name: employee.first_name,
            last_name: employee.last_name,
            chinese_name: employee.chinese_name,
            alias: employee.alias,
            hkid: employee.hkid,
            passport: employee.passport,
            gender: employee.gender,
            nationality: employee.nationality,
            date_of_birth: employee.date_of_birth,

            mobile_countrycode: employee.mobile_countrycode,
            mobile_no: employee.mobile_no,
            work_phone_no: employee.work_phone_no,
            email_personal: employee.email_personal,
            email_work: employee.email_work,

            highest_education: employee.highest_education,
            institution_name: employee.institution_name,
            major: employee.major,
            last_job_company: employee.last_job_company,
            last_job_title: employee.last_job_title,

            pay_currency: employee.pay_currency,
            basic_salary: employee.basic_salary,
            payment_method: employee.payment_method,
            home_address: employee.home_address,
            bank_code: employee.bank_code,
            bank_name: employee.bank_name,
            bank_number: employee.bank_number,
            bank_payee: employee.bank_payee,
            payment_remark: employee.payment_remark,

            start_date: employee.start_date,
            status: employee.status,
            job_nature: employee.job_nature,
            notice_period: employee.notice_period,

            report_to: employee.report_to,
            department_id: employee.department_id,
            team_id: employee.team_id,
            title_id: employee.title_id,

            al_leave_entitled_peryear: employee.al_leave_entitled_peryear,

            title: employee.title_name,
            department: employee.dept_name,
            team: employee.team_name,
            nature: employee.job_nature,
            employee: employee.alias + " " + employee.last_name,
            photo: (
              <img
                className="title_employee_photo"
                src={process.env.PUBLIC_URL + employee.profilepic}
                alt="image"
              />
            ),
            edit: (
              <button className="editButton"
                onClick={() => {
                  setShowList(false);
                  setPassId(employee.id);
                  setPassEmployeeid(employee.employeeid);
                  setPassFirstName(employee.first_name);
                  setPassLastName(employee.last_name);
                  setPassChineseName(employee.chinese_name);
                  setPassAlias(employee.alias);
                  setPassHkid(employee.hkid);
                  setPassPassport(employee.passport);
                  setPassGender(employee.gender);
                  setPassNationality(employee.nationality);
                  setPassDateOfBirth(employee.date_of_birth);
                  //
                  setPassMobileCountryCode(employee.mobile_countrycode);
                  setPassMobileNo(employee.mobile_no);
                  setPassWorkPhoneNo(employee.work_phone_no);
                  setPassEmailPersonal(employee.email_personal);
                  setPassEmailWork(employee.email_work);
                  //
                  setPassHighestEducation(employee.highest_education);
                  setPassInstitutionName(employee.institution_name);
                  setPassMajor(employee.major);
                  setPassLastJobCompany(employee.last_job_company);
                  setPassLastJobTitle(employee.last_job_title);
                  //
                  setPassStartDate(employee.start_date);
                  setPassStatus(employee.status);
                  setPassJobNature(employee.job_nature);
                  setPassNoticePeriod(employee.notice_period);
                  //
                  setPassReportTo(employee.report_to);
                  setPassDepartmentId(employee.department_id);
                  setPassTeamId(employee.team_id);
                  setPassTitleId(employee.title_id);
                  //
                  setPassAlLeaveEntitledPeryear(
                    employee.al_leave_entitled_peryear
                  );

                  //
                  setPassPayCurrency(employee.pay_currency);
                  setPassBasicSalary(employee.basic_salary);
                  setPassPaymentMethod(employee.payment_method);
                  setPassHomeAddress(employee.home_address);
                  setPassBankCode(employee.bank_code);
                  setPassBankName(employee.bank_name);
                  setPassBankNumber(employee.bank_number);
                  setPassBankPayee(employee.bank_payee);
                  setPassPaymentRemark(employee.payment_remark);
                }}
              >
                Edit
              </button>
            ),
            // edit: (
            //   <PopupEditTitle
            //     employeeTitle={employee.title_name}
            //     employeeDepartment={employee.dept_name}
            //   />
            // ),
          };
        });
        // console.log(fetchData);
        setData(fetchData);
        setEid(window.localStorage.getItem("eid"));
      });
  }, []);

  // pagination configuration
  const paginationComponentOptions = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  // filtering
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  // TODO cannot filter capital letter
  const filteredItems = data.filter(
    (item: any) =>
      (item.employeeid && item.employeeid.toLowerCase().includes(filterText)) ||
      (item.employee && item.employee.toLowerCase().includes(filterText)) ||
      (item.title && item.title.toLowerCase().includes(filterText)) ||
      (item.department && item.department.toLowerCase().includes(filterText)) ||
      (item.team && item.team.toLowerCase().includes(filterText)) ||
      (item.nature && item.nature.toLowerCase().includes(filterText)) ||
      (item.status && item.status.toLowerCase().includes(filterText))
  );
  // const filteredItems = data.filter(
  //   (item) =>
  //     JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
  //     -1
  // );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <Filter
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    console.log("loop forever", eid);
    if (eid !== null) {
      setShowList(false);
    }
  }, [eid]);

  //rendering

  return (
    <>
      {showList ? (
        <div>
          {/* <PopupAddTitle /> */}
          {data.length > 0 && (
            <DataTable
              columns={columns}
              data={filteredItems}
              striped
              pagination
              paginationComponentOptions={paginationComponentOptions}
              subHeader
              subHeaderComponent={subHeaderComponent}
            />
          )}
        </div>
      ) : (
        <EditEmployee
          editId={passId}
          editEmployeeid={passEmployeeid}
          editFirstName={passFirstName}
          editLastName={passLastName}
          editChineseName={passChineseName}
          editAlias={passAlias}
          editHkid={passHkid}
          editPassport={passPassport}
          editGender={passGender}
          editNationality={passNationality}
          editDateOfBirth={passDateOfBirth}
          //
          editMobileCountryCode={passMobileCountryCode}
          editMobileNo={passMobileNo}
          editWorkPhoneNo={passWorkPhoneNo}
          editEmailPersonal={passEmailPersonal}
          editEmailWork={passEmailWork}
          //
          editHighestEducation={passHighestEducation}
          editInstitutionName={passInstitutionName}
          editMajor={passMajor}
          editLastJobCompany={passLastJobCompany}
          editLastJobTitle={passLastJobTitle}
          //
          editStartDate={passStartDate}
          editStatus={passStatus}
          editJobNature={passJobNature}
          editNoticePeriod={passNoticePeriod}
          //
          editReportTo={passReportTo}
          editDepartmentId={passDepartmentId}
          editTeamId={passTeamId}
          editTitleId={passTitleId}
          //
          editAlLeaveEntitledPeryear={passAlLeaveEntitledPeryear}
          //
          editPayCurrency={passPayCurrency}
          editBasicSalary={passBasicSalary}
          editPaymentMethod={passPaymentMethod}
          editHomeAddress={passHomeAddress}
          editBankCode={passBankCode}
          editBankName={passBankName}
          editBankNumber={passBankNumber}
          editBankPayee={passBankPayee}
          editPaymentRemark={passPaymentRemark}
          //
          // editShowList={showList}
        />
      )}

      {!showList && <button onClick={() => setShowList(true)}>Cancel</button>}
    </>
  );
}
