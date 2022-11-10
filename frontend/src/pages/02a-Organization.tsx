// import React from 'react'

// const Organization = () => {
//   return (
//     <section>Organization
//     </section>
//   )
// }
// export default Organization

// import "../node_modules/@syncfusion/ej2-diagrams/styles/material.css";
// import "../node_modules/@syncfusion/ej2-base/styles/material.css";
// import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
// import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
// import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function OrgChart() {
  return <DiagramComponent id="container" width={"100%"} height={"350px"} />;
}
