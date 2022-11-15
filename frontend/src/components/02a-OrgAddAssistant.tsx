import { useForm } from "react-hook-form";

export default function OrgAddAssistant() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitAddAssistant(data: any) {
    console.log(data);
  }

  return (
    <>
      <h3>Add new Assistant</h3>
      <form onSubmit={handleSubmit(submitAddAssistant)}>
        <div>
          Name
          <select {...register("assistant_name")}>
            <option value="employee1">Employee1</option>
            <option value="employee2">Employee2</option>
            <option value="employee3">Employee3</option>
          </select>
        </div>
        <div>
          Work for
          <select {...register("boss")}>
            <option value="boss1">Boss1</option>
            <option value="boss2">Boss2</option>
            <option value="boss3">Boss3</option>
          </select>
        </div>
        <input type="submit" value="Add Assistant" />
      </form>
    </>
  );
}
