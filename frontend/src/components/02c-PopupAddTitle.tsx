import { setUMLActivityDefaults } from "@syncfusion/ej2-react-diagrams";
import { useState, useEffect, SyntheticEvent } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";

export default function PopupAddTitle() {
  // open and close popup
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };

  // department dropdown
  let [dept, setDept] = useState([]);

  const requestOptions = {
    method: "Get",
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/title/getdept`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setDept(data);
      });
  }, []);

  // submit form to add title

  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");

  async function addTitleHandler(event: any) {
    event.preventDefault();
    console.log({
      title_name: title,
      dept: department,
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title_name: title,
        dept: department,
      }),
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/title/create`,
      requestOptions
    );
    const jsonData = await res.json();
    // return jsonData;
    console.log(jsonData);
  }

  return (
    <div>
      <button className="addtitleBtn" onClick={openPopup}>
        Add New Title
      </button>

      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Add New Title</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          <form onSubmit={addTitleHandler}>
            <p>
              Title Name:
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              ></input>
            </p>
            <p>
              Department:
              <select
                onChange={(event: any) => {
                  setDepartment(event.target.value);
                }}
              >
                {dept.length > 0 &&
                  dept.map((dept) => (
                    <option value={dept["dept_name"]}>
                      {dept["dept_name"]}
                    </option>
                  ))}
              </select>
            </p>
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
}
