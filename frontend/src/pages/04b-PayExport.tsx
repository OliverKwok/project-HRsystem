import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/04b-GeneratePDFPayslip";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { usePDF } from "@react-pdf/renderer";

import "../styles/04-Payroll.scss";

// date picker
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PayExport = () => {
  // date picker
  const [datePickerValue, setDatePickerValue] = React.useState<any>(
    dayjs(new Date())
  );
  const [yearValue, setYearValue] = useState(new Date().getFullYear());
  const [monthValue, setMonthValue] = useState(new Date().getMonth() + 1);

  // const [toggleRefresh, setToggleRefresh] = useState(false);

  // pdf hook
  const document2211 = <MyDocument year="2022" month="11" />;
  const document2212 = <MyDocument year="2022" month="12" />;
  const document2301 = <MyDocument year="2023" month="01" />;
  const document2302 = <MyDocument year="2023" month="02" />;
  const document2303 = <MyDocument year="2023" month="03" />;
  const document2304 = <MyDocument year="2023" month="04" />;

  // tab show
  const [show2211, setShow2211] = useState(false);
  const [show2212, setShow2212] = useState(true);
  const [show2301, setShow2301] = useState(false);
  const [show2302, setShow2302] = useState(false);
  const [show2303, setShow2303] = useState(false);
  const [show2304, setShow2304] = useState(false);

  const [showTabTitle2211, setShowTabTitle2211] = useState(false);
  const [showTabTitle2212, setShowTabTitle2212] = useState(false);
  const [showTabTitle2301, setShowTabTitle2301] = useState(false);
  const [showTabTitle2302, setShowTabTitle2302] = useState(false);
  const [showTabTitle2303, setShowTabTitle2303] = useState(false);
  const [showTabTitle2304, setShowTabTitle2304] = useState(false);

  function showTab2211() {
    setShow2211(true);
    setShow2212(false);
    setShow2301(false);
    setShow2302(false);
    setShow2303(false);
    setShow2304(false);
  }

  function showTab2212() {
    setShow2211(false);
    setShow2212(true);
    setShow2301(false);
    setShow2302(false);
    setShow2303(false);
    setShow2304(false);
  }

  function showTab2301() {
    setShow2211(false);
    setShow2212(false);
    setShow2301(true);
    setShow2302(false);
    setShow2303(false);
    setShow2304(false);
  }

  function showTab2302() {
    setShow2211(false);
    setShow2212(false);
    setShow2301(false);
    setShow2302(true);
    setShow2303(false);
    setShow2304(false);
  }

  function showTab2303() {
    setShow2211(false);
    setShow2212(false);
    setShow2301(false);
    setShow2302(false);
    setShow2303(true);
    setShow2304(false);
  }

  function showTab2304() {
    setShow2211(false);
    setShow2212(false);
    setShow2301(false);
    setShow2302(false);
    setShow2303(false);
    setShow2304(true);
  }

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/payroll/checkConfirmMonth`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.indexOf("2022-11"));
        if (data.indexOf("2022-11") >= 0) setShowTabTitle2211(true);
        if (data.indexOf("2022-12") >= 0) setShowTabTitle2212(true);
        if (data.indexOf("2023-1") >= 0) setShowTabTitle2301(true);
        if (data.indexOf("2023-2") >= 0) setShowTabTitle2302(true);
        if (data.indexOf("2023-3") >= 0) setShowTabTitle2303(true);
        if (data.indexOf("2023-4") >= 0) setShowTabTitle2304(true);
      });
  });

  return (
    <>
      <div className="tabNewEmployee">
        <div>
          {showTabTitle2211 && (
            <button className="tablinks" onClick={showTab2211}>
              2022-11
            </button>
          )}
          {showTabTitle2212 && (
            <button className="tablinks" onClick={showTab2212}>
              2022-12
            </button>
          )}
          {showTabTitle2301 && (
            <button className="tablinks" onClick={showTab2301}>
              2023-01
            </button>
          )}
          {showTabTitle2302 && (
            <button className="tablinks" onClick={showTab2302}>
              2023-02
            </button>
          )}
          {showTabTitle2303 && (
            <button className="tablinks" onClick={showTab2303}>
              2023-03
            </button>
          )}
          {showTabTitle2304 && (
            <button className="tablinks" onClick={showTab2304}>
              2023-04
            </button>
          )}
        </div>
      </div>

      <div style={{ display: "none" }} className="month-picker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DatePicker
              views={["year", "month"]}
              label="Year and Month"
              value={datePickerValue}
              onChange={(dateInput) => {
                setDatePickerValue(dateInput);
                // console.log(new Date(dateInput).getMonth() + 1);
                let monthInput: number = new Date(dateInput).getMonth() + 1;
                let yearInput: number = new Date(dateInput).getFullYear();
                setMonthValue(monthInput);
                setYearValue(yearInput);
                console.log(monthInput);
                // const newDocument = <MyDocument year={yearInput} month={monthInput} />;
                //updateInstance();
                // setToggleRefresh((toggleRefresh: any) => !toggleRefresh);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </Stack>
        </LocalizationProvider>
      </div>

      {/* instance.loading ? (
        <div>loading....</div>
      ) : (
        <a href={instance.url as string} download="test.pdf">
          Download
        </a>
      ) */}

      {show2211 && (
        <>
          <PDFViewer height="800" width="1600">
            {document2211}
          </PDFViewer>
          <PDFDownloadLink
            document={document2211}
            fileName={`Payslip of all employees 2022-11`}
          >
            <button> Download </button>
          </PDFDownloadLink>
        </>
      )}

      {show2212 && (
        <>
          <PDFViewer height="800" width="1600">
            {document2212}
          </PDFViewer>
          <PDFDownloadLink
            document={document2212}
            fileName={`Payslip of all employees 2022-12`}
          >
            <button> Download </button>
          </PDFDownloadLink>
        </>
      )}
      {show2301 && (
        <>
          <PDFViewer height="800" width="1600">
            {document2301}
          </PDFViewer>
          <PDFDownloadLink
            document={document2301}
            fileName={`Payslip of all employees 2023-01`}
          >
            <button> Download </button>
          </PDFDownloadLink>
        </>
      )}

      {show2302 && (
        <>
          <PDFViewer height="800" width="1600">
            {document2302}
          </PDFViewer>
          <PDFDownloadLink
            document={document2302}
            fileName={`Payslip of all employees 2023-02`}
          >
            <button> Download </button>
          </PDFDownloadLink>
        </>
      )}
      {show2303 && (
        <>
          <PDFViewer height="800" width="1600">
            {document2303}
          </PDFViewer>
          <PDFDownloadLink
            document={document2303}
            fileName={`Payslip of all employees 2023-03`}
          >
            <button> Download </button>
          </PDFDownloadLink>
        </>
      )}
      {show2304 && (
        <>
          <PDFViewer height="800" width="1600">
            {document2304}
          </PDFViewer>
          <PDFDownloadLink
            document={document2304}
            fileName={`Payslip of all employees 2023-04`}
          >
            <button> Download </button>
          </PDFDownloadLink>
        </>
      )}
    </>
  );
};

export default PayExport;
