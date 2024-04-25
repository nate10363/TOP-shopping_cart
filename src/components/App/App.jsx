import './App.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [productsArr, setProductsArr] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://fakestoreapi.com/products/');
      const json = await resp.json();
      setProductsArr(json);
    };
    fetchData();
  }, [])


  return (
    <>
      <Navbar itemsInCart={itemsInCart} />
      <br />

      <Outlet
        context={{
          itemsInCart: [itemsInCart, setItemsInCart],
          productsArr: [productsArr],
        }}
      />
    </>
  )
  
}

export default App
