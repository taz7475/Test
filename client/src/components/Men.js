/** @format */

import "./men.css";
import { Link } from "react-router-dom";

const Men = () => {
  return (
    <div className="product">
      <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/118A0/production/_118604817__116721094_mustang.jpg"
          alt="fdfdf"
        />
      <div className="product__info">
        <p className="info__name">efefef</p>
        
        <p className="info__description">fefefefefef...</p>

        <p className="info__price">$33</p>

        <Link to={`/ShoppingCart`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Men;
