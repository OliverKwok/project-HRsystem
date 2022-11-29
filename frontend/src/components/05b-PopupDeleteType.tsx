import { useState, useEffect } from "react";
import "../styles/02a-Popup.css";

export default function PopupDeleteType() {
  const [popup, setPopup] = useState(false);
  const [currentLeavesType, setCurrentLeavesType] = useState([]);
  const [deleteType, setDeleteType] = useState("");
  const openPopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
    setDeleteType("");
  };

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/leave/types`, requestOptions)
      .then((response) => {
        return response.json();
        // console.log(response.json())
      })
      .then((data) => {
        setCurrentLeavesType(data);
      });
    console.log(currentLeavesType);
  }, []);

  async function deleteTypeHandler(event: any) {
    event.preventDefault();
    console.log(deleteType);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: deleteType,

      }),
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/delete`,
      requestOptions
    );
    const jsonData = await res.json();
    console.log(jsonData);

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
           Leave type to delete:
 <select
              onChange={(event: any) => {
                setDeleteType(event.target.value);
                console.log(event.target.value);
              }}
            >
              {currentLeavesType.length > 0 &&
                currentLeavesType.map((type: any) => (
                  <option value={type["type"]}>
                    {type["type"]}
                  </option>
                ))}
            </select>
            {/* <input
              type="text"
              value={deleteType}
              onChange={(event) => setDeleteType(event.target.value)}
            ></input> */}
            <br />
            <input type="submit" value="Delete leave type" />
          </form>
        </div>
      )}
    </>
  );
}
