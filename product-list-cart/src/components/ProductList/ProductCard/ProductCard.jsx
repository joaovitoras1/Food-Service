import ProductButton from './ProductButton/ProductButton.jsx'

function ProductCard({ product, quantity, onIncrement, onDecrement }) {
    return (
        <div className="pb-4">
            <div>
                <img src={product.image.mobile} alt="" className="w-90 rounded-[10px] lg:w-80" />
                <ProductButton product={product} quantity={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
            </div>
            <p className="text-base text-rose-400">{product.category}</p>
            <h2 className="text-base text-rose-900 font-semibold">{product.name}</h2>
            <p className="text-base text-red font-semibold">${product.price.toFixed(2)}</p>
        </div>
    )
}

export default ProductCard