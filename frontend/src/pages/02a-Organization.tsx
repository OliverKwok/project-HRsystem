import { useState, useRef, useEffect } from "react";
import OrgChart from "./02a-OrgChart";
import NestedList from "./02a-OrgListView";
import "./styles/02a-org.css";

export default function Organization() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const licenseBanner: any = document.querySelector("div#js-licensing");
    licenseBanner.innerHTML = "";
    licenseBanner.style.display = "none";
  }, []);

  function showChart() {
    setShow1(true);
    setShow2(false);
  }

  function showList() {
    setShow2(true);
    setShow1(false);
  }

  return (
    <div>
      <div className="tab">
        <button className="tablinks" onClick={showChart}>
          Org Chart
        </button>
        <button className="tablinks" onClick={showList}>
          List View
        </button>
      </div>

      {show1 && <OrgChart />}
      {show2 && <NestedList />}
    </div>
  );
}
