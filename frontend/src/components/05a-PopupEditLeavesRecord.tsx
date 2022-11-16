import { useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";

export default function PopupEditLeavesRecord() {
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div className="btn_div">
      <button className="edittitleBtn" onClick={openPopup}>
        Edit Leaves Record
      </button>
      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Edit Title</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          <form>
            <p>
              Name: <input type="text"></input>{" "}
            </p>
            <p>
              Add leave taken: <input type="text"></input>
            </p>
            <p>
              Edit leaves taken: <input type="text"></input>
            </p>
            <p>
              Cancel approved leaves: <input type="text"></input>
            </p>

            <button type="submit">Save</button>
   
          </form>
        </div>
      )}
    </div>
  );
}
