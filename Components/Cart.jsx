import React from "react";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("your objects here", cartAllProduct);

 
  const handleDecrement = (id) => {
    setCartAllProduct((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 1
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };


  const handleIncrement = (id) => {
    setCartAllProduct((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };


  const handleDelete = (id) => {
    setCartAllProduct((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <div className="container-flex">
        {cartAllProduct.map((newList) => {
          return (
            <div className="container-fluid" key={newList.id}>
      
             <img src={newList.image} alt="" />
           

              <p className="name">{newList.name}</p>
              <p className="price">${newList.price}</p>
              <div className="p-flex">
                <p onClick={() => handleDecrement(newList.id)}>-</p>
                <p>{newList.count}</p>
                <p onClick={() => handleIncrement(newList.id)}>+</p>
                <button
                  className="del"
                  onClick={() => handleDelete(newList.id)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
