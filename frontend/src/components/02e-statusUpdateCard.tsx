import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/02e-statusUpdateCard.css";

export default function StatusUpdateCard(props: any) {
  const [eid, setEID] = useState();

  // const containerStyles: any = {
  //   height: 30,
  //   width: "90%",
  //   backgroundColor: "#e0e0de",
  //   borderRadius: 50,
  //   margin: 20,
  // };

  // const fillerStyles: any = {
  //   height: "100%",
  //   width: `${props.completed}%`,
  //   backgroundColor: props.bgcolor,
  //   borderRadius: "inherit",
  //   textAlign: "right",
  //   transition: "width 1s ease-in-out",
  // };

  // const labelStyles: any = {
  //   padding: 15,
  //   color: "white",
  //   fontWeight: "bold",
  // };

  let statusColor: any = "";
  if (props.status === "End of Contract") {
    statusColor = { backgroundColor: "#cca0ff" };
  } else if (props.status === "End of Probation") {
    statusColor = { backgroundColor: "#fbffa0" };
  }

  // const statusColor: any = {
  //   backgroundColor: props.barColor,
  // };

  const navigate = useNavigate();

  async function redirect() {
    console.log("click");
    window.localStorage.setItem("eid", props.id);
    // console.log(props.id);
    // const requestOptions = {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     id: props.id,
    //   }),
    // };
    // console.log(requestOptions);
    // await fetch(
    //   `${process.env.REACT_APP_BACKEND_URL}/user/updateStatusID`,
    //   requestOptions
    // )
    //   .then((response) => response.json)
    //   .then((data) => console.log(data));

    navigate("/employeeList");
  }

  return (
    <div className="statusUpdateCard">
      <h2 className="status" style={statusColor}>
        {props.status}
      </h2>

      <div>
        <h3 className="endDate">{props.endDate}</h3>

        <h2 className="daysLeft">Days Left: {props.daysLeft}</h2>

        <img
          className="profilepic"
          src={process.env.PUBLIC_URL + props.profilepic}
          alt="image"
        />

        <h3 className="person">{props.person}</h3>
        <br />

        <h2 className="position">{props.position}</h2>
      </div>

      {props.status === "End of Probation" && (
        <button className="handleButton" onClick={redirect}>
          Pass or Extend?
        </button>
      )}
      {props.status === "End of Contract" && (
        <button className="handleButton" onClick={redirect}>
          End, Extend or Convert?
        </button>
      )}
    </div>
  );
}
