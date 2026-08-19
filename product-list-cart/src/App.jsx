import './App.css'

import ProductList from './components/ProductList/ProductList.jsx'
import productsData from './data/data.json'

function App() {
  const products = productsData;

  return (
    <div>
      <ProductList title="Desserts" products={products} />
    </div>
  )
}

export default App