import { useState } from "react";
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
              Name: <input type="text"></input>{" "}
            </p>
            <p>
              Department: <input type="text"></input>
            </p>
            <p>
              Grade: <input type="text"></input>
            </p>

            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
