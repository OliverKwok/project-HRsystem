import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi"; //icon
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Approval,
  Attendence,
  Calendar,
  Department,
  Employee,
  HRsystem,
  Kanban,
  Leave,
  Payroll,
  Recruitment,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";

import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {activeMenu} = useStateContext()

  return (
    <div>
      <BrowserRouter>
        <div class="flex relative dark:bg-main-dark-bg">
          <div class="fixed right-4 bottom-4" style={{ zIndex: "100" }}>
            {/* <TooltipComponent content="Settings" position="Top"> */}
              {/* TODO cannot see setting word */}
              <button
                type="button"
                class="text-3xl p-3 hover:drop-shadow-lg hover:bg-light-gray text-white"
                style={{ background: "RGB(20,184,166)", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            {/* </TooltipComponent> */}
          </div>
          {activeMenu ? (
            <div class="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div class="w-0 dark:bg-secondary-dark-bg">
              {" "}
              <Sidebar />
            </div>
          )}
          <div
            class={`dark:bg-main-bg bg-main-bg mi -h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div class="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* dashboard */}
              <Route path="/" element={<HRsystem />} />
              <Route path="/HRsystem" element={<HRsystem />} />
              {/* pages */}
              <Route path="/approval" element={<Approval />} />
              <Route path="/attendance" element={<Attendence />} />
              <Route path="/department" element={<Department />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/leave" element={<Leave />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/recruitment" element={<Recruitment />} />
              {/* App */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              {/* chart */}
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/colorMapping" element={<ColorMapping />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
