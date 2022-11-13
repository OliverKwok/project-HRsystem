import { ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-grids";
import {
  Grid,
  GridComponent,
  Group,
  Page,
  LazyLoadGroup,
  GroupSettingsModel,
  Inject,
} from "@syncfusion/ej2-react-grids";
import * as React from "react";
import { data } from "./02b-grade-datasource";
import "../styles/02b-Grade.css";

export default function Grade() {
  let grid: Grid | null;
  let groupOptions: GroupSettingsModel = {
    enableLazyLoading: true,
    columns: ["ProductName", "CustomerName"],
    showDropArea: false,
  };

  return (
    <div>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        allowGrouping={true}
        groupSettings={groupOptions}
        height={240}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            textAlign="Right"
            width="120"
          />
          <ColumnDirective
            field="ProductName"
            headerText="Product Name"
            width="160"
          />
          <ColumnDirective
            field="ProductID"
            headerText="Product ID"
            textAlign="Right"
            width="120"
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="120"
          />
          <ColumnDirective
            field="CustomerName"
            headerText="Customer Name"
            width="160"
          />
        </ColumnsDirective>
        <Inject services={[Page, Group, LazyLoadGroup]} />
      </GridComponent>
    </div>
  );
}

// import React from "react";
// import "../styles/02b-Grade.css"

// const Grade = () => {
//   return (
//     <>
//       <h1>Grades</h1>
//       <button>Add New Grade</button>
//       <div className="mainTable">
//         <div className="gradeCol">Grade </div>
//         <div className="titleCol">Titles</div>
//         <div className="employeeCol">Employees</div>
//       </div>
//     </>
//   );
// };

// export default Grade;
