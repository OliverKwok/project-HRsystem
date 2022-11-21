import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/04b-GeneratePDFPayslip";
import { PDFDownloadLink } from "@react-pdf/renderer";

const PayExport = () => {
  return (
    <>
      <div>PayExport</div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      <PDFDownloadLink document={<MyDocument />} fileName={"FileName"}>
        <button> Download </button>
      </PDFDownloadLink>
    </>
  );
};

export default PayExport;
