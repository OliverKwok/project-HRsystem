import { useForm } from "react-hook-form";

export default function OrgAddDept() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitAddDept(data: any) {
    console.log(data);
  }

  return (
    <>
      <h3>Add new Department</h3>
      <form onSubmit={handleSubmit(submitAddDept)}>
        <div className="addDept">
          <div>
            New Department Name
            <input {...register("dept_name")} />
          </div>
          <div>
            Head
            <select {...register("dept_head")}>
              <option value="employee1">Employee1</option>
              <option value="employee2">Employee2</option>
              <option value="employee3">Employee3</option>
            </select>
          </div>
          <div>
            Led by
            <select {...register("dept_ledby")}>
              <option value="dept1">CEO</option>
              <option value="dept1">CFO</option>
              <option value="dept1">COO</option>
              <option value="dept1">CTO</option>
              <option value="dept1">General Counsel</option>
            </select>
          </div>

          <input type="submit" value="Add Department" />
        </div>
      </form>
    </>
  );
}
