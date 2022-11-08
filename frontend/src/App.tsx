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
          <BsFillPeopleFill /> <span>HR System</span>
        </div>
        <NavLink to={"dashboard"}>
          <div>
          <MdOutlineSpaceDashboard /> <span>dashboard</span>
          </div>
        </NavLink>
        <NavLink to={"organization"}>
          <div>
          <MdOutlineSpaceDashboard /> <span>organization</span>
          </div>
        </NavLink>
        <NavLink to={"employee"}>
          <div>
          <MdOutlineSpaceDashboard /> <span>employee</span>
          </div>
        </NavLink>

        <div onClick={() => setSideBarItemShow1(!sideBarItemShow1)}>
          <MdOutlineSpaceDashboard />
          <span>Group 1</span>
        </div>

        {sideBarItemShow1 && (
          <>
            <NavLink className="sub-item" to={"attendance"}>
              <div>

              <FaRegHandPointRight /> <span>attendance</span>
              </div>
            </NavLink>
            <NavLink className="sub-item" to={"payroll"}>
              <div>

              <FaRegHandPointRight /> <span>payroll</span>
              </div>
            </NavLink>

          </>
        )}
        <div onClick={() => setSideBarItemShow2(!sideBarItemShow2)}>
          <MdOutlineSpaceDashboard /> <span>Group 2</span>
        </div>

        {sideBarItemShow2 && (
   <>
   <NavLink className="sub-item" to={"attendance"}>
     <div>

     <FaRegHandPointRight /> <span>attendance</span>
     </div>
   </NavLink>
   <NavLink className="sub-item" to={"payroll"}>
     <div>

     <FaRegHandPointRight /> <span>payroll</span>
     </div>
   </NavLink>

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
