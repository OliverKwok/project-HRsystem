import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { red } from "@mui/material/colors";
import { classNames } from "primereact/utils";
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';

// date picker
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function PaySummary() {
  // const [products1, setProducts1] = useState<any[]>();
  const [products2, setProducts2] = useState<any[]>();
  // const [products3, setProducts3] = useState<any[]>();
  // const [products4, setProducts4] = useState<any[]>();
  const [editingRows, setEditingRows] = useState({});
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const toast = useRef();

  // date picker
  const [datePickerValue, setDatePickerValue] = React.useState<any>(
    dayjs(new Date())
  );
  const [yearValue, setYearValue] = useState(2022);
  const [monthValue, setMonthValue] = useState(12);

  const paginationComponentOptions = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  const columns = [
    { field: "employeeid", header: "Employee ID" },
    { field: "name", header: "Name" },
    { field: "basic_salary", header: "Basic Salary" },
    { field: "ot_pay", header: "OT Pay" },
    { field: "bonus", header: "Bonus" },
    { field: "nopay_leave", header: "No Pay Leave" },
    { field: "mpf_employee", header: "MPF" },
    { field: "mpf_employee_isAmended", header: "mpf_employee_isAmended" },
    { field: "total_isAmended", header: "total_isAmended" },
    { field: "total", header: "TOTAL" },
  ];

  const statuses = [
    { label: "In Stock", value: "INSTOCK" },
    { label: "Low Stock", value: "LOWSTOCK" },
    { label: "Out of Stock", value: "OUTOFSTOCK" },
  ];

  const dataTableFuncMap = {
    // products1: setProducts1,
    products2: setProducts2,
    // products3: setProducts3,
    // products4: setProducts4,
  };

  useEffect(() => {
    // fetchProductData("products1");
    fetchProductData("products2");
    // fetchProductData("products3");
    // fetchProductData("products4");
  }, [toggleRefresh]);

  const fetchProductData = (productStateKey: any) => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/payroll/${yearValue}/${monthValue}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        (dataTableFuncMap as any)[`${productStateKey}`](data);
      });
  };

  const isPositiveInteger = (val: any) => {
    let str = String(val);
    str = str.trim();
    if (!str) {
      return false;
    }
    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  };

  const getStatusLabel = (status: any) => {
    switch (status) {
      case "INSTOCK":
        return "In Stock";

      case "LOWSTOCK":
        return "Low Stock";

      case "OUTOFSTOCK":
        return "Out of Stock";

      default:
        return "NA";
    }
  };

  const onCellEditComplete = (e: any) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "quantity":
      case "basic_salary":
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const onRowEditComplete1 = (e: any) => {
    let _products2: any = [...(products2 as any)];
    let { newData, index } = e;
    _products2[index] = newData;
    setProducts2(_products2);
  };

  // const onRowEditComplete2 = (e: any) => {
  //   let _products3: any = [...(products3 as any)];
  //   let { newData, index } = e;
  //   _products3[index] = newData;
  //   setProducts3(_products3);
  // };

  const onRowEditChange = (e: any) => {
    setEditingRows(e.data);
  };

  // const setActiveRowIndex = (index: any) => {
  //   let _editingRows = {
  //     ...editingRows,
  //     ...{ [`${(products3 as any)[index].id}`]: true },
  //   };
  //   setEditingRows(_editingRows);
  // };

  const cellEditor = (options: any) => {
    if (options.field === "basic_salary") return priceEditor(options);
    else if (options.field === "ot_pay") return priceEditor(options);
    else if (options.field === "bonus") return priceEditor(options);
    else if (options.field === "nopay_leave") return priceEditor(options);
    else if (options.field === "mpf_employee") return priceEditor(options);
    else if (options.field === "total") return priceEditor(options);
    return textEditor(options);
  };

  const textEditor = (options: any) => {
    console.log(options);
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const statusEditor = (options: any) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        optionLabel="label"
        optionValue="value"
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return (
            <span
              className={`product-badge status-${option.value.toLowerCase()}`}
            >
              {option.label}
            </span>
          );
        }}
      />
    );
  };

  const priceEditor = (options: any) => {
    return (
      <>
        {/* {console.log(options)} */}
        <InputNumber
          value={options.value}
          onValueChange={(e) => {
            options.editorCallback(e.value);

            // console.log(options.rowData);

            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                year: yearValue,
                month: monthValue,
                employeeid: options.rowData.id,
                category: options.field,
                updated_value: e.value,
              }),
            };
            // console.log(requestOptions);
            fetch(
              `${process.env.REACT_APP_BACKEND_URL}/payroll/editHistoryCreate`,
              requestOptions
            )
              .then((response) => {
                return response.json();
              })
              .then((editData) => {
                console.log(editData);
              });
            setToggleRefresh((toggleRefresh: any) => !toggleRefresh);
          }}
          mode="currency"
          currency="USD"
          locale="en-US"
        />
      </>
    );
  };

  const statusBodyTemplate = (rowData: any) => {
    return getStatusLabel(rowData.inventoryStatus);
  };

  const basicSalaryBodyTemplate = (rowData: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.basic_salary);
  };

  const otPayBodyTemplate = (rowData: any) => {
    const stockClassName = classNames({
      redNumber: rowData.ot_pay > 0 || rowData.ot_pay < 0,
    });

    let numberShown = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.ot_pay);

    return <span className={stockClassName}>{numberShown}</span>;
  };

  const bonusBodyTemplate = (rowData: any) => {
    const stockClassName = classNames({
      redNumber: rowData.bonus > 0 || rowData.bonus < 0,
    });

    let numberShown = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.bonus);

    return <span className={stockClassName}>{numberShown}</span>;
  };

  const noPayLeaveBodyTemplate = (rowData: any) => {
    const stockClassName = classNames({
      redNumber: rowData.nopay_leave > 0 || rowData.nopay_leave < 0,
    });

    let numberShown = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.nopay_leave);

    return <span className={stockClassName}>{numberShown}</span>;
  };

  const mpfBodyTemplate = (rowData: any) => {
    const stockClassName = classNames({
      redNumber: rowData.mpf_employee_isAmended == true,
      blueNumber: rowData.mpf_employee_isAmended == false,
    });

    let numberShown = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.mpf_employee);

    return <span className={stockClassName}>{numberShown}</span>;
  };

  const totalBodyTemplate = (rowData: any) => {
    const stockClassName = classNames({
      redNumber: rowData.total_isAmended == true,
      blueNumber: rowData.total_isAmended == false,
    });

    let numberShown = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.total);

    return <span className={stockClassName}>{numberShown}</span>;
  };

  return (
    <>
      <div className="month-picker-container">
        <div className="month-picker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                views={["year", "month"]}
                label="Year and Month"
                // minDate={dayjs("2018-01-01")}
                // maxDate={dayjs("2023-06-01")}
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
      </div>
      <div className="payroll-editing">
        <div className="card p-fluid">
          {/* <h5>Row Editing</h5> */}
          <DataTable
            value={products2}
            editMode="row"
            dataKey="id"
            onRowEditComplete={onRowEditComplete1}
            responsiveLayout="scroll"
            paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            rows={10}
            rowsPerPageOptions={[10, 20, 50]}
          >
            <Column
              field="employeeid"
              header="ID"
              // editor={(options) => textEditor(options)}
              style={{ width: "10%" }}
              sortable
            ></Column>
            <Column
              field="name"
              header="Name"
              // editor={(options) => textEditor(options)}
              style={{ width: "15%" }}
              sortable
            ></Column>
            {/* <Column
            field="inventoryStatus"
            header="Status"
            body={statusBodyTemplate}
            editor={(options) => statusEditor(options)}
            style={{ width: "20%" }}
          ></Column> */}
            <Column
              field="basic_salary"
              header="Basic Salary"
              body={basicSalaryBodyTemplate}
              // editor={(options) => priceEditor(options)}
              style={{ width: "15%" }}
              sortable
            ></Column>
            <Column
              field="ot_pay"
              header="+OT Pay"
              body={otPayBodyTemplate}
              editor={(options) => priceEditor(options)}
              style={{ width: "10%" }}
              sortable
            ></Column>
            <Column
              field="bonus"
              header="+Bonus"
              body={bonusBodyTemplate}
              editor={(options) => priceEditor(options)}
              style={{ width: "10%" }}
              sortable
            ></Column>
            <Column
              field="nopay_leave"
              header="-Deduction"
              body={noPayLeaveBodyTemplate}
              editor={(options) => priceEditor(options)}
              style={{ width: "10%" }}
              sortable
            ></Column>
            <Column
              field="mpf_employee"
              header="-MPF"
              body={mpfBodyTemplate}
              editor={(options) => priceEditor(options)}
              style={{ width: "10%" }}
              sortable
            ></Column>
            <Column
              field="mpf_employee_isAmended"
              header="mpf_employee_isAmended"
              style={{ display: "none" }}
            ></Column>
            <Column
              field="total"
              header="Total"
              body={totalBodyTemplate}
              editor={(options) => priceEditor(options)}
              style={{ width: "15%" }}
              sortable
            ></Column>
            <Column
              rowEditor
              headerStyle={{ width: "5%" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
}
