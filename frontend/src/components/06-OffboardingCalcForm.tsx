import { useState } from "react";
// import { Steps } from "primereact/steps";
// import "../styles/06-HandleSteps.css";
import "../styles/06-PopupCalcComp.css";
// import { useForm } from "react-hook-form";
// import GenRefLetter from "./06-genRefLetter";

export default function OffboardingCalcForm(props: any) {
  const [popup, setPopup] = useState(false);
  //popup open and close
  const openPopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
  };

  // const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // function submitResignForm(data: any) {
  //   console.log(data);
  // }

  return (
    <div className="btn_div">
      <button className="calcCompButton" onClick={openPopup}>
        Calculate Compensation
      </button>
      {popup && (
        <div className="popupBody">
          <div className="popupHeader">
            <h2>Calculate Compensation</h2>
            <h2 onClick={closePopup} className="closeBtn">
              X
            </h2>
          </div>
          {/* <p>Applied Date: 2022-12-06</p>
          <p>Effective Date: 2023-01-05 </p>
          <p>Within Notice Period? Yes</p>
          <p>Basic Salary: HKD 16,000.00</p>
          <p>Annual Leave in lieu: 5 days</p>
          <p>Compensation from Employee: HKD 0.00</p>
          <p>Compensation from Employer: HKD 21,000.00</p>
          <p>Total Compensation: -HKD 21,000.00</p> */}

          <table>
            <tr>
              <td>Applied Date:</td>
              <td>2022-12-06</td>
            </tr>
            <tr>
              <td>Effective Date:</td>
              <td>2023-01-05</td>
            </tr>
            <tr>
              <td>Within Notice Period?</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Basic Salary: </td>
              <td>HKD 16,000.00</td>
            </tr>
            <tr>
              <td>Annual Leave in lieu: </td>
              <td>5 days</td>
            </tr>
            <tr>
              <td>Compensation from Employee: </td>
              <td>HKD 0.00</td>
            </tr>
            <tr>
              <td>Compensation from Employer:</td>
              <td>HKD 21,000.00</td>
            </tr>
            <tr>
              <td>Total Compensation:</td>
              <td>-HKD 21,000.00</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}

//   return (
//     <>
//       <Steps model={steps} />
//       {/* Resignation  */}
//       <form onSubmit={handleSubmit(submitResignForm)}>
//         <h2>Resignation</h2>
//         <p>Employee{props.person}</p>
//         <p>Position{props.position}</p>
//         Application Date <input {...register("applicationdate")} />
//         <br />
//         Effective Date <input {...register("effectivedate")} />
//         <br />
//         Notice Period <input {...register("noticeperiod")} />
//         <br />
//         Within Notice Period? <input {...register("isWithinPeriod")} />
//         <br />
//         Employee's payment in lieu <input {...register("employeepayment")} />
//         <br />
//         Leave Compensation <input {...register("leavecompensation")} />
//         <br />
//         Employer's payment in lieu <input {...register("employerpayment")} />
//         <br />
//         Total Compensation by Employee
//         <input {...register("totaltoEmployer")} />
//         <br />
//         Total Compensation by Employer
//         <input {...register("totaltoEmployee")} />
//         <br />
//         <input type="submit" />
//       </form>
//       <GenRefLetter />
//       {/* Termination */}
//       <form onSubmit={handleSubmit(submitResignForm)}>
//         <h2>Termination</h2>
//         <p>Employee{props.person}</p>
//         <p>Position{props.position}</p>
//         Application Date <input {...register("applicationdate")} />
//         <br />
//         Effective Date <input {...register("effectivedate")} />
//         <br />
//         Notice Period <input {...register("noticeperiod")} />
//         <br />
//         Within Notice Period? <input {...register("isWithinPeriod")} />
//         <br />
//         {/* Employee's payment in lieu <input {...register("employeepayment")} />
//         <br /> */}
//         Leave Compensation <input {...register("leavecompensation")} />
//         <br />
//         Employer's payment in lieu <input {...register("employerpayment")} />
//         <br />
//         Total Compensation to Employee <input {...register("total")} />
//         <br />
//         <input type="submit" />
//       </form>
//       <form onSubmit={handleSubmit(submitResignForm)}>
//         <h2>Retirement</h2>
//       </form>
//     </>
//   );
// }
