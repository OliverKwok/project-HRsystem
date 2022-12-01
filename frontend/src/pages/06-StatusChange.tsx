import React from "react";
import StatusChangeCard from "../components/02e-statusUpdateCard";

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
      bgcolor: "#c7b7aa",
      completed: 60,
    },
  ];

  return (
    <>
      {statuses.map((item, id) => (
        <StatusChangeCard
          key={id}
          status={item.status}
          bgcolor={item.bgcolor}
          completed={item.completed}
          person={item.person}
          position={item.position}
        />
      ))}
    </>
  );
}
