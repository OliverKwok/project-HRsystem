import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/04b-GeneratePDFPayslip";

const PayExport = () => {
  return (
    <>
      <div>PayExport</div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </>
  );
};

export default PayExport;
