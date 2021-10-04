/** @format */

import React from "react";
import Child from "../components/Child";
import "./childPages.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";

//Actions
import { getProducts } from "../redux/actions/productActions";

const ChildPages = () => {
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
             src="https://sslimages.shoppersstop.com/sys-master/root/h8c/ha5/17213016145950/Kids-Page-Main-Carousals-Watches-Web.jpg"
             alt="First slide" 
           />
           <Carousel.Caption>
             <h3>child's Collection</h3>
             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur..</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://sslimages.shoppersstop.com/sys-master/root/had/h11/17126075138078/WIKI-01--_RW_BANNER_WEB----NEW-UI.jpg"
             alt="Second slide"
           />
       
           <Carousel.Caption>
             {/* <h3>child's Collection</h3> */}
             {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://sslimages.shoppersstop.com/sys-master/root/h28/h2b/17213022339102/Kids-Page-Main-Essentials-Boys-Innerwear-Web.jpg"
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
            men.category==="Kids"&&
            <Child
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

export default ChildPages;
