import './CartItem.css'
import {Link} from 'react-router-dom'

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/118A0/production/_118604817__116721094_mustang.jpg" alt=""/>
      </div>
      <Link to={`/product/${111}`} className="cartitem__name">
          <p> Product 1</p>
           </Link>
           <p className="cartitem__price"> $499.99</p>
           <select className="cartItem__select">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option> 
           </select>
           <button className="delete">
               <i className="fas fa-trash"></i>
           </button>
    </div>
  )
}

export default CartItem
