/** @jsxImportSource @emotion/react */
import "./App.scss";
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdOutlineSubtitles } from "react-icons/md";
import { HiOutlineOfficeBuilding, HiOutlineSpeakerphone } from "react-icons/hi";
import { SlOrganization } from "react-icons/sl";
import { MdOutlinePeopleAlt, MdNotificationsNone } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { GoTriangleLeft, GoTriangleDown } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";

import Dashboard from "./pages/01-Dashboard";
import Organization from "./pages/02a-Organization";
import Employee from "./pages/02d-NewEmployee";
import EditEmployee from "./pages/02d-EditEmployee";
// import Grade from "./pages/02b-Grade";
import Title from "./pages/02c-Title";
import StatusUpdate from "./pages/02e-StatusUpdate";
import Attendance from "./pages/03-Attendance";
import PaySummary2 from "./pages/04a-PaySummary2";
import PayExport from "./pages/04b-PayExport";
import PaySetting from "./pages/04c-PaySetting";
import Leaves from "./pages/05-Leaves";
import LeavesSummary from "./pages/05a-LeavesSummary";
import LeavesType from "./pages/05b-LeavesType";
// import LeavesSetting from "./pages/05c-LeavesSetting";
// import LeavesRequest from "./pages/05c-LeavesRequest";
import LeavesRequest2 from "./pages/05c-LeavesRequest2";
import Offboarding from "./pages/06-Offboarding";
import DataInsights from "./pages/07-DataInsights";
import Notifications from "./pages/08-Notifications";
import LoginForm from "./pages/00-LoginForm";
import { useAppDispatch, useAppSelector } from "./store";
import { login, logout, restoreLogin } from "./redux/auth/actions";

