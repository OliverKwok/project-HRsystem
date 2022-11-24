import moment from "moment";
moment().format();

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
let tmrStr = addDays(new Date(), 1).toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of toda

function addDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

async function checkDayShowCalendar() {
  const requestOptions = {
    method: "Get",
  };

  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/user/dayShowCalendar`,
    requestOptions
  );
  const response = await res.json();

  let i = 1;
  for (let item of response) {
    let orginalBirthday = moment(item["start"]).format("YYYY-MM-DD");
    let birthdayShown =
      moment(new Date()).format("YYYY") + orginalBirthday.substring(4);

    item["id"] = i.toString();
    item["start"] = birthdayShown;
    item["title"] = "Birthday of " + item["title"];
    i++;
  }
  // console.log(response);
  return response;
}

export const INITIAL_EVENTS = [
  {
    // id: createEventId(),
    id: "1",
    title: "Oliver Birthday",
    start: "2022-11-25",
  },
];
//   {
//     // id: createEventId(),
//     id: "2",
//     title: "Timed event",
//     start: todayStr + "T12:00:00",
//   },

export function createEventId() {
  return String(eventGuid++);
}
