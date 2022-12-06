import { useEffect, useState } from "react";
import "../styles/02a-AddDept.css";

export default function OrgAddDept(props: any) {
  // csuite dropdown
  const [managedBy, setManagedBy] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/department/findcsuite`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setManagedBy(data);
      });
  }, []);

  // submit form

  const [newDeptName, setNewDeptName] = useState("");
  const [managingPerson, setManagingPerson] = useState("COO");

  async function submitAddDept(event: any) {
    event.preventDefault();
    if (newDeptName !== "") {
      console.log(managingPerson);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dept_name: newDeptName,
          managed_by: managingPerson,
        }),
      };
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/department/add`,
        requestOptions
      );
      const jsonData = await res.json();
      console.log(jsonData);

      props.setToggleRefresh((toggleRefresh: any) => !toggleRefresh);
    }
  }

  return (
    <div className="addSection">
      <h3>Add new Department</h3>
      <form onSubmit={submitAddDept}>
        <div className="addDept">
          <div className="fills">
            <div>
              New Department Name
              <input
                type="text"
                value={newDeptName}
                onChange={(event) => setNewDeptName(event.target.value)}
              ></input>
            </div>
            Managed by:
            <select
              onChange={(event: any) => {
                setManagingPerson(event.target.value);
                console.log(event.target.value);
              }}
            >
              {managedBy.length > 0 &&
                managedBy.map((cperson) => (
                  <option value={cperson["title_name"]}>
                    {cperson["title_name"]}
                  </option>
                ))}
            </select>
          </div>

          <input type="submit" value="Add Department" />
        </div>
      </form>
    </div>
  );
}
