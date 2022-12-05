import OffboardingCard from "../components/06-OffboardingCard";
import { Carousel } from "primereact/carousel";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "../styles/06-Carousel.css";
import OffboardingForm from "../components/06-OffboardingForm";

interface statusCard {
  id: string;
  status: string;
  dateApplied: string;
  dateEffective: string;
  barColor: string;
  profilepic: string;
  person: string;
  position: string;
  dateStarted: string;
  bgcolor: string;
  completed: number;
}

export default function StatusChange() {
  const statuses: statusCard[] = [
    {
      id: "01",
      status: "Resignation",
      dateApplied: "2022-12-06",
      dateEffective: "2023-01-05",
      barColor: "#FFC0CB",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Alex Chan",
      position: "Admin Assistant",
      dateStarted: "2020-03-28",
      bgcolor: "#6a1b9a",
      completed: 30,
    },
    {
      id: "02",
      status: "Termination",
      dateApplied: "2022-11-26",
           dateEffective: "2023-01-05",
      barColor: "#EB5406",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Ben Man",
      position: "Marketing Associate",
           dateStarted: "2020-03-28",
      bgcolor: "#6a1b9a",
      completed: 60,
    },
    {
      id: "03",
      status: "Resignation",
      dateApplied: "2022-11-26",
           dateEffective: "2023-01-05",
      barColor: "#FFC0CB",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Katherine Wong",
      position: "Finance Officer",
           dateStarted: "2020-03-28",
      bgcolor: "#6a1b9a",
      completed: 60,
    },
    {
      id: "04",
      status: "Retirement",
      dateApplied: "2022-11-26",
           dateEffective: "2023-01-05",
      barColor: "#a0fff0",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Howard Lane",
      position: "Sales Director",
           dateStarted: "2020-03-28",
      bgcolor: "#6a1b9a",
      completed: 10,
    },
    {
      id: "05",
      status: "Resignation",
      dateApplied: "2022-11-26",
           dateEffective: "2023-01-05",
      barColor: "#FFC0CB",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "David Manhill",
      position: "Technician",
           dateStarted: "2020-03-28",
      bgcolor: "#6a1b9a",
      completed: 50,
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 2,
      numScroll: 1,
    },
  ];

  return (
    <>
      {/* <Splitter style={{ height: "500px" }} layout="vertical">
        <SplitterPanel className="flex align-items-center justify-content-center"> */}
      <div className="card">
        <Carousel
          value={statuses}
          itemTemplate={OffboardingCard}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
        />
      </div>
      {/* </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          <div className="space"></div>
          <OffboardingForm />
        </SplitterPanel>
      </Splitter> */}

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
