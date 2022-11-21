import React from "react";
import StatusUpdateForm from "../components/02e-StatusUpdateForm";
import StatusChangeCard from "../components/06-statusChangeCard";
import { Carousel } from "primereact/carousel";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "../styles/06-Carousel.css";

interface statusCard {
  id: string;
  status: string;
  barColor: string;
  profilepic: string;
  person: string;
  position: string;
  bgcolor: string;
  completed: number;
}

export default function StatusUpdate() {
 const statuses: statusCard[] = [
    {
      id: "01",
      status: "End of Probation",
      barColor: "#fbffa0",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Charlotte Cakad",
      position: "Programmer",
      bgcolor: "#6a1b9a",
      completed: 10,
    },
    {
      id: "02",
      status: "End of Contract",
      barColor: "#cca0ff",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Angela Baby",
      position: "UX Designer",
      bgcolor: "#6a1b9a",
      completed: 50,
    },
  ];

  return (
    <>
      <Splitter style={{ height: "500px" }} layout="vertical">
        <SplitterPanel className="flex align-items-center justify-content-center">
          <div className="card">
            <Carousel
              value={statuses}
              itemTemplate={StatusChangeCard}
              numVisible={5}
              numScroll={1}
       
            />
          </div>
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          <div className="space"></div>
  
      Status Update
      <StatusUpdateForm />
        </SplitterPanel>
      </Splitter>

    </>
  )
}
