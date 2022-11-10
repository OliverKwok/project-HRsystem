// import React from 'react'

// const Organization = () => {
//   return (
//     <section>Organization
//     </section>
//   )
// }
// export default Organization

// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// export default function OrgChart() {
//   return <DiagramComponent id="container" width={"100%"} height={"350px"} />;
// }

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Diagram,
  DiagramComponent,
  Inject,
  ConnectorModel,
  NodeModel,
  DiagramConstraints,
  HierarchicalTree,
  TextModel,
  DataBinding,
} from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

//Initializes data source
export default function OrgChart() {
  let data: object[] = [
    {
      Name: "Steve-Ceo",
    },
    {
      Name: "Kevin-Manager",
      ReportingPerson: "Steve-Ceo",
    },
    {
      Name: "Peter-Manager",
      ReportingPerson: "Steve-Ceo",
    },
    {
      Name: "John- Manager",
      ReportingPerson: "Peter-Manager",
    },
    {
      Name: "Mary-CSE ",
      ReportingPerson: "Peter-Manager",
    },
    {
      Name: "Jim-CSE ",
      ReportingPerson: "Kevin-Manager",
    },
    {
      Name: "Martin-CSE",
      ReportingPerson: "Kevin-Manager",
    },
  ];

  let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"550px"}
      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
        //Sets layout type
        type: "HierarchicalTree",
      }}
      //Configures data source for diagram
      dataSourceSettings={{
        id: "Name",
        parentId: "ReportingPerson",
        dataManager: items as any,
      }}
      //Sets the default properties for nodes
      getNodeDefaults={(obj: NodeModel) => {
        obj.shape = {
          type: "Text",
          content: (
            obj.data as {
              Name: "string";
            }
          ).Name,
        };
        obj.style = {
          fill: "None",
          strokeColor: "none",
          strokeWidth: 2,
          bold: true,
          color: "white",
        };
        obj.borderColor = "white";
        obj.width = 100;
        obj.height = 40;
        obj.backgroundColor = "#6BA5D7";
        obj.borderWidth = 1;
        (obj.shape as TextModel).margin = {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        };
        return obj;
      }}
      //Sets the default properties for and connectors
      getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
        connector.style = {
          strokeColor: "#6BA5D7",
          strokeWidth: 2,
        };
        (connector.targetDecorator as any).style.fill = "#6BA5D7";
        (connector.targetDecorator as any).style.strokeColor = "#6BA5D7";
        connector.type = "Orthogonal";
        return connector;
      }}
    >
      <Inject services={[DataBinding, HierarchicalTree]} />
    </DiagramComponent>
  );
}
