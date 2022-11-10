import OrgChart from "./02a-OrgChart";
import OrgListView from "./02a-OrgListView";
import "./styles/02a-org.css";

export default function Organization() {
  return (
    <div>
      <div className="tab">
        <button className="tablinks">Org Chart</button>
        <button className="tablinks">List View</button>
      </div>
      <div id="orgchart" className="tabcontent">
        <OrgChart />
      </div>
      <div id="listview" className="tabcontent">
        <OrgListView />
      </div>
    </div>
  );
}

// const licenseBanner: any = document.querySelector("div#js-licensing");
// licenseBanner.innerHTML = "";
// licenseBanner.style.display = "none";
