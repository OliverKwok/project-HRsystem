import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { handleSubmit, register } = useForm();

  return (
    <div>
      <div>Login</div>
      <form
        onSubmit={handleSubmit(async (data) => {
          const res = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/auth/login`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const json = await res.json()
          console.log(json) 
        })}
      >
        <input placeholder="username" {...register("username")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
