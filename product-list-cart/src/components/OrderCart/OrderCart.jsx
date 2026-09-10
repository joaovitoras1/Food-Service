import emptyCartIcon from '../../assets/icons/illustration-empty-cart.svg'
import carbonIcon from '../../assets/icons/icon-carbon-neutral.svg'

import CartItem from '../CartItem/CartItem.jsx'

function OrderCart({ cartItems, onRemove, onConfirmOrder }) {
    const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    return (
        <div className="bg-white py-5 px-6 rounded-xl ">
            <h2 className="font-bold text-[25px] pb-2 text-red">Your Cart ({totalCartItems})</h2>
            {cartItems.length === 0 ? <div className="flex flex-col items-center gap-2 p-5 "><img src={emptyCartIcon} /><p className="pt-2 font-semibold text-sm text-rose-500">Your added items will appear here</p></div> : 
            <div>
                <ul>
                    {cartItems.map(item => <CartItem key={item.name} item={item} onRemove={onRemove} showImage={false} showRemoveButton={true} />)}
                </ul>
                <div className="flex items-center justify-between pt-3 pb-4">
                    <p className="text-sm text-rose-900">Order total</p>
                    <p className="text-2xl font-bold text-rose-900">${totalCartPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-center gap-2 p-3 rounded-lg bg-rose-50">
                    <img src={carbonIcon} />
                    <p className="text-base">This is a <span className="font-semibold">carbon-neutral </span>delivery</p>
                </div>
                <div className="flex flex-col justify-center pt-4">
                    <button onClick={() => onConfirmOrder()} className="p-3 rounded-3xl bg-red hover:bg-orange-900 text-rose-50 cursor-grab">Confirm Order</button>
                </div>
            </div>}
        </div>
    )
}

export default OrderCart