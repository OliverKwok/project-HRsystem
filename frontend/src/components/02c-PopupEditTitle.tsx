import { useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";

export default function PopupEditTitle(props: {
  employeeTitle: string;
  employeeDepartment: string;
}) {
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };
  // console.log(props.employeeTitle);

  return (
    <div>
      <button className="edittitleBtn" onClick={openPopup}>
        Edit
      </button>
      {popup && (
        <div className="popupBody_editTitle">
          <div className="popupHeader">
            <h2>Edit Title</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          <form>
            <p>
              Name: <input type="text" value={props.employeeTitle}></input>
            </p>
            <p>
              Department:{" "}
              <input type="text" value={props.employeeDepartment}></input>
            </p>

            <button type="submit">Save</button>
            <button type="submit">Delete Title</button>
          </form>
        </div>
      )}
    </div>
  );
}
