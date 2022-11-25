import { useEffect, useState } from "react";

export default function OrgAddTeam() {
  const [getDept, setGetDept] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
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
  const [teamLead, setTeamLead] = useState();

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
      `${process.env.REACT_APP_BACKEND_URL}/department/addteam`,
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
          </div>
          <div>

            <input type="submit" value="Add Team" />
          </div>
        </div>
      </form>
    </section>
  );
}
