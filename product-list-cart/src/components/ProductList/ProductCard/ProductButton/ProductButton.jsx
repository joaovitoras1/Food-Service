import cartIcon from '../../../../assets/icons/icon-add-to-cart.svg'
import decrementIcon from '../../../../assets/icons/icon-decrement-quantity.svg'
import incrementIcon from '../../../../assets/icons/icon-increment-quantity.svg'

function ProductButton({ product, quantity, onIncrement, onDecrement }) {
    return (
        <div>
            {quantity === 0 ? 
                <button onClick={() => { console.log("cliquei!"); onIncrement(product) }} className="w-40" ><img src={cartIcon} alt="Add to Cart" />Add to Cart</button>
                 : <div>
                    <button onClick={() => onDecrement(product)} className="w-40" ><img src={decrementIcon} /></button>
                    {quantity}<button onClick={() => onIncrement(product)} className="w-40" ><img src={incrementIcon} /></button></div>}
        </div>
    )
}

export default ProductButton