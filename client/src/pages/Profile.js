/** @format */

import { logout } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserOrders } from "../redux/actions/orderActions";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const order = useSelector(state => state.orders);
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getUserOrders());
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].qty;
    }
    console.log(order);
    console.log(total);
  }, [dispatch]);
  const SubmitOrder = () => {
    Swal.fire({
      title: "Confirm ? ",
      icon: "warning",
      showCancelButton: true,
      buttonsStyling: true,
      confirmButtonColor: "#5e656b",
      cancelButtonColor: "#212529",
      confirmButtonText: "Confirm Order",
    }).then(result => {
      if (result.isConfirmed) {
        history.push("/");

        Swal.fire({
          position: "center",
          title: "Order Confirmed",
          icon: "success",
          buttonsStyling: true,
          confirmButtonColor: "#212529",
          cancelButtonColor: "#212529",
          timer: 3500,
        });
      }
    });
  };
  return auth.isLoading && auth.user ? (
    <h3>loading...</h3>
  ) : (
    <>
      {" "}
      <br />
      <br />
      <br />
      <h1 style={{ color: "white", fontsize: "20px" }}>
        Welcome, {auth.user?.firstname}
      </h1>
      <button
        style={{ color: "white", backgroundColor: "black" }}
        onClick={() => dispatch(logout())}
      >
        log Out
      </button>
      <br />
      <br />
      <br />
      <div style={{ color: "white" }}>Order : id </div>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={() => SubmitOrder()}
      >
        Submit Order
      </button>
    </>
  );
};

export default Profile;
