import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import LeavesTypeCard from "../components/05b-LeavesTypeCard";
import "../styles/05b-LeavesType.css";
import PopupAddType from "../components/05b-PopupAddType";

interface typeState {
  id: string;
  type: string;
  description: string;
}

export default function LeavesType() {
  const [leavestype, setLeavesType] = useState([]);

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
        setLeavesType(data);
      });
    console.log(leavestype);
  }, []);

  // const types: typeState[] = [
  //   {
  //     id: "01",
  //     type: "Annaul Leave",
  //     description: "blahblahblah",
  //   },
  //   {
  //     id: "02",
  //     type: "Sick Leave",
  //     description: "blahblahblahblah",
  //   },
  //   {
  //     id: "03",
  //     type: "Maternity Leave",
  //     description: "blahblahblahblahblah",
  //   },
  // ];

  return (
    <>
      <PopupAddType />
      <div className="cards">
        {leavestype.map((type: any, id: any) => (
          <LeavesTypeCard key={id} obj={type} />
        ))}
      </div>
    </>
  );
}
