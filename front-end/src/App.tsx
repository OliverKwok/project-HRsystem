/** @jsxImportSource @emotion/react */
import "./App.scss";
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { GiHumanPyramid } from "react-icons/gi";
import { MdMarkAsUnread } from "react-icons/md";

function App() {
  // const { collapseSidebar } = useProSidebar();

  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar>
          <Menu>
            <MenuItem id="company-logo">
              <MdMarkAsUnread />
               <span> Company Logo</span>
            </MenuItem>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Organization</MenuItem>
            <MenuItem>Employee</MenuItem>
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
        <main>
          {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
        </main>
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
