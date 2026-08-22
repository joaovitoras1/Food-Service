import ProductCard from './ProductCard/ProductCard.jsx'

function ProductList({ title, products, cartItems, onIncrement, onDecrement }) {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {products.map((product) => {
                    const itemInTheCart = cartItems.find(item => item.name === product.name);
                    const quantity = itemInTheCart ? itemInTheCart.quantity : 0;

                    return <li key={product.name}>
                        <ProductCard product={product} quantity={quantity} onDecrement={onDecrement} onIncrement={onIncrement} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProductList