import { useState, useEffect } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";

export default function PopupAddTitle() {
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };

  let [dept, setDept] = useState([]);

  // let handleDeptDropdown = (e: any) => {
  //   setDept(e.target.value);
  //   console.log(e.target.value);
  // };

  const requestOptions = {
    method: "Get",
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/title/getdept`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDept(data);
      });
  }, []);

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
          <form>
            <p>
              Title Name: <input type="text"></input>{" "}
            </p>
            <p>
              Department:
              <select>
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
