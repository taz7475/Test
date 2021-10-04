/** @format */

import React from "react";
import Accessories from "../components/Accessories";
import "./Accessories.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";

//Actions
import { getProducts } from "../redux/actions/productActions";

const AccessoriesPages = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(state => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <div>
       <Carousel className="carousel" fade>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://sslimages.shoppersstop.com/sys-master/root/h16/h41/17185271742494/Gifts-To-Mark-Life-Changing-Moments-Carousal-Baby-Shower-Web.jpg"
             alt="First slide" 
           />
           <Carousel.Caption>
             <h3>accessories</h3>
             {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://sslimages.shoppersstop.com/sys-master/root/he7/h47/17185271545886/Gifts-To-Mark-Life-Changing-Moments-Carousal-House-Warming-Web.jpg"
             alt="Second slide"
           />
       
           <Carousel.Caption>
             {/* <h3>accessories</h3> */}
             {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://sslimages.shoppersstop.com/sys-master/root/h16/h41/17185271742494/Gifts-To-Mark-Life-Changing-Moments-Carousal-Baby-Shower-Web.jpg"
             alt="Third slide"
           />
       
           <Carousel.Caption>
             {/* <h3>Kids's Collection</h3> */}
             {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : ( 
          products.map(men => (
            men.category==="accessories"&&
            <Accessories
              key={men._id}
              name={men.name}
              description={men.description}
              price={men.price}
              imageUrl={men.imageUrl}
              productId={men._id}
            /> 
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default AccessoriesPages;
