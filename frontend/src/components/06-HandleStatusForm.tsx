import { Steps } from "primereact/steps";
import "../styles/06-HandleSteps.css";
import { useForm } from "react-hook-form";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./06-GeneratePDF";

export default function HandleStatusForm(props: any) {
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
        ReactPDF.render(
        <MyDocument />, `${__dirname}/example.pdf`);
      </form>
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
      {/* Retirement */}
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
