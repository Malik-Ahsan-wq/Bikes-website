import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import "./App.css"
import{Route,Routes} from "react-router-dom"
import Cart from './Components/Cart'
import Header from './Components/Header'
import productList from './Components/data'
import SinglePage from './Components/SinglePage'
const App = () => {

const [productId,setProductId] = useState("");
const [cartAllProduct,setCartAllProduct] = useState([]);

useEffect(() => {
  const filterObject = productList.filter((items) => items.id == productId);
setCartAllProduct([...cartAllProduct, ...filterObject]);
}, [productId]);


 

  return (
    <div>
      <>
        <Header  cartAllProduct={cartAllProduct}/>
        <Routes>
          <Route path="/" element={<Home setProductId={setProductId} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartAllProduct={cartAllProduct}
                setCartAllProduct={setCartAllProduct}
              />
            }
          />
          <Route path={`/SinglePage/:id`} element={<SinglePage/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App

