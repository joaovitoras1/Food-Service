import './App.css'
import { useState } from 'react'

import ProductList from './components/ProductList/ProductList.jsx'
import productsData from './data/data.json'
import OrderCart from './components/OrderCart/OrderCart.jsx';
import OrderModal from './components/OrderModal/OrderModal.jsx'

function App() {
  const products = productsData;
  const [cartItems, setCartItems] = useState([]);
  const [confirmOrder, setConfirmOrder] = useState(false);

  function handleIncrement(product) {
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

  function handleConfirmOrder() {
    setConfirmOrder(true)
  }

  function handleNewOrder() {
    setCartItems([]);
    setConfirmOrder(false);
  }

  return (
    <div>
      <ProductList title="Desserts" products={products} cartItems={cartItems} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <OrderCart cartItems={cartItems} onRemove={handleRemove} onConfirmOrder={handleConfirmOrder} />
      {confirmOrder && <OrderModal cartItems={cartItems} onNewOrder={handleNewOrder} />}
    </div>
  )
}

export default App