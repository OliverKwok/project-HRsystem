import { useState } from "react";
import "../styles/02a-Popup.css";

export default function PopupDeleteType() {
  const [popup, setPopup] = useState(false);
  const [deleteType, setDeleteType] = useState("");
  const openPopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
    setDeleteType("");
  };

  async function deleteTypeHandler(event: any) {
    event.preventDefault();
    console.log(deleteType);
  }

  return (
    <>
      <button className="deletetypeBtn" onClick={openPopup}>
        Delete a Leave Type
      </button>
      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Delete a Leave Type</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          <form onSubmit={deleteTypeHandler}>
            <label htmlFor="">Name: </label>
            <input
              type="text"
              value={deleteType}
              onChange={(event) => setDeleteType(event.target.value)}
            ></input>
            <br />
            <input type="submit" value="Delete leave type" />
          </form>
        </div>
      )}
    </>
  );
}
