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
import EmployeeList from "./pages/02c-EmployeeList";
import StatusUpdate from "./pages/02e-StatusUpdate";
// import StatusUpdate2 from "./pages/02e-StatusUpdate2";
import Attendance from "./pages/03-Attendance";
import PaySummary from "./pages/04a-PaySummary";
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
      // console.log(profileJson);
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

  const SideBarStyle = {
    minWidth: "300px",
    minHeight: "100vh",
    margin: "0px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const NavLinkStyle = {
    height: "60px",
    width: "280px",
    display: "flex",
    alignItems: "center",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const TriangleStyle = {
    marginRight: "25px",
    height: "30px",
    width: "auto",
    color: "#24d1ae",
  };

  return (
    <>
      {isAuthenticated == true ? (
        <div className="container">
          <div className="sidebar" style={SideBarStyle}>
            {/* <div
              className="company-logo-container"
              onClick={() => navigate("dashboard")}
            > */}
            <div
              id="logo"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0px",
                marginLeft: "0px",
              }}
            >
              <img
                style={{ height: "150px", width: "auto" }}
                src={process.env.PUBLIC_URL + "/AppStoreLogoTransparentBG.png"}
                onClick={() => navigate("dashboard")}
              />
              {/* <BsFillPeopleFill /> */}
            </div>
            {/* <div>Easy HR Solutions</div> */}
            {/* </div> */}

            <NavLink to={"dashboard"} style={NavLinkStyle}>
              <div>
                <MdOutlineSpaceDashboard /> <span>dashboard</span>
              </div>
            </NavLink>

            <div
              onClick={() => setSideBarItemShow1(!sideBarItemShow1)}
              style={NavLinkStyle}
            >
              <HiOutlineOfficeBuilding />
              <span>Company</span>
              <div className="sub-list-triangle">
                {sideBarItemShow1 ? (
                  <GoTriangleDown style={TriangleStyle} />
                ) : (
                  <GoTriangleLeft style={TriangleStyle} />
                )}
              </div>
            </div>

            {sideBarItemShow1 && (
              <>
                <NavLink
                  className="sub-item"
                  to={"organization"}
                  style={NavLinkStyle}
                >
                  <div>
                    <SlOrganization /> <span>organization</span>
                  </div>
                </NavLink>
                {/* <NavLink className="sub-item" to={"grade"}>
                  <div>
                    <TbReportSearch /> <span>grade</span>
                  </div>
                </NavLink> */}
                <NavLink
                  className="sub-item"
                  to={"employeeList"}
                  style={NavLinkStyle}
                >
                  <div>
                    <MdOutlineSubtitles /> <span>employee list</span>
                  </div>
                </NavLink>
                <NavLink
                  className="sub-item"
                  to={"employee"}
                  style={NavLinkStyle}
                >
                  <div>
                    <MdOutlinePeopleAlt /> <span>new employee</span>
                  </div>
                </NavLink>
                <NavLink
                  className="sub-item"
                  to={"statusupdate"}
                  style={NavLinkStyle}
                >
                  <div>
                    <MdOutlinePeopleAlt /> <span>status update</span>
                  </div>
                </NavLink>
                {/* <NavLink className="sub-item" to={"statusupdate2"}>
                  <div>
                    <MdOutlinePeopleAlt /> <span>status update2</span>
                  </div>
                </NavLink> */}
              </>
            )}

            <div
              onClick={() => setSideBarItemShow2(!sideBarItemShow2)}
              style={NavLinkStyle}
            >
              <HiOutlineOfficeBuilding />
              <span>Payroll</span>
              <div className="sub-list-triangle">
                {sideBarItemShow1 ? (
                  <GoTriangleDown style={TriangleStyle} />
                ) : (
                  <GoTriangleLeft style={TriangleStyle} />
                )}
              </div>
            </div>

            {sideBarItemShow2 && (
              <>
                <NavLink
                  className="sub-item"
                  to={"paySummary"}
                  style={NavLinkStyle}
                >
                  <div>
                    <SlOrganization /> <span>summary</span>
                  </div>
                </NavLink>
                <NavLink
                  className="sub-item"
                  to={"payExport"}
                  style={NavLinkStyle}
                >
                  <div>
                    <TbReportSearch /> <span>export</span>
                  </div>
                </NavLink>
                <NavLink
                  className="sub-item"
                  to={"paySetting"}
                  style={NavLinkStyle}
                >
                  <div>
                    <MdOutlineSubtitles /> <span>setting</span>
                  </div>
                </NavLink>
              </>
            )}

            <NavLink
              className="nav-item"
              to={"attendance"}
              style={NavLinkStyle}
            >
              <div>
                <MdOutlineSpaceDashboard /> <span>attendance</span>
              </div>
            </NavLink>

            <div
              onClick={() => setSideBarItemShow3(!sideBarItemShow3)}
              style={NavLinkStyle}
            >
              <HiOutlineOfficeBuilding />
              <span>Leaves</span>
              <div className="sub-list-triangle">
                {sideBarItemShow3 ? (
                  <GoTriangleDown style={TriangleStyle} />
                ) : (
                  <GoTriangleLeft style={TriangleStyle} />
                )}
              </div>
            </div>

            {sideBarItemShow3 && (
              <>
                <NavLink
                  className="sub-item"
                  to={"leavesSummary"}
                  style={NavLinkStyle}
                >
                  <div>
                    <SlOrganization /> <span>summary</span>
                  </div>
                </NavLink>
                <NavLink
                  className="sub-item"
                  to={"leavesType"}
                  style={NavLinkStyle}
                >
                  <div>
                    <TbReportSearch /> <span>leaves type</span>
                  </div>
                </NavLink>
                {/* <NavLink className="sub-item" to={"leavesRequest"}>
                  <div>
                    <MdOutlineSubtitles /> <span>requests</span>
                  </div>
                </NavLink> */}
                <NavLink
                  className="sub-item"
                  to={"leavesRequest2"}
                  style={NavLinkStyle}
                >
                  <div>
                    <MdOutlineSubtitles /> <span>requests</span>
                  </div>
                </NavLink>
              </>
            )}

            <NavLink
              className="nav-item"
              to={"offboarding"}
              style={NavLinkStyle}
            >
              <div>
                <MdOutlineSpaceDashboard /> <span>offboarding</span>
              </div>
            </NavLink>
            <NavLink
              className="nav-item"
              to={"datainsights"}
              style={NavLinkStyle}
            >
              <div>
                <MdOutlineSpaceDashboard /> <span>data insights</span>
              </div>
            </NavLink>
            <NavLink
              className="nav-item"
              to={"notifications"}
              style={NavLinkStyle}
            >
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
                <Route path="employeeList" element={<EmployeeList />}></Route>
                <Route path="employee" element={<Employee />}></Route>
                <Route path="editEmployee" element={<EditEmployee />}></Route>
                <Route path="statusUpdate" element={<StatusUpdate />}></Route>
                {/* <Route path="statusUpdate2" element={<StatusUpdate2 />}></Route> */}
                <Route path="attendance" element={<Attendance />}></Route>
                <Route path="paySummary" element={<PaySummary />}></Route>
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
                {/* <Route path="login" element={<LoginForm />}></Route> */}
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
