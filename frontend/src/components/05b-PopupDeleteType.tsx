import { useState, useEffect } from "react";
import "../styles/02a-Popup.css";

export default function PopupDeleteType(props: any) {
  const [popup, setPopup] = useState(false);
  const [currentLeavesType, setCurrentLeavesType] = useState<any>();
  const [deleteType, setDeleteType] = useState("");
  const [typeid, setTypeID] = useState<number>();

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
  }, [deleteType, props.toggleRefreshDelete]);

  async function deleteTypeHandler(event: any) {
    event.preventDefault();

    currentLeavesType.forEach((object: any) => {
      for (let key in object) {
        if (object["type"] == deleteType) {
          setTypeID(object["id"]);
        }
      }
    });
    // for (let i = 0; i < currentLeavesType.length; i++) {
    //   if (currentLeavesType[i].type == deleteType) {
    //     setTypeID(currentLeavesType[i].id);
    //   }
    // }
    console.log(deleteType, typeid);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: deleteType,
        id: typeid,
      }),
    };
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/deletetype/${typeid}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    closePopup();
    setDeleteType("");
    props.setToggleRefreshDelete(
      (toggleRefreshDelete: any) => !toggleRefreshDelete
    );
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
                currentLeavesType.map((type: any, key: number) => (
                  <option value={type["type"]}>{type["type"]}</option>
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
