import React from 'react'
import './ShoppingCart.css'

const ShoppingCart = () => {
  return (
 
    <div className="productscreen">
        

        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/118A0/production/_118604817__116721094_mustang.jpg" alt="" />
            </div>
            <div className="left__info">
              <p className="left__name">Product 1 </p>
              <p>Price: $499</p>
              <p>Description: lorem150 </p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>$499.99</span>
              </p>
              <p>
                Status:
                <span>
                  In stock
                </span>
              </p>
              <p>
                Qty
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>

                </select>
                
              </p>
              <p>
              <button className="click"  type="button"> Add To Cart</button>
              </p>
            </div>
          </div>
        </>
      
    </div>
    
  )
}

export default ShoppingCart
