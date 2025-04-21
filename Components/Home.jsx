import React from 'react'
import productList from './data';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
const Home = ({setProductId}) => {

  const handleAddToCart = (id)=>{
   setProductId(id);
    toast.success("Product Added Successfully !");

  }
  return (
    <div className="container-flex">
      <Toaster />
      {productList.map((items, id) => {
        return (
          <div className="container-fluid" key={items.id}>
            <Link to={`/SinglePage/:id ${items.id}`}>
              {" "}
              <img src={items.image} alt="" />
            </Link>
            <p className="name">{items.name}</p>
            <p className="price">${items.price}</p>
            <button
              className="cart-btn"
              onClick={() => handleAddToCart(items.id)}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home
