import React, { useState } from 'react'
import "./CSS/LoginSignup.css"
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login function executed", formData);
    let responseData;

    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((data) => responseData = data);


    // it means username and password is correct and token is generated
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      navigate("/");
    }
    else {
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Signup function executed", formData);
    let responseData;

    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((data) => responseData = data);


    // it means username and password is correct and token is generated
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      setState("Login")
      navigate("/login");


    }
    else {
      alert(responseData.errors)
    }
  }


  return (
    <div className="loginSignupMain">
      <div className="container pt-5 pb-3 loginMain">
        <div className="row mt-5 mb-5">
          <div className='signupform mt-3 mb-5'>
            <h2>{state}</h2>
            {state === "Sign Up" ? <input type='text' placeholder='Your Name' className='signupInput' name='name' value={formData.name} onChange={changeHandler} ></input> : <></>}
            <input type='text' placeholder='Email Address' className='signupInput' name='email' onChange={changeHandler} value={formData.email}></input>
            <input type='text' placeholder='Password' className='signupInput' name='password' onChange={changeHandler} value={formData.password}></input>
            <button onClick={() => { state === "Login" ? login() : signup() }}
              className='signupInput signupbtn'>Continue</button>

            {state === "Sign Up" ? <p className='mt-1'>Already have an account?<span className='loginHere' onClick={() => { setState("Login") }}> Login here</span></p> : <p className='mt-1'>Create an account?<span className='loginHere' onClick={() => { setState("Sign Up") }}> Click here</span></p>}


            <input type='checkbox'></input> By Continuing i agree to the terms of use & privacy policy.
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginSignup