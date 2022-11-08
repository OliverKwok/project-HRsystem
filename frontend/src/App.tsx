/** @jsxImportSource @emotion/react */
import "./App.scss";
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa";

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
  // const { collapseSidebar } = useProSidebar();
  // no need hide sidebar

  interface PageType {
    page: React.ReactNode;
  }

  const navigate = useNavigate();
  const [sideBarItemShow1, setSideBarItemShow1] = useState(false);
  const [sideBarItemShow2, setSideBarItemShow2] = useState(false);

  return (
    <div className="container">
      <div className="sidebar">
        <div id="company-logo" onClick={() => navigate("dashboard")}>
          <BsFillPeopleFill /> <span>Company logo</span>
        </div>
        <div onClick={() => navigate("dashboard")}>
          <MdOutlineSpaceDashboard /> <span>Dashboard</span>
        </div>
        <div onClick={() => navigate("organization")}>
          <MdOutlineSpaceDashboard /> <span>Organization</span>
        </div>
        <div onClick={() => navigate("employee")}>
          <MdOutlineSpaceDashboard /> <span>Employee</span>
        </div>
        <div onClick={() => setSideBarItemShow1(!sideBarItemShow1)}>
          <MdOutlineSpaceDashboard />
          <span>Group 1</span>
        </div>

        {sideBarItemShow1 && (
          <>
            <div className="sub-item" onClick={() => navigate("attendance")}>
              <FaRegHandPointRight /> <span>Attendance</span>
            </div>
            <div className="sub-item" onClick={() => navigate("payroll")}>
              <FaRegHandPointRight /> <span>Payroll</span>
            </div>
          </>
        )}
        <div onClick={() => setSideBarItemShow2(!sideBarItemShow2)}>
          <MdOutlineSpaceDashboard /> <span>Group 2</span>
        </div>

        {sideBarItemShow2 && (
          <>
            <div className="sub-item" onClick={() => navigate("attendance")}>
              <FaRegHandPointRight /> <span>Attendance</span>
            </div>
            <div className="sub-item" onClick={() => navigate("payroll")}>
              <FaRegHandPointRight /> <span>Payroll</span>
            </div>
          </>
        )}
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="organization" element={<Organization />}></Route>
          <Route path="employee" element={<Employee />}></Route>
          <Route path="attendance" element={<Attendance />}></Route>
          <Route path="payroll" element={<Payroll />}></Route>
        </Routes>
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
    </div>
  );
}

export default App;
function setPage(
  arg0: (page: any) => void
): React.MouseEventHandler<HTMLAnchorElement> | undefined {
  throw new Error("Function not implemented.");
}
