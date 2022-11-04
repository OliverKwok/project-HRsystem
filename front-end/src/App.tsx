/** @jsxImportSource @emotion/react */
import "./App.scss";
import { css } from "@emotion/react";
import React,  { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import { FiSettings } from "react-icons/fi"; //icon

import Organization from "./pages/Organization";
import Employee from "./pages/Employee";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Dashboard from "./pages/Dashboard";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { MdMarkAsUnread } from "react-icons/md";

function App() {
  const { collapseSidebar } = useProSidebar();

  interface PageType{
    page: React.ReactNode;
}


  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh", width: '25px'}}>
        <Sidebar>
          <Menu>
            <MenuItem id="company-logo" routerLink={<NavLink to="/" />}><MdMarkAsUnread /> <span> Company Logo</span></MenuItem>
            <MenuItem routerLink={<NavLink to="/dashboard" />}> Dashboard</MenuItem>
            <MenuItem routerLink={<NavLink to="/organization" />}> Organization</MenuItem>
            <MenuItem routerLink={<NavLink to="/employee" />}> Employee</MenuItem>
            <SubMenu label="Attendance">
              <MenuItem>HR Calendar</MenuItem>
              <MenuItem>CSV Upload</MenuItem>
            </SubMenu>
            <SubMenu label="Payroll">
              <MenuItem>Monthly Summary</MenuItem>
              <MenuItem>Set OT Logic</MenuItem>
              <MenuItem>Salary Adj History</MenuItem>
              <MenuItem>Payslip</MenuItem>
            </SubMenu>
            <SubMenu label="Leave">
              <MenuItem>Summary</MenuItem>
              <MenuItem>Leave Type</MenuItem>
            </SubMenu>
            <MenuItem>Termination</MenuItem>
            <SubMenu label="Data Analysis">
              <MenuItem>Diagram A</MenuItem>
              <MenuItem>Diagram B</MenuItem>
              <MenuItem>Diagram C</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <div>
        <button onClick={() => collapseSidebar()}>Collapse</button>
          <Routes>

            <Route path="/" element={<Dashboard />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="organization" element={<Organization />}></Route>
            <Route path="employee" element={<Employee />}></Route>
          </Routes>
        </div>
      </div>

      <div className="setting">
        <button
          type="button"
          css={css`
             }
          `}
        >
          <FiSettings />
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
function setPage(arg0: (page: any) => void): React.MouseEventHandler<HTMLAnchorElement> | undefined {
  throw new Error("Function not implemented.");
}
// c
