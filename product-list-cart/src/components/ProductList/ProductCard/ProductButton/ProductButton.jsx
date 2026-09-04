import cartIcon from '../../../../assets/icons/icon-add-to-cart.svg'
import decrementIcon from '../../../../assets/icons/icon-decrement-quantity.svg'
import incrementIcon from '../../../../assets/icons/icon-increment-quantity.svg'

function ProductButton({ product, quantity, onIncrement, onDecrement }) {
    return (
        <div className="flex justify-center -mt-5 mb-2 text-rose-50">
            {quantity === 0 ? 
                <button onClick={() => {onIncrement(product)}} className="w-45 flex justify-center gap-2 p-2.5 border rounded-[50px] font-semibold bg-white text-rose-900 border-rose-500" ><img src={cartIcon} alt="Add to Cart" />Add to Cart</button>
                 : <div className="w-45 flex justify-between gap-2 rounded-[50px] p-2.5 bg-red">
                    <button onClick={() => onDecrement(product)} className="px-1 text-rose-50"><img src={decrementIcon} className="py-2 px-1 border rounded-[50%]" /></button>
                    {quantity}<button onClick={() => onIncrement(product)} className="px-1 text-rose-50" ><img src={incrementIcon} className="p-1 border rounded-[50%]" /></button></div>}
        </div>
    )
}

export default ProductButton