import React, { useState, useEffect } from "react";
import StatusChangeCard from "../components/06-statusChangeCard";
import { Carousel } from "primereact/carousel";

interface statusCard {
  id: string;
  status: string;
  profilepic: string;
  person: string;
  position: string;
  bgcolor: string;
  completed: number;
}

export default function StatusChange() {
  const statuses: statusCard[] = [
    {
      id: "01",
      status: "Resignation",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Alex Chan",
      position: "Admin Assistant",
      bgcolor: "#6a1b9a",
      completed: 30,
    },
    {
      id: "02",
      status: "Termination",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Ben Man",
      position: "Marketing Associate",
      bgcolor: "#6a1b9a",
      completed: 60,
    },
    {
      id: "03",
      status: "Resignation",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Katherine Wong",
      position: "Finance Officer",
      bgcolor: "#6a1b9a",
      completed: 60,
    },
    {
      id: "04",
      status: "Resignation",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Charlotte Cakad",
      position: "CEO",
      bgcolor: "#6a1b9a",
      completed: 10,
    },
    {
      id: "05",
      status: "Resignation",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "David Manhill",
      position: "Technician",
      bgcolor: "#6a1b9a",
      completed: 50,
    },
  ];

  // const responsiveOptions = [
  //   {
  //     breakpoint: "1024px",
  //     numVisible: 4,
  //     numScroll: 4,
  //   },
  //   {
  //     breakpoint: "600px",
  //     numVisible: 2,
  //     numScroll: 2,
  //   },
  //   {
  //     breakpoint: "480px",
  //     numVisible: 1,
  //     numScroll: 1,
  //   },
  // ];

  return (
    <>
      <div className="card">
        <Carousel
          value={statuses}
          itemTemplate={StatusChangeCard}
          numVisible={4}
          numScroll={1}
          // responsiveOptions={responsiveOptions}
        />
      </div>
      {/* 
      {statuses.map((item: any, id) => (
        <StatusChangeCard
          key={id}
          status={item.status}
          bgcolor={item.bgcolor}
          completed={item.completed}
          person={item.person}
          position={item.position}
        />
      ))} */}
    </>
  );
}
