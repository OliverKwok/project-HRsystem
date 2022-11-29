import { useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";
import { Route } from "react-router-dom";
import LeavesType from "../pages/05b-LeavesType";

export default function PopupAddType(props: any) {
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
    setNewType("");
  };

  const [newType, setNewType] = useState("");

  async function addType(event: any) {
    event.preventDefault();
    console.log(newType);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: newType,
      }),
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/addnewtype`,
      requestOptions
    );
    const jsonData = await res.json();
    console.log(jsonData);

    closePopup();
    setNewType("");
    // props.setToggleRefresh((prev: any) => !prev);
    props.setToggleRefresh((toggleRefresh: any) => !toggleRefresh);
    // <Route path="leavestype" element={<LeavesType />}></Route>;
    // window.location.reload();
  }

  return (
    <div>
      <button className="addnewtypeBtn" onClick={openPopup}>
        Add New Leave Type
      </button>
      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Add New Leave Type</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          <form onSubmit={addType}>
            <p>
              Name:{" "}
              <input
                type="text"
                value={newType}
                onChange={(event) => setNewType(event.target.value)}
              ></input>
            </p>

            <input type="submit" value="Add new leave type" />
          </form>
        </div>
      )}
    </div>
  );
}
