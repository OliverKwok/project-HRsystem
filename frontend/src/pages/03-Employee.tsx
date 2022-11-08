import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormState = {
  firstName: string;
  lastName: string;
  chineseName: string;
  alias: string;
  mobileLocation: string;
  mobile: string;
  personalEmail: string;
  workEmail: string;
  birthday: string;
  hkid: string;
  gender: string;
};

export default function Employee() {
  const { register, handleSubmit, watch } = useForm<FormState>({
    defaultValues: {
      firstName: "",
      lastName: "",
      chineseName: "",
      alias: "",
      mobileLocation: "852",
      mobile: "",
      personalEmail: "",
      workEmail: "",
      birthday: "",
      hkid: "",
      gender: "",
    },
  });

  useEffect(() => {
    let sub = watch((data) => {
      console.log("update form data:", data);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  function submit(data: FormState) {
    console.log("submit form data:", data);
  }

  return (
    <div className="page-container">
      <h1>New Employee</h1>
      <Form onSubmit={handleSubmit(submit)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" {...register("firstName")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" {...register("lastName")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Chinese Name</Form.Label>
          <Form.Control type="text" {...register("chineseName")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alias</Form.Label>
          <Form.Control type="text" {...register("alias")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile Location</Form.Label>
          <Form.Control type="text" {...register("mobileLocation")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" {...register("mobile")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Personal Email</Form.Label>
          <Form.Control type="text" {...register("personalEmail")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Work Email</Form.Label>
          <Form.Control type="text" {...register("workEmail")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="text" {...register("birthday")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>HKID</Form.Label>
          <Form.Control type="text" {...register("hkid")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
        <select {...register("gender")}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
