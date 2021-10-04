/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import "./loginPage.css";

const LoginPage = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();


  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(info)
    dispatch(login(info));
  };
  
  useEffect(() => {
    if (auth.isAuth)
     history.push("/profile");
  }, [auth.isAuth, history]);
  return (
    <div >
      <p class="tip"></p>
      <div class="cont">
        <div class="form sign-in">
          <h2>Welcome </h2>

          <label>
            <span>Email</span>
            <input
              type="email"
              onChange={e => setInfo({...info, email: e.target.value })}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              onChange={e => setInfo({...info, password: e.target.value })}
            />
          </label>
          <button type="button" onClick={handleSubmit} class="submit">
            Sign In
          </button>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            {/* <div class="img__btn">
              <span class="m--in">Sign In</span>
            </div> */}
          </div>
          <div class="form sign-up">
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <button type="button" class="submit">
              Sign Up
            </button>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