function App() {
  const navigate = useNavigate();
  const [sideBarItemShow1, setSideBarItemShow1] = useState(false);
  const [sideBarItemShow2, setSideBarItemShow2] = useState(false);
  const [sideBarItemShow3, setSideBarItemShow3] = useState(false);
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function checkLogin() {
      if (token == null) return;

      const profileRes = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const profileJson = await profileRes.json();
      console.log(profileJson);
      dispatch(login(profileJson, token));
      localStorage.setItem("token", token);
      // setUsername(profileJson.username);
    }
    if (token == undefined) {
      dispatch(logout());
    } else if (token) {
      checkLogin();
    }
  }, [dispatch]);

  return (
    <>
      {isAuthenticated == true ? (
        <div className="container">
          <div className="sidebar">
            <div
              className="company-logo-container"
              onClick={() => navigate("dashboard")}
            >
              <div id="logo">
                <BsFillPeopleFill />
                {/* <img src="../public/logo.png" /> */}
              </div>
              <div>Easy HR Solutions</div>
            </div>

            <NavLink to={"dashboard"}>
              <div>
                <MdOutlineSpaceDashboard /> <span>dashboard</span>
              </div>
            </NavLink>

            <div onClick={() => setSideBarItemShow1(!sideBarItemShow1)}>
              <HiOutlineOfficeBuilding />
              <span>Company</span>
              <div className="sub-list-triangle">
                {sideBarItemShow1 ? <GoTriangleDown /> : <GoTriangleLeft />}
              </div>
            </div>

            {sideBarItemShow1 && (
              <>
                <NavLink className="sub-item" to={"organization"}>
                  <div>
                    <SlOrganization /> <span>organization</span>
                  </div>
                </NavLink>
                {/* <NavLink className="sub-item" to={"grade"}>
                  <div>
                    <TbReportSearch /> <span>grade</span>
                  </div>
                </NavLink> */}
                <NavLink className="sub-item" to={"title"}>
                  <div>
                    <MdOutlineSubtitles /> <span>Staff List</span>
                  </div>
                </NavLink>
                <NavLink className="sub-item" to={"employee"}>
                  <div>
                    <MdOutlinePeopleAlt /> <span>Employee Info</span>
                  </div>
                </NavLink>
                <NavLink className="sub-item" to={"statusupdate"}>
                  <div>
                    <MdOutlinePeopleAlt /> <span>status update</span>
                  </div>
                </NavLink>
              </>
            )}

            <div onClick={() => setSideBarItemShow2(!sideBarItemShow2)}>
              <HiOutlineOfficeBuilding />
              <span>Payroll</span>
              <div className="sub-list-triangle">
                {sideBarItemShow1 ? <GoTriangleDown /> : <GoTriangleLeft />}
              </div>
            </div>

            {sideBarItemShow2 && (
              <>
                <NavLink className="sub-item" to={"paySummary2"}>
                  <div>
                    <SlOrganization /> <span>summary</span>
                  </div>
                </NavLink>
                <NavLink className="sub-item" to={"payExport"}>
                  <div>
                    <TbReportSearch /> <span>export</span>
                  </div>
                </NavLink>
                <NavLink className="sub-item" to={"paySetting"}>
                  <div>
                    <MdOutlineSubtitles /> <span>setting</span>
                  </div>
                </NavLink>
              </>
            )}

            <NavLink className="nav-item" to={"attendance"}>
              <div>
                <MdOutlineSpaceDashboard /> <span>attendance</span>
              </div>
            </NavLink>

            <div onClick={() => setSideBarItemShow3(!sideBarItemShow3)}>
              <HiOutlineOfficeBuilding />
              <span>Leaves</span>
              <div className="sub-list-triangle">
                {sideBarItemShow3 ? <GoTriangleDown /> : <GoTriangleLeft />}
              </div>
            </div>

            {sideBarItemShow3 && (
              <>
                <NavLink className="sub-item" to={"leavesSummary"}>
                  <div>
                    <SlOrganization /> <span>summary</span>
                  </div>
                </NavLink>
                <NavLink className="sub-item" to={"leavesType"}>
                  <div>
                    <TbReportSearch /> <span>leaves type</span>
                  </div>
                </NavLink>
                {/* <NavLink className="sub-item" to={"leavesRequest"}>
                  <div>
                    <MdOutlineSubtitles /> <span>requests</span>
                  </div>
                </NavLink> */}
                <NavLink className="sub-item" to={"leavesRequest2"}>
                  <div>
                    <MdOutlineSubtitles /> <span>requests</span>
                  </div>
                </NavLink>
              </>
            )}

            <NavLink className="nav-item" to={"offboarding"}>
              <div>
                <MdOutlineSpaceDashboard /> <span>offboarding</span>
              </div>
            </NavLink>
            <NavLink className="nav-item" to={"datainsights"}>
              <div>
                <MdOutlineSpaceDashboard /> <span>data insights</span>
              </div>
            </NavLink>
            <NavLink className="nav-item" to={"notifications"}>
              <div>
                <MdOutlineSpaceDashboard /> <span>notifications</span>
              </div>
            </NavLink>
          </div>
          <div className="main-container">
            <div className="navbar">
              <div className="navbar-grid">
                <HiOutlineSpeakerphone />
              </div>
              <div id="announcement">Sample Company Announcement</div>

              {/* <div className="navbar-grid-username">
                Welcome back: {username}
              </div> */}
              <div className="navbar-grid">
                <MdNotificationsNone />
                <span>1</span>
              </div>
              <div className="navbar-grid">
                <FiSettings />
              </div>
              <div className="navbar-grid">
                <AiOutlineLogout onClick={() => dispatch(logout())} />
              </div>
            </div>
            <div className="main">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="organization" element={<Organization />}></Route>
                {/* <Route path="grade" element={<Grade />}></Route> */}
                <Route path="title" element={<Title />}></Route>
                <Route path="employee" element={<Employee />}></Route>
                <Route path="editEmployee" element={<EditEmployee />}></Route>
                <Route path="statusUpdate" element={<StatusUpdate />}></Route>
                <Route path="attendance" element={<Attendance />}></Route>
                <Route path="paySummary2" element={<PaySummary2 />}></Route>
                <Route path="payExport" element={<PayExport />}></Route>
                <Route path="paySetting" element={<PaySetting />}></Route>
                <Route path="leaves" element={<Leaves />}></Route>
                <Route path="leavessummary" element={<LeavesSummary />}></Route>
                <Route path="leavestype" element={<LeavesType />}></Route>
                {/* <Route path="leavessetting" element={<LeavesSetting />}></Route> */}
                {/* <Route path="leavesrequest" element={<LeavesRequest />}></Route> */}
                <Route
                  path="leavesrequest2"
                  element={<LeavesRequest2 />}
                ></Route>
                <Route path="offboarding" element={<Offboarding />}></Route>
                <Route path="datainsights" element={<DataInsights />}></Route>
                <Route path="notifications" element={<Notifications />}></Route>
                <Route path="login" element={<LoginForm />}></Route>
                {/* <Route path="editEmployee/:id" children={<EditEmployee />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
function setPage(
  arg0: (page: any) => void
): React.MouseEventHandler<HTMLAnchorElement> | undefined {
  throw new Error("Function not implemented.");
}
