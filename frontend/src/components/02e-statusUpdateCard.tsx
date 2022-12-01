import { useState, useEffect } from "react";
import "../styles/02e-statusUpdateCard.css";

export default function StatusUpdateCard(props: any) {

  const containerStyles: any = {
    height: 30,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20,
  };

  const fillerStyles: any = {
    height: "100%",
    width: `${props.completed}%`,
    backgroundColor: props.bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles: any = {
    padding: 15,
    color: "white",
    fontWeight: "bold",
  };

  const statusColor: any = {
    backgroundColor: props.barColor,
  };

  return (
    
    <div className="statusUpdateCard">
      <h2 className="status" style={statusColor}>
        {props.status}
      </h2>

      <div>
        <h3 className="endDate">{props.endDate}</h3>
        <h2 className="daysLeft">{props.daysLeft}</h2>
        <img
          className="profilepic"
          src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
        ></img>
        <h3 className="person">{props.person}</h3>
        <br />
        <h2 className="position">{props.position}</h2>
      </div>
      {props.status === "End of Probation" && (
        <button className="handleButton" >
          Pass or Extend?
        </button>
      )}
      {props.status === "End of Contract" && (
        <button className="handleButton" >
          End, Extend or Convert?
        </button>
      )}
    </div>
  );
}
