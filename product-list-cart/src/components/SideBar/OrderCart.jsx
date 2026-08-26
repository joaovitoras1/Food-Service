import emptyCartIcon from '../../assets/icons/illustration-empty-cart.svg'
import carbonIcon from '../../assets/icons/icon-carbon-neutral.svg'

import CartItem from '../CartItem/CartItem.jsx'

function OrderCart({ cartItems, onRemove, onConfirmOrder }) {
    const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    return (
        <div>
            <h2>Your Cart ({totalCartItems})</h2>
            {cartItems.length === 0 ? <div><img src={emptyCartIcon} /></div> : 
            <div>
                <ul>
                    {cartItems.map(item => <CartItem key={item.name} item={item} onRemove={onRemove} showImage={false} showRemoveButton={true} />)}
                </ul>
                <div>
                    <p>Order total</p>
                    <p>$ {totalCartPrice.toFixed(2)}</p>
                </div>
                <div>
                    <img src={carbonIcon} />
                    <p>This is a <span>carbon-neutral</span>delivery</p>
                </div>
                <button onClick={() => onConfirmOrder()}>Confirm Order</button>
            </div>}
        </div>
    )
}

export default OrderCart