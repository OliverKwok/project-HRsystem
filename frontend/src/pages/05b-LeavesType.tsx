import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import LeavesTypeCard from "../components/05b-LeavesTypeCard";
interface typeState {
  id: string;
  type: string;
  description: string;
}
export default function LeavesType() {
  // const header = (
  //   <img
  //     alt="Card"
  //     src="images/usercard.png"
  //     // onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
  //   />
  // );
  // const footer = (
  //   <span>
  //     <Button label="Save" icon="pi pi-check" />
  //     <Button
  //       label="Cancel"
  //       icon="pi pi-times"
  //       className="p-button-secondary ml-2"
  //     />
  //   </span>
  // );

  const types: typeState[] = [
    {
      id: "01",
      type: "Annaul Leave",
      description: "blahblahblah",
    },
    {
      id: "02",
      type: "Sick Leave",
      description: "blahblahblahblah",
    },
    {
      id: "03",
      type: "Maternity Leave",
      description: "blahblahblahblahblah",
    },
  ];

  return (
    <>
      {types.map((type, id) => (
        <LeavesTypeCard key={id} obj={type} />
      ))}
    </>
  );
}
