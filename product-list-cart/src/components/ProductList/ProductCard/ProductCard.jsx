import ProductButton from './ProductButton/ProductButton.jsx'

function ProductCard({ product }) {
    return (
        <div>
            <div>
                <img src={product.image.mobile} alt="" className="w-60" />
                <ProductButton />
            </div>
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductCard