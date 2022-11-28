import { useEffect, useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";
import { Dropdown } from "primereact/dropdown";

export default function PopupEditLeavesRecord() {
  const [popup, setPopup] = useState(false);
  const [namelist, setNamelist] = useState();
  const [employeeField, setEmployeeField] = useState<string>();
  const [alEntitled, setalEntitled] = useState<number>();
  const [alTaken, setalTaken] = useState<number>();

  //popup open and close
  const openPopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
  };

  // fetch employee list in filter + search dropdown
  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/getemployees`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNamelist(data.res);
      });
  }, []);
  // console.log(name);

  const onNameChange = (e: any) => {
    setEmployeeField(e.value.name);
  };
  console.log(employeeField);
  
  // fetch AL + leave taken of a particular employee
  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/leave/showall`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        // console.log(data.res);
        // console.log(data.length);
        // console.log(data.res.length);
        // console.log(data.res[0].name);
        for (let i = 0; i < data.res.length; i++) {
          if (data.res[i].name == employeeField) {
            setalEntitled(data.res[i].entitledAL);
            setalTaken(data.res[i].al_leave_taken);
            return;
          }
        }
      });
  }, [employeeField]);
  console.log(alTaken, alEntitled);

  function subtractAL(event: any) {
    event.preventDefault();
    if (alTaken !== undefined) {
      setalTaken(alTaken - 1);
    }
    return;
  }

  function addAL(event: any) {
    event.preventDefault();
    if (alTaken !== undefined) {
      setalTaken(alTaken + 1);
    }
  }

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
              options={namelist}
              onChange={onNameChange}
              optionLabel="name"
              filter
              // showClear
              filterBy="name"
              placeholder="Select an Employee"
              // itemTemplate={countryOptionTemplate}
            />
            <br />
            Employee: {employeeField}
            <br />
            AL entitled: {alEntitled}
            <br />
            AL taken
            <button onClick={subtractAL}> - </button>
            {alTaken}
            <button onClick={addAL}> + </button>
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
