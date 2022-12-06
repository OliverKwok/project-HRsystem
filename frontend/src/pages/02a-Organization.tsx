import { useState, useRef, useEffect } from "react";
import OrgChart2 from "../components/02a-OrgChart2";
// import NestedList from "../components/02a-OrgListView";
import OrgAddNew from "../components/02a-OrgAddNew";
import "../styles/02a-Org.css";

export default function Organization() {
  const body = {
    width: "calc(100%-300px)",
  };

  const [show1, setShow1] = useState(true);
  // const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  // const ref = useRef(null);
  const [toggleRefresh, setToggleRefresh] = useState(false);

  // useEffect(() => {
  //   const licenseBanner: any = document.querySelector("div#js-licensing");
  //   licenseBanner.innerHTML = "";
  //   licenseBanner.style.display = "none";
  // }, []);

  function showChart() {
    setShow1(true);
    // setShow2(false);
    setShow3(false);
  }

  // function showList() {
  //   setShow1(false);
  //   setShow2(true);
  //   setShow3(false);
  // }

  function showAddNew() {
    setShow1(false);
    // setShow2(false);
    setShow3(true);
  }

  useEffect(() => {
    showChart();
  }, [toggleRefresh]);

  return (
    <div style={body}>
      <div className="tab">
        <div>
          <button className="tablinks" onClick={showChart}>
            Organization Chart
          </button>
          {/* <button className="tablinks" onClick={showList}>
            List View
          </button> */}
        </div>
        <div>
          <button className="addnew" onClick={showAddNew}>
            + NEW
          </button>
        </div>
      </div>

      {show1 && <OrgChart2 />}
      {/* {show2 && <NestedList />} */}
      {show3 && <OrgAddNew setToggleRefresh={setToggleRefresh} />}
    </div>
  );
}
