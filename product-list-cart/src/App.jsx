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
    <div className="max-w-full min-h-screen border-box grid justify-center p-5 font-red-hat-text bg-rose-50 md:flex md:flex-col xl:flex xl:flex-row xl:py-10">
      <ProductList title="Desserts" products={products} cartItems={cartItems} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <OrderCart cartItems={cartItems} onRemove={handleRemove} onConfirmOrder={handleConfirmOrder} />
      <div className="pt-5">
        {confirmOrder && <OrderModal cartItems={cartItems} onNewOrder={handleNewOrder} />}
      </div>
    </div>
  )
}

export default App