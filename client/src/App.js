import './App.css';
import {BrowserRouter, Switch ,Route,Link } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import RegisterPage from './components/RegisterComponent'
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';


//components
import Navbar from "./components/Navbar";
import MenPage from './pages/MenPage';
import ShoppingCart from './pages/ShoppingCart';
import CartScreen from './pages/CartScreen';

function App() {
  return (
    <>
    <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid"/>
  <source src="video.mp4" />
  <source src="video.mp4"/>
    
    <BrowserRouter>
    <Navbar />
    
    <Switch>
    <Route exact path="/cart" component={CartScreen} />
    <Route exact path="/ShoppingCart" component={ShoppingCart} />
    <Route exact path="/men" component={MenPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact path="/profile" component={Profile}></PrivateRoute>    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
