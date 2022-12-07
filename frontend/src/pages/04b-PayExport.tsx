import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/04b-GeneratePDFPayslip";
import { PDFDownloadLink } from "@react-pdf/renderer";

import "../styles/04-Payroll.scss";

// date picker
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PayExport = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  // date picker
  const [datePickerValue, setDatePickerValue] = React.useState<any>(
    dayjs(new Date())
  );
  const [yearValue, setYearValue] = useState(new Date().getFullYear());
  const [monthValue, setMonthValue] = useState(new Date().getMonth() + 1);

  const [toggleRefresh, setToggleRefresh] = useState(false);

  useEffect(() => {
    setYear(yearValue);
    setMonth(monthValue);
  }, [toggleRefresh]);

  return (
    <>
      <div id="payroll_export_datepicker" className="month-picker">
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
                setToggleRefresh((toggleRefresh: any) => !toggleRefresh);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <PDFViewer height="800" width="1600">
        <MyDocument year={year} month={month} />
      </PDFViewer>
      <PDFDownloadLink
        document={<MyDocument year={year} month={month} />}
        fileName={`Payslip of all employees ${year}-${month}`}
      >
        <button> Download </button>
      </PDFDownloadLink>
    </>
  );
};

export default PayExport;
