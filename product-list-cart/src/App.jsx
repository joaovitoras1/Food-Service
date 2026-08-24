import './App.css'
import { useState } from 'react'

import ProductList from './components/ProductList/ProductList.jsx'
import productsData from './data/data.json'
import OrderCart from './components/SideBar/OrderCart.jsx';

function App() {
  const products = productsData;
  const [cartItems, setCartItems] = useState([]);

  function handleIncrement(product) {
    console.log(product)
    const exist = cartItems.find(item => item.name === product.name);

    if (exist) {
      setCartItems(cartItems.map(item => {
        if (product.name === item.name) {
          return {...item, quantity: item.quantity + 1}
        } else {
          return item
        }
      }))
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  function handleDecrement(product) {
    const item = cartItems.find(item => item.name === product.name)

    if (item.quantity > 1) {
      setCartItems(cartItems.map(item => {
        if (product.name === item.name) {
          return {...item, quantity: item.quantity - 1}
        } else { return item }
      }))
    } else {
      setCartItems(cartItems.filter(item => item.name !== product.name))
    }

  }
    function handleRemove(product) {
      setCartItems(cartItems.filter(item => item.name !== product.name))
  }

  return (
    <div>
      <ProductList title="Desserts" products={products} cartItems={cartItems} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <OrderCart cartItems={cartItems} onRemove={handleRemove} />
    </div>
  )
}

export default App