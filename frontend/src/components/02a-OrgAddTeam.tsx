import { useEffect, useState } from "react";

export default function OrgAddTeam() {
  const [getDept, setGetDept] = useState([]);

  const requestOptions = {
    method: "Get",
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/department/all`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGetDept(data);
      });
  }, []);

  const [newTeamName, setNewTeamName] = useState("");
  const [teamDept, setTeamDept] = useState();

  async function submitAddTeam(event: any) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        team_name: newTeamName,
        belonged_to_dept: teamDept,
      }),
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/department/add`,
      requestOptions
    );
    const jsonData = await res.json();
    console.log(jsonData);
  }

  return (
    <section>
      <h3>Add new Team</h3>
      <form onSubmit={submitAddTeam}>
        <div className="addTeam">
          <div>
            New Team Name
            <input
              type="text"
              value={newTeamName}
              onChange={(event) => setNewTeamName(event.target.value)}
            ></input>
          </div>
          {/* <div>
            Team Lead
            <select>
              <option value="employee1">Employee1</option>
              <option value="employee2">Employee2</option>
              <option value="employee3">Employee3</option>
            </select>
          </div> */}
          <div>
            Under which department
            <select
              onChange={(event: any) => {
                setTeamDept(event.target.value);
                console.log(event.target.value);
              }}
            >
              {getDept.length > 0 &&
                getDept.map((dept) => (
                  <option value={dept["dept_name"]}>{dept["dept_name"]}</option>
                ))}
            </select>
            {/* <select>
              <option value="dept1">CEO</option>
              <option value="dept1">CFO</option>
              <option value="dept1">COO</option>
              <option value="dept1">CTO</option>
              <option value="dept1">General Counsel</option>
              <option value="dept1">Admin</option>
              <option value="dept2">Finance</option>
              <option value="dept3">HR</option>
              <option value="dept3">Sales</option>
              <option value="dept3">Marketing</option>
              <option value="dept3">Operations</option>
              <option value="dept3">Customer Service</option>
              <option value="dept3">Technology</option>
            </select> */}
          </div>
          OR
          <div>
            Under which team
            <select>
              <option value="team1">Team1</option>
              <option value="team2">Team2</option>
              <option value="team3">Team3</option>
            </select>
          </div>
          <input type="submit" value="Add Team" />
        </div>
      </form>
    </section>
  );
}
