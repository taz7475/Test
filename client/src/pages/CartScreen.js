/** @format */

import CartItem from "../components/CartItem";
import "./cartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { addorder } from "../redux/actions/orderActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { user } = useSelector(state => state.auth);
  const { cartItems } = cart;
  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  const handleOrder = () => {
    dispatch(addorder(user._id, cart.cartItems));
  };

  console.log(cart);
  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty{" "}
              <Link className="back" to="/">
                Go Back
              </Link>
            </div>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button className="checkout" onClick={handleOrder}>
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
