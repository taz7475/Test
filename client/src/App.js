/** @format */

import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./components/RegisterComponent";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';


//components
import Navbar from "./components/Navbar";
import MenPage from "./pages/MenPage";
import ShoppingCart from "./pages/ShoppingCart";
import CartScreen from "./pages/CartScreen";
import HomePage from "./pages/HomePage";
import WomenPages from "./pages/WomenPages";
import ChildPages from "./pages/ChildPages";
import AccessoriesPages from "./pages/AccessoriesPages";

function App() {
  return (
    <>
   {/*    <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid" />
      <source src="video.mp4" />
      <source src="video.mp4" /> */}
       <Navbar className="navbar"></Navbar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/ShoppingCart/:id" component={ShoppingCart} />
          <Route exact path="/men" component={MenPage} />
          <Route exact path="/women" component={WomenPages} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route exact path="/child" component={ChildPages} />
          <Route exact path="/accessories" component={AccessoriesPages} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute
            exact
            path="/profile"
            component={Profile}
          ></PrivateRoute>{" "}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
