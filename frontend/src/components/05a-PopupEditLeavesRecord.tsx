import { useEffect, useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";
import { Dropdown } from "primereact/dropdown";

export default function PopupEditLeavesRecord() {
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState();
  const [employeeField, setEmployeeField] = useState<any>(null);

  const openPopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
  };

  const requestOptions = {
    method: "Get",
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/getemployees`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setName(data.res);
      });
  }, []);
  console.log(name);

  const onNameChange = (e: any) => {
    setEmployeeField(e.value);
  };

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src="images/flag/flag_placeholder.png"
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="btn_div">
      <button className="edittitleBtn" onClick={openPopup}>
        Edit Leaves Record
      </button>
      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Edit Leave Record</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          <form>
            {/* TODO filter search employee */}

            <Dropdown
              value={employeeField}
              options={name}
              onChange={onNameChange}
              optionLabel="name"
              filter
              showClear
              filterBy="name"
              placeholder="Select an Employee"
              // itemTemplate={countryOptionTemplate}
            />

            {/*  TODO show entitledAL + leave balance */}
            {/*  TODO + / - buttons around leave balance */}

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
