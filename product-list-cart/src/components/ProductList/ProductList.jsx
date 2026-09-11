import ProductCard from './ProductCard/ProductCard.jsx'

function ProductList({ title, products, cartItems, onIncrement, onDecrement }) {
    return (
        <div className="px-5">
            <h1 className="text-[40px] font-bold pb-2.5 text-rose-900">{title}</h1>
            <ul className="md:grid md:gap-2 lg:grid-cols-4 xl:grid-cols-3">
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