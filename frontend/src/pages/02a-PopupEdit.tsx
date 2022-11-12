import { useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "./styles/02a-Popup.css";

export default function PopupEditDept() {
  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Edit</button>
      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Edit Deparment</h2>
            <h2 onClick={closePopup}>X</h2>
          </div>
          <form>
            Name: <input type="text"></input>
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>

    // <Popup trigger={<button className="button"> Edit </button>} modal>
    //   <button className="close" onClick={close}>
    //     &times;
    //   </button>
    //   <form>
    //     Name <input type="text"></input>
    //     <br />
    //     <button className="button" onClick={close}>
    //       close
    //     </button>
    //   </form>
    // </Popup>
  );
}
