/** @jsxImportSource @emotion/react */
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi"; //icon

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

// import { useStateContext } from "./contexts/ContextProvider";

function App() {
  // const { activeMenu } = useStateContext();

  const activeMenu = true;

  return (
    <div>
      {/* <div
        css={css`
          padding: 32px; 
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: red;
          }
        `}
      >         
      </div>*/}
      <BrowserRouter>
        <div>
        <div
            css={css`
              background: white;
              width: 72px;
              position: fixed;
            `}
          >
            Sidebar
          </div>
          <div
            css={css`
              position: fixed;
              right: 20px;
              bottom: 20px;
              z-index: "100"; ;
            `}
          >
            <button
              type="button"
              css={css`
                background: turquoise;
                border: 0px;
                border-radius: 50%;
                font-size: 30px;
                padding: 10px 10px 5px 10px;
                &:hover {
                  color: white;
                  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
                    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                }
              `}
            >
              <FiSettings />
            </button>
          </div>

          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
