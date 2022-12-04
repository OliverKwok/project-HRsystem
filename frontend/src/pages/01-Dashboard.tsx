import React from "react";
import Calendar from "../components/01-Calendar";

const Dashboard = () => {
  const body = {
    width: "calc(100%-300px)",
  };

  return (
    <div style={body}>
      <Calendar />
    </div>
  );
};

export default Dashboard;
