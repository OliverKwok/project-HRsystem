import React from "react";
import "../styles/02b-Grade.css"

const Grade = () => {
  return (
    <>
      <h1>Grades</h1>
      <button>Add New Grade</button>
      <div className="mainTable">
        <div className="gradeCol">Grade </div>
        <div className="titleCol">Titles</div>
        <div className="employeeCol">Employees</div>
      </div>
    </>
  );
};

export default Grade;
