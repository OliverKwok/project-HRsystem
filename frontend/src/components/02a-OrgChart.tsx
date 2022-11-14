import {
  Diagram,
  DiagramComponent,
  Inject,
  ConnectorModel,
  NodeModel,
  // DiagramConstraints,
  HierarchicalTree,
  TextModel,
  DataBinding,
  PrintAndExport,
} from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

export default function OrgChart() {
  let data: object[] = [
    {
      Name: "Steve-Ceo",
      Role: "Director",
    },
    {
      Name: "Kevin-Manager",
      ReportingPerson: "Steve-Ceo",
      Role: "Manager",
    },
    {
      Name: "Peter-Manager",
      ReportingPerson: "Steve-Ceo",
      Role: "Manager",
    },
    {
      Name: "John- Manager",
      ReportingPerson: "Peter-Manager",
      Role: "Manager",
    },
    {
      Name: "Mary-CSE ",
      ReportingPerson: "Peter-Manager",
      Role: "Manager",
    },
    {
      Name: "Jim-CSE ",
      ReportingPerson: "Kevin-Manager",
      Role: "Manager",
    },
    {
      Name: "Martin-CSE",
      ReportingPerson: "Kevin-Manager",
      Role: "Manager",
    },
    {
      Name: "Oliver",
      ReportingPerson: "Jim-CSE ",
      Role: "Lead",
    },
    {
      Name: "James",
      ReportingPerson: "Jim-CSE ",
      Role: "Lead",
    },
  ];

  let items: DataManager = new DataManager(data as JSON[], new Query().take(9));

  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"550px"}
      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
        //Sets layout type
        type: "HierarchicalTree",
        // type: "OrganizationalChart",
      }}
      //Configures data source for diagram
      dataSourceSettings={{
        id: "Name",
        parentId: "ReportingPerson",
        dataManager: items as any,
      }}
      //Sets the default properties for nodes
      getNodeDefaults={(obj: NodeModel) => {
        // let colors = {
        //   Director: "rgb(0, 139,139)",
        //   Manager: "rgb(30, 30,113)",
        //   Lead: "rgb(0, 100,0)",
        // };

        obj.shape = {
          type: "Text",
          content: (
            obj.data as {
              Name: "string";
            }
          ).Name,
        };
        obj.style = {
          fill: "none",
          strokeColor: "none",
          strokeWidth: 5,
          bold: false,
          color: "black",
        };
        obj.borderColor = "#8dd3bb";
        obj.width = 100;
        obj.height = 60;
        obj.backgroundColor = "#f1f7f7";

        // obj.backgroundColor = colors[data.Role];

        obj.borderWidth = 1;
        (obj.shape as TextModel).margin = {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        };

        // obj.expandIcon = {
        //     shape: 'ArrowDown',
        //     width: 10,
        //     height: 10
        // },
        // obj.collapseIcon = {
        //     shape: 'ArrowUp',
        //     width: 10,
        //     height: 10
        // }

        return obj;
      }}
      //Sets the default properties for and connectors
      getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
        connector.style = {
          strokeColor: "black",
          strokeWidth: 1,
        };
        (connector.targetDecorator as any).style.fill = "grey";
        (connector.targetDecorator as any).style.strokeColor = "grey";
        connector.cornerRadius = 7;
        connector.type = "Orthogonal";
        return connector;
      }}
    >
      {/* let options: IExportOptions = {}; options.mode = 'Download';
      options.format = 'SVG'; diagram.exportDiagram(options); */}
      <Inject services={[DataBinding, HierarchicalTree]} />
    </DiagramComponent>
    // download option
  );
}
