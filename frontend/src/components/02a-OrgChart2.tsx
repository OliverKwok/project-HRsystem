import React, { useEffect, useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "../styles/02a-OrgChart2.css";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";
import { ResultType } from "@remix-run/router/dist/utils";

export default function OrgChart2() {
  const [selection, setSelection] = useState([]);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/department/orgchart`
      );
      let result = await response.json();
      console.log(result);
      setMyData(result);
    }
    fetchData();
  }, []);

  // const data = [
  //   {
  //     label: "CEO",
  //     type: "person",
  //     className: "p-person",
  //     expanded: true,
  //     data: { name: "Walter White", avatar: "walter.jpg" },
  //     children: [
  //       {
  //         label: "CFO",
  //         type: "person",
  //         className: "p-person",
  //         expanded: true,
  //         data: { name: "Saul Goodman", avatar: "saul.jpg" },
  //         children: [
  //           {
  //             label: "Tax",
  //             className: "department-cfo",
  //             children: [
  //               {
  //                 label: "Tax Manager",
  //                 type: "person",
  //                 className: "p-person",
  //                 expanded: true,
  //                 data: { name: "Mary Chan", avatar: "hello.jpg" },
  //               },
  //             ],
  //           },
  //           {
  //             label: "Legal",
  //             className: "department-cfo",
  //           },
  //         ],
  //       },
  //       {
  //         label: "COO",
  //         type: "person",
  //         className: "p-person",
  //         expanded: true,
  //         data: { name: "Mike E.", avatar: "mike.jpg" },
  //         children: [
  //           {
  //             label: "Operations",
  //             className: "department-coo",
  //           },
  //         ],
  //       },
  //       {
  //         label: "CTO",
  //         type: "person",
  //         className: "p-person",
  //         expanded: true,
  //         data: { name: "Jesse Pinkman", avatar: "jesse.jpg" },
  //         children: [
  //           {
  //             label: "Development",
  //             className: "department-cto",
  //             expanded: true,
  //             children: [
  //               {
  //                 label: "Analysis",
  //                 className: "department-cto",
  //               },
  //               {
  //                 label: "Front End",
  //                 className: "department-cto",
  //               },
  //               {
  //                 label: "Back End",
  //                 className: "department-cto",
  //               },
  //             ],
  //           },
  //           {
  //             label: "QA",
  //             className: "department-cto",
  //           },
  //           {
  //             label: "R&D",
  //             className: "department-cto",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  function nodeTemplate(node: any) {
    if (node.type === "person") {
      return (
        <div>
          <div className="node-header">{node.label}</div>
          <div className="node-content">
            <img
              alt={node.data.avatar}
              src={process.env.PUBLIC_URL+ node.data.avatar}
              style={{ width: "32px" }}
            />
            <div>{node.data.name}</div>
          </div>
        </div>
      );
    }
    return node.label;
  }

  return (
    <div className="organizationchart-demo">
      <div className="card">
        {myData.length > 0 ? <OrganizationChart
          value={myData}
          nodeTemplate={nodeTemplate}
          selection={selection}
          selectionMode="multiple"
          //   onSelectionChange={(event: any) => setSelection(event.data)}
          className="company"
        ></OrganizationChart>: <>nothing</>}
        {/* <OrganizationChart
          value={myData}
          nodeTemplate={nodeTemplate}
          selection={selection}
          selectionMode="multiple"
          //   onSelectionChange={(event: any) => setSelection(event.data)}
          className="company"
        ></OrganizationChart> */}
      </div>
    </div>
  );
}
