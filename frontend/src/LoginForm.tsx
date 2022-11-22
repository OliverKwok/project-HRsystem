import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "./store";
import { login, restoreLogin } from "./redux/auth/actions";

function LoginForm() {
  const { handleSubmit, register } = useForm();
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Login</div>
      <form
        onSubmit={handleSubmit(async (data) => {
          const res = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          const json = await res.json();
          console.log(json);
          if (json.statusCode == 401) {
            alert("wrong user or password");
          }
          if (json.access_token) {
            alert("get the token");
          }

          const profileRes = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/profile`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${json.access_token}`,
              },
            }
          );
          const profileJson = await profileRes.json();
          console.log(profileJson);
          if (profileJson.username) {
            alert(`welcome back, hello ${profileJson.username}`);
          }
          dispatch(login(profileJson, json.access_token));
          localStorage.setItem("token", json.access_token);
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
