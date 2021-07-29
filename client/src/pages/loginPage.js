import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authActions'
import './loginPage.css'


const LoginPage = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(info))
    }
    const history = useHistory()
    useEffect(() => {
        if (auth.isAuth)
            history.push('/Profile')
    }, [auth.isAuth,history])
    return (
       <div >
           <p class="tip"></p>
<div class="cont">
  <div class="form sign-in">
    <h2>Welcome back</h2>
    <label>
      <span>Email</span>
      <input type="email"  onChange={(e) => setInfo({ ...info, email: e.target.value })} />
    </label>
    <label>
      <span>Password</span>
      <input type="password"  onChange={(e) => setInfo({ ...info, password: e.target.value })} />
    </label>
    <p class="forgot-pass">Forgot password?</p>
    <button type="button" onSubmit={handleSubmit} class="submit">Sign In</button>
    <button type="button" class="fb-btn">Connect with <span>facebook</span></button>
  </div>
  <div class="sub-cont">
    <div class="img">
      <div class="img__text m--up">
        <h2>New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div class="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
      <div class="img__btn">
        <span class="m--up"><Link to="/register">Sign Up</Link></span>
        <span class="m--in">Sign In</span> 
        
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
      <button type="button" class="submit">Sign Up</button>
      <button type="button" class="fb-btn">Join with <span>facebook</span></button>
    </div>
  </div>
</div>

<a href="https://dribbble.com/shots/3306190-Login-Registration-form" class="icon-link">
  <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" alt=""/>
</a>
<a href="https://twitter.com/NikolayTalanov" class="icon-link icon-link--twitter">
  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt=""/>
</a>
       </div>
        
    
    )
}

export default LoginPage