import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import InputAdornment from "@mui/material/InputAdornment";
export const Signup = () => {
  const navigate = useNavigate();


const [name,setName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();

const nameHandler = (event)=>{
  setName(event.target.value);
}
const emailHandler = (event)=>{
  setEmail(event.target.value);
}
const passwordHandler = (event)=>{
  setPassword(event.target.value);
}

  const RegisterHandler = async (event) => {
    event.preventDefault();
    const body = {
      Email: email,
      Password: password,
      Name: name,
      
    };
    console.log(body);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const resp = await fetch(
        "http://localhost:4003/Register",
        requestOptions
      );
      if(resp.status===401){
        alert("user already exists");
      }
      if (resp.status === 200) {
        alert("Successfully Registered");
        setEmail();
        setName();
        setPassword();
        
      }
    } catch (err) {
      console.log("Err ", err);
      
    }
  };




  return (
    <div
      style={{
        height: "600px",
        width: "1100px",
        marginLeft: "60px",
      }}
    >
      <div style={{ paddingRight: "740px", marginTop: "30px" }}>
        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>NOTOUR</h1>
        <p>Your Own Note Taking Website 🤩</p>
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div style={{ width: "50%" }}>
          <img
            src="SignUpImage.jpg"
            alt=""
            style={{ height: "480px", width: "630px", paddingLeft: "140px" }}
          />
        </div>
        <div style={{ width: "50%", paddingRight: "100px" }}>
          <div>
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>
              Sign Up to NOTOUR
            </p>
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "140px",
              paddingTop: "10px",
            }}
          >
            <p>Already a Member?</p>
            <a
              style={{
                marginLeft: "10px",
                color: "#678FCE",
                fontWeight: "bolder",
              }}
            >
              Log in{" "}
            </a>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p
              style={{
                fontWeight: "bolder",
                paddingRight: "167px",
                color: "#0073e6",
              }}
            >
              Name
            </p>
            <TextField
            value={name}
            onChange={nameHandler}
              style={{ width: "250px" }}
              id="input-with-icon-textfield"
              // label="Name"
              placeholder="Sahil Arora"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdDriveFileRenameOutline />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                fontWeight: "bolder",
                paddingRight: "167px",
                color: "#0073e6",
              }}
            >
              E-mail
            </p>
            <TextField
            value={email}
            onChange={emailHandler}
              style={{ width: "250px" }}
              id="input-with-icon-textfield"
              // label="Email"
              placeholder="Sahil10@gmail.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdAlternateEmail />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                fontWeight: "bolder",
                paddingRight: "144px",
                color: "#0073e6",
              }}
            >
              Password
            </p>
            <TextField
            value={password}
            onChange={passwordHandler}
              style={{ width: "250px" }}
              id="input-with-icon-textfield"
              // label="Password"
              placeholder="********"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RiLockPasswordLine />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button variant="contained" style={{ width: "250px" }} onClick = {(e)=>RegisterHandler(e)} >
              Create an Account
            </Button>
            <br></br>
            <br></br>
            <Button variant="outlined" style={{ width: "250px" }}>
              Sign Up with GOOGLE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
