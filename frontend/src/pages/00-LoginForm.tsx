import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store";
import { login, restoreLogin } from "../redux/auth/actions";
import "../styles/00-LoginForm.css";

export default function LoginForm() {
  const { handleSubmit, register } = useForm();
  const dispatch = useAppDispatch();
  // const [showLogin, setShowLogin] = useState(false);

  // useEffect(() => {}, [showLogin]);

  return (
    <div className="login-page-container">
      <div className="login-page-box">
        <div id="headerTitle">Easy HR Solutions</div>
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
            // console.log(json);
            if (json.statusCode == 500) {
              alert("No authorization to access the web panel");
            } else if (json.statusCode == 401) {
              alert("wrong user or password");
            } else {
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
              // console.log(profileJson);

              dispatch(login(profileJson, json.access_token));
              localStorage.setItem("token", json.access_token);
            }
            // if (json.access_token) {
            //   alert("get the token");
            // }
          })}
        >
          <div className="row">
            <label htmlFor="username">Work Email</label>
            <input
              placeholder="Enter the work email"
              {...register("username")}
            />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter the password"
              {...register("password")}
            />
          </div>
          <div className="row">
            <input id="login-button" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
