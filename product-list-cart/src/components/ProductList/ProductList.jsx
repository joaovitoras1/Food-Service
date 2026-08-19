import ProductCard from './ProductCard/ProductCard.jsx'

function ProductList({ title, products }) {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.name}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList