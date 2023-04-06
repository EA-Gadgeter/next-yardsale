import React, { useRef } from "react";

import "@styles/Login.scss";

import logo from "@logos/logo_yard_sale.svg"

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
  };

  return (
    <div className="Login">
        <div className="login-container">
            <img src={logo} alt="logo" className="logo" />

            <form className="form" ref={form}>
                <label className="label">Email Address</label>
                <input type="email" name="email" placeholder="example@gmail.com" className="input input-email" />
                <label className="label">Password</label>
                <input type="password" name="password" placeholder="*********" className="input" />
                <button 
                  className="login-button" 
                  onClick={handleSubmit}
                >
                  Log in
                </button>
                <a href="#">Forgot my password</a>
            </form>

            <button className="primary-button">Sign up</button>
        </div>
    </div>
  );
};

export default Login;