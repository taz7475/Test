/** @format */

import "./Navbar.css";
import { Link } from "react-router-dom";
import authReducer from "../redux/reducers/authReducer";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector(state=> state.auth)
  return (
    <div style={{ width: "100%" , height: "100%"}}>
      <input type="checkbox" id="burger-toggle" />
      <label for="burger-toggle" class="burger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
      <div class="menu">
        <div class="menu-inner">
          <ul class="menu-nav">
            <li class="menu-nav-item">
              <a className="menu-nav-link" href="/">
                <span>
                  <div>Home</div>
                </span>
              </a>
            </li>
            { auth.isAuth ? <div>
              <li class="menu-nav-item">
             
             <a className="menu-nav-link" href="/profile">
               <span>
                 <div>Profile</div>
               </span>
             </a>
           </li>
           
            </div> : <>
            <li class="menu-nav-item">
             <a className="menu-nav-link" href="/login">
               <span>
                 <div>Login</div>
               </span>
             </a>
           </li>
            <li class="menu-nav-item">
             
             <a className="menu-nav-link" href="/register">
               <span>
                 <div>register</div>
               </span>
             </a>
           </li></>}
           
            <li class="menu-nav-item">
              <a className="menu-nav-link" href="/cart">
                <span>
                  <div>Cart</div>
                </span>
              </a>
            </li>
          </ul>
          <div class="gallery">
            <div class="title">
              <p>Welcome</p>
            </div>
            <div class="images">
              <a class="image-link" href="/men">
                <div class="image" data-label="Men">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5oiEsauystzQatK3D65SRsPT4BdKSOaZIg&usqp=CAU"
                    alt=""
                  />
                </div>
              </a>
              <a class="image-link" href="/women">
                <div class="image" data-label="Women">
                  <img
                    src="https://cdn.shopify.com/s/files/1/2059/2623/products/ICHOIX-women-clothes-2018-fashion-autumn-winter-dress-sexy-party-dress-elegant-tube-long-sleeve-ladies_74172ea0-d43f-48a2-86c7-836d6119cfb4_400x.jpg?v=1539375263"
                    alt=""
                  />
                </div>
              </a>
              <a class="image-link" href="/child">
                <div class="image" data-label="Children">
                  <img
                    src="https://i.pinimg.com/originals/dd/b2/32/ddb23274f06df70008a3122efdc47e31.jpg"
                    alt=""
                  />
                </div>
              </a>
              <a class="image-link" href="/accessories">
                <div class="image" data-label="accessories">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOHcgY47WquvWQakycweW8AJ12Uq8Zzr5Iw&usqp=CAU"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
