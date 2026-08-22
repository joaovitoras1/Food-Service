import ProductButton from './ProductButton/ProductButton.jsx'

function ProductCard({ product, quantity, onIncrement, onDecrement }) {
    return (
        <div>
            <div>
                <img src={product.image.mobile} alt="" className="w-60" />
                <ProductButton product={product} quantity={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
            </div>
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductCard