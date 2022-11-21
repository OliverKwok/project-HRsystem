import { Steps } from "primereact/steps";
import "../styles/06-HandleSteps.css";
import { useForm } from "react-hook-form";
import GenRefLetter from "./06-genRefLetter";

export default function OffboardingForm(props: any) {
  const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

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
      <Steps model={steps} />
      {/* Resignation  */}
      <form onSubmit={handleSubmit(submitResignForm)}>
        <h2>Resignation</h2>
        <p>Employee{props.person}</p>
        <p>Position{props.position}</p>
        Application Date <input {...register("applicationdate")} />
        <br />
        Effective Date <input {...register("effectivedate")} />
        <br />
        Notice Period <input {...register("noticeperiod")} />
        <br />
        Within Notice Period? <input {...register("isWithinPeriod")} />
        <br />
        Employee's payment in lieu <input {...register("employeepayment")} />
        <br />
        Leave Compensation <input {...register("leavecompensation")} />
        <br />
        Employer's payment in lieu <input {...register("employerpayment")} />
        <br />
        Total Compensation by Employee
        <input {...register("totaltoEmployer")} />
        <br />
        Total Compensation by Employer
        <input {...register("totaltoEmployee")} />
        <br />
        <input type="submit" />
      </form>
      <GenRefLetter />
      {/* Termination */}
      <form onSubmit={handleSubmit(submitResignForm)}>
        <h2>Termination</h2>
        <p>Employee{props.person}</p>
        <p>Position{props.position}</p>
        Application Date <input {...register("applicationdate")} />
        <br />
        Effective Date <input {...register("effectivedate")} />
        <br />
        Notice Period <input {...register("noticeperiod")} />
        <br />
        Within Notice Period? <input {...register("isWithinPeriod")} />
        <br />
        {/* Employee's payment in lieu <input {...register("employeepayment")} />
        <br /> */}
        Leave Compensation <input {...register("leavecompensation")} />
        <br />
        Employer's payment in lieu <input {...register("employerpayment")} />
        <br />
        Total Compensation to Employee <input {...register("total")} />
        <br />
        <input type="submit" />
      </form>
      <form onSubmit={handleSubmit(submitResignForm)}>
        <h2>Retirement</h2>
      </form>
    </>
  );
}
