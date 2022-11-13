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
import "../styles/02b-Grade.css";
import PopupAddGrade from "../components/02b-PopupAddGrade";

export default function Grade() {
  let grid: Grid | null;
  let groupOptions: GroupSettingsModel = {
    enableLazyLoading: true,
    columns: ["Grade", "Title"],
    showDropArea: false,
  };

  let data: Object[] = createLazyLoadData();

  function createLazyLoadData() {
    var lazyLoadData = [];
    var grade = ["A1", "A2", "B1", "B2", "C1", "C2", "C3"];
    var title = [
      "Admin Manager",
      "Designer",
      "Marketing Associate",
      "Sales Officer",
      "Business Analyst",
      "Financial Controller",
      "CEO",
    ];
    var employee = [
      "Amy Lau",
      "Jay Man",
      "Alejandro Ali",
      "Mark Wong",
      "Sam Ng",
      "Agnes Ma",
      "Jenny Siu",
    ];

    for (var i = 0; i < employee.length; i++) {
      lazyLoadData.push({
        Grade: grade[i],
        Title: title[i],
        Employee: employee[i],
      });
    }

    return lazyLoadData;
  }

  return (
    <div>
      <PopupAddGrade />
      <GridComponent
        dataSource={data}
        allowPaging={true}
        allowGrouping={true}
        groupSettings={groupOptions}
        height={500}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          <ColumnDirective field="Grade" headerText="Grade" width="160" />
          <ColumnDirective field="Title" headerText="Title" width="160" />
          <ColumnDirective
            field="Employee"
            headerText="Employee"
            width="120"
            textAlign="Right"
          />
        </ColumnsDirective>
        <Inject services={[Page, Group, LazyLoadGroup]} />
      </GridComponent>
    </div>
  );
}
