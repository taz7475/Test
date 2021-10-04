/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import './RegisterComponent.css'


export default function RegisterPage() {

  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    adress: "",
    country:"",
    code_zip: "",
  });



  const handleSubmit = e => {
    e.preventDefault();
    console.log("submited");
    dispatch(register(info));
  };


  useEffect(() => {
    if (auth.isAuth) {
      history.push("/");
    }
  }, [auth.isAuth, history]);
  return (
    <div >
    <p className="tip"></p>
    <div className="cont">
      <div className="form sign-in">
        <h2>Welcome</h2>
        <label>
          <span>Firstname</span>
          <input
            type="firstname"
            onChange={e => setInfo({ ...info, firstname: e.target.value })}
          />
        </label>
        <label>
          <span>Lastname</span>
          <input
            type="lastname"
            onChange={e => setInfo({ ...info, lastname: e.target.value })}
          />
        </label>
        <label>
          <span>Adress</span>
          <input
            type="adress"
            onChange={e => setInfo({ ...info, adress: e.target.value })}
          />
        </label>
        <label>
          <span>Country</span>
          <input
            type="country"
            onChange={e => setInfo({ ...info, country: e.target.value })}
          />
        </label>
        <label>
          <span>Code Zip</span>
          <input
            type="code-zip"
            onChange={e => setInfo({ ...info, code_zip: e.target.value })}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={e => setInfo({ ...info, email: e.target.value })}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={e => setInfo({ ...info, password: e.target.value })}
          />
        </label>
        
        <p class="forgot-pass">Forgot password?</p>
        <button type="button" onClick={handleSubmit} className="submit">
          Sign Up
        </button>
        
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img__text m--in">
            <h2>One of us?</h2>
            <p>
              If you already has an account, just sign in. We've missed you!
            </p>
          </div>
          
        </div>
        <div class="form sign-up">
          <h2>Time to feel like home,</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
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
}
