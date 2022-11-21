import "../styles/06-HandleSteps.css";
import { useForm } from "react-hook-form";

export default function StatusUpdateForm(props: any) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitResignForm(data: any) {
    console.log(data);
  }

  return (
    <>
      {/* End of probation */}
      <form onSubmit={handleSubmit(submitResignForm)}>
        <h2>End of Probation</h2>
        <p>Employee{props.person}</p>
        <p>Position{props.position}</p>
        End Date <input {...register("enddate")} />
        <br />
        Pass Probation? <input {...register("isPass")} /> <br />
        Extension Period <input
          {...register("probationExtensionPeriod")}
        />{" "}
        <br />
        <input type="submit" />
      </form>
      {/* End of contract */}
      <form onSubmit={handleSubmit(submitResignForm)}>
        <h2>End of Contract</h2>
        <p>Employee{props.person}</p>
        <p>Position{props.position}</p>
        End Date <input {...register("enddate")} />
        <br />
        Convert to Perm? <input {...register("isConvert")} /> <br />
        Extension Period <input {...register("contractExtensionPeriod")} />{" "}
        <br />
        Terminate? <input {...register("isTerminate")} /> <br />
        <input type="submit" />
      </form>
    </>
  );
}
