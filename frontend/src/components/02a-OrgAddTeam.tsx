import { useForm } from "react-hook-form";

export default function OrgAddTeam() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitAddTeam(data: any) {
    console.log(data);
  }

  return (
    <section>
         <h3>Add new Team</h3>
      <form onSubmit={handleSubmit(submitAddTeam)}>
        <div className="addTeam">
          <div>
            New Team Name
            <input {...register("team_name")} />
          </div>
          <div>
            Lead
            <select {...register("team_lead")}>
              <option value="employee1">Employee1</option>
              <option value="employee2">Employee2</option>
              <option value="employee3">Employee3</option>
            </select>
          </div>
          <div>
            Under which department
            <select {...register("dept_under")}>
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
            </select>
          </div>
          <div>
            Under which team
            <select {...register("team_under")}>
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
