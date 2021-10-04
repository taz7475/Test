/** @format */

import "./child.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Child = ({ imageUrl, name, description, price, productId }) => {
  const auth = useSelector(state => state.auth)
  const history = useHistory();
  
  const Alert =() => {
    Swal.fire({
      title: "Not Logged in ? ",
      icon: "warning",
      showCancelButton: true,
      buttonsStyling: true,
      confirmButtonColor: "#5e656b",
      cancelButtonColor: "#212529",
      confirmButtonText: "Log in here !",
    }).then((result) => {
      if (result.isConfirmed) {
  
        
        history.push("/login");
  
        Swal.fire({
          
          position: "center",
          title: "Redirecting to login..",
          icon: "success",
          buttonsStyling: true,
          confirmButtonColor: "#212529",
          cancelButtonColor: "#212529",
          timer: 3500,
        })
      }})
    }
  return (
    <div className="product">
      <img style={{height:"500px", width:"350px" , padding:"20px" }} src={imageUrl} alt="fdfdf" />
      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description}</p>

        <p className="info__price">{price} $</p>

        { auth.isAuth==true ?  <Link
          to={{
            pathname: `/ShoppingCart/${productId}`,
            state: { imageUrl, name, description, price, productId },
          }}
          className="info__button"
        >
          View
        </Link>   : <button
          onClick={Alert}
          className="info__button"
        >
          View
        </button>    }
      </div>
    </div>
  );
};

export default Child;
