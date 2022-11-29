import { useEffect, useState } from "react";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "../styles/02a-Popup.css";
import { Dropdown } from "primereact/dropdown";

export default function PopupEditLeavesRecord(props: any) {
  const [popup, setPopup] = useState(false);
  const [namelist, setNamelist] = useState();
  const [employeeField, setEmployeeField] = useState<string>();
  const [alEntitled, setalEntitled] = useState<number>();
  const [alTaken, setalTaken] = useState<number>();
  const [employeeID, setEmployeeID] = useState<number>();
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
            setEmployeeID(data.res[i].id);
            return;
          }
        }
      });
  }, [employeeField]);
  console.log(
    "AL Taken: ",
    alTaken,
    "AL Entitled: ",
    alEntitled,
    "Employee ID: ",
    employeeID
  );

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

  async function submitEditAL(event: any) {
    event.preventDefault();
    // console.log(
    //   alTaken,
    //   typeof alTaken,
    //   alEntitled,
    //   employeeField,
    //   employeeID,
    //   typeof employeeID
    // );
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: employeeID,
        al_leave_taken: alTaken,
      }),
    };
    console.log(requestOptions);
    // const res =
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/leave/update_al`,
      requestOptions
    )
      .then((response) => response.json)
      .then((data) => console.log(data));
    // const jsonData = await res.json();
    // console.log(jsonData);
    closePopup();
    // setalEntitled(0);
    // setalTaken(0);
    // setEmployeeID(0);
    // setEmployeeField("");
    props.setToggleRefresh((toggleRefresh: any) => !toggleRefresh);
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
          <form onSubmit={submitEditAL}>
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
