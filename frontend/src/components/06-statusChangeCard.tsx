import { useState, useEffect } from "react";
import "../styles/06-statusChangeCard.css";

export default function StatusChangeCard(props: any) {
  
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
  
  
  return (
    <div className="statusCard">
      <h2 className="status">{props.status}</h2>
      <div>
        <img
          className="profilepic"
          src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
        ></img>
        <h3 className="person">{props.person}</h3>
        <br />
        <h3 className="position">{props.position}</h3>
      </div>
   <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${props.completed}%`}</span>
      </div>
    </div>
    </div>
  );
}
