import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';

let data = [
  {
    id: "1",
    employeeid: "DEMO001",
    name: "Peter Chan",
    basic_salary: 20000,
    bonus: 1,
    deduction: -2,
    mpf: -3,
  },
  {
    id: "2",
    employeeid: "DEMO002",
    name: "John Wong",
    basic_salary: 10000,
    bonus: 4,
    deduction: -5,
    mpf: -6,
  },
];

export default function PaySummary() {
  const [products1, setProducts1] = useState<any[]>();
  const [products2, setProducts2] = useState<any[]>();
  const [products3, setProducts3] = useState<any[]>();
  const [products4, setProducts4] = useState<any[]>();
  const [editingRows, setEditingRows] = useState({});
  const toast = useRef();

  const columns = [
    { field: "employeeid", header: "Employee ID" },
    { field: "name", header: "Name" },
    { field: "basic_salary", header: "Basic Salary" },
    { field: "bonus", header: "Bonus" },
    { field: "deduction", header: "Deduction" },
    { field: "mpf", header: "MPF" },
  ];

  const statuses = [
    { label: "In Stock", value: "INSTOCK" },
    { label: "Low Stock", value: "LOWSTOCK" },
    { label: "Out of Stock", value: "OUTOFSTOCK" },
  ];

  const dataTableFuncMap = {
    products1: setProducts1,
    products2: setProducts2,
    products3: setProducts3,
    products4: setProducts4,
  };

  useEffect(() => {
    fetchProductData("products1");
    fetchProductData("products2");
    fetchProductData("products3");
    fetchProductData("products4");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchProductData = (productStateKey: any) => {
    (dataTableFuncMap as any)[`${productStateKey}`](data);
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

  const onRowEditComplete2 = (e: any) => {
    let _products3: any = [...(products3 as any)];
    let { newData, index } = e;
    _products3[index] = newData;
    setProducts3(_products3);
  };

  const onRowEditChange = (e: any) => {
    setEditingRows(e.data);
  };

  const setActiveRowIndex = (index: any) => {
    let _editingRows = {
      ...editingRows,
      ...{ [`${(products3 as any)[index].id}`]: true },
    };
    setEditingRows(_editingRows);
  };

  const cellEditor = (options: any) => {
    if (options.field === "basic_salary") return priceEditor(options);
    else if (options.field === "bonus") return priceEditor(options);
    else if (options.field === "deduction") return priceEditor(options);
    else if (options.field === "mpf") return priceEditor(options);
    return textEditor(options);
  };

  const textEditor = (options: any) => {
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
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
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

  const bonusBodyTemplate = (rowData: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.bonus);
  };

  const deductionBodyTemplate = (rowData: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.deduction);
  };

  const mpfBodyTemplate = (rowData: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.mpf);
  };

  return (
    <div className="datatable-editing-demo">
      <div className="card p-fluid">
        {/* <h5>Row Editing</h5> */}
        <DataTable
          value={products2}
          editMode="row"
          dataKey="id"
          onRowEditComplete={onRowEditComplete1}
          responsiveLayout="scroll"
        >
          <Column
            field="employeeid"
            header="Employee ID"
            editor={(options) => textEditor(options)}
            style={{ width: "10%" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            editor={(options) => textEditor(options)}
            style={{ width: "15%" }}
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
            editor={(options) => priceEditor(options)}
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="bonus"
            header="Bonus"
            body={bonusBodyTemplate}
            editor={(options) => priceEditor(options)}
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="deduction"
            header="Deduction"
            body={deductionBodyTemplate}
            editor={(options) => priceEditor(options)}
            style={{ width: "20%" }}
          ></Column>

          <Column
            field="mpf"
            header="MPF"
            body={mpfBodyTemplate}
            editor={(options) => priceEditor(options)}
            style={{ width: "20%" }}
          ></Column>

          <Column
            rowEditor
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
