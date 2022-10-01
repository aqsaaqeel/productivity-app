import React from "react";
// import {CgProfile} from 'react-icons/cg'
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const checkLogin = async (event) => {
    event.preventDefault();
    console.log("here");
    const body = {
      Email: email,
      Password: password,
    };
    console.log(body);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const resp = await fetch("http://localhost:4003/Login", requestOptions);
      resp.json().then((data) => {
        console.log(resp.status);
        console.log(resp);
        if (resp.status === 401) {
          alert("Please Provide Email and Password");
        } else if (resp.status === 402) {
          alert("No user exist with this email");
        } else if (resp.status === 403) {
          alert("Password Incorrect");
        } else if (resp.status === 200) {
          // alert("Login Successfull");
          setEmail();
          setPassword();
          const letter = email.slice(0, 1);
          localStorage.setItem("isLogin", 1);
          localStorage.setItem("Letter", letter);
          // localStorage.setItem("id", data.user._id);
          navigate("/",{});

          setTimeout(()=>{
            window.location.reload();
          },500);
        }
      });
    } catch (err) {
      console.log("Err ", err);
    }
  };

  return (
    <div
      style={{
        height: "500px",
        width: "350px",
        marginLeft: "450px",
        paddingTop: "1px",
        marginTop: "20px",
        borderRadius: "5px",
        borderColor: "lightgrey",
        borderWidth: "1.8px",
        boxShadow: "1.4px 1.4px #f0f0f5",
        marginBottom: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img
          src="SignInImg.png"
          alt="SignInLogo"
          style={{ height: "100px", width: "230px", paddingLeft: "120px" }}
        />
      </div>
      <div>
        <p style={{ fontSize: "25px", paddingLeft: "1px" }}>Sign in</p>
        <p style={{ paddingTop: "15px", fontSize: "20px" }}>
          * Use Your valid Email
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TextField
        value={email}
          onChange={ emailHandler}
          id="standard-basic"
          label="Email"
          variant="standard"
          style={{ width: "250px" }}
        />
      </div>
      <div style={{ marginTop: "35px" }}>
        <TextField
        value={password}
          onChange={ passwordHandler}
          id="standard-basic"
          label="Password"
          variant="standard"
          style={{ width: "250px" }}
        />
      </div>
      <div
        style={{
          justifyContent: "left",
          paddingRight: "126px",
          paddingTop: "5px",
          color: "DodgerBlue",
          fontWeight: "bold",
        }}
      >
        Forgot Password
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/signup">
          {" "}
          <a style={{ color: "#1a75ff" }}>Create Account</a>
        </Link>
        <Button variant="contained" style={{ backgroundColor: "DodgerBlue" }}  onClick={(e) => checkLogin(e)} >
          Login
        </Button>
      </div>
    </div>
  );
};
