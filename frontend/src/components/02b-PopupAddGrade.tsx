import { useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";

export default function PopupAddGrade() {
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div>
      <button className="addnewgradeBtn" onClick={openPopup}>
        Add New Grade
      </button>
      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Add New Grade</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          <form>
            <p>
              Name: <input type="text"></input>{" "}
            </p>

            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
}
