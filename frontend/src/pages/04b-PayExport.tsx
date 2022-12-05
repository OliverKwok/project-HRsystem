import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/04b-GeneratePDFPayslip";
import { PDFDownloadLink } from "@react-pdf/renderer";

const PayExport = () => {
  const [id, setId] = useState(0);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [employeeid, setEmployeeid] = useState("");
  const [name, setName] = useState("");
  const [basicSalary, setBasicSalary] = useState(0);
  const [otPay, setOtPay] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [nopayLeave, setNopayLeave] = useState(0);
  const [mpfEmployee, setMpfEmployee] = useState(0);
  const [total, setTotal] = useState(0);

  const data = [
    {
      id: 93,
      year: 2022,
      month: 12,
      basic_salary: 100000,
      ot_pay: 0,
      bonus: 0,
      nopay_leave: 0,
      mpf_employee: 1500,
      total: 98500,
      employeeid: "DEMO001",
      name: "Chan Tse Hin, Liam",
    },
    {
      id: 94,
      year: 2022,
      month: 12,
      basic_salary: 85000,
      ot_pay: 0,
      bonus: 0,
      nopay_leave: 0,
      mpf_employee: 1500,
      total: 83500,
      employeeid: "DEMO002",
      name: "Lee Yu Hin, Noah",
    },
  ];
  // const data = [
  //   {
  //     id: 1,
  //     year: 2022,
  //     month: 12,
  //     employeeid: "DEMO001",
  //     name: "Chan Tai Man, Peter",
  //     basic_salary: 20000,
  //     ot_pay: 0,
  //     bonus: 1000,
  //     nopay_leave: 0,
  //     mpf_employee: 1050,
  //     total: 19950,
  //   },
  // ];

  useEffect(() => {
    setId(data[0].id);
    setYear(data[0].year);
    setMonth(data[0].month);
    setEmployeeid(data[0].employeeid);
    setName(data[0].name);
    setBasicSalary(data[0].basic_salary);
    setOtPay(data[0].ot_pay);
    setBonus(data[0].bonus);
    setNopayLeave(data[0].nopay_leave);
    setMpfEmployee(data[0].mpf_employee);
    setTotal(data[0].total);
  });

  return (
    <>
      <div>PayExport</div>
      <PDFViewer>
        <MyDocument
          id={id}
          year={year}
          month={month}
          employeeid={employeeid}
          name={name}
          basic_salary={basicSalary}
          ot_pay={otPay}
          bonus={bonus}
          nopay_leave={nopayLeave}
          mpf_employee={mpfEmployee}
          total={total}
        />
      </PDFViewer>
      <PDFDownloadLink
        document={
          <MyDocument
            id={id}
            year={year}
            month={month}
            employeeid={employeeid}
            name={name}
            basic_salary={basicSalary}
            ot_pay={otPay}
            bonus={bonus}
            nopay_leave={nopayLeave}
            mpf_employee={mpfEmployee}
            total={total}
          />
        }
        fileName={"Payslip"}
      >
        <button> Download </button>
      </PDFDownloadLink>
    </>
  );
};

export default PayExport;
