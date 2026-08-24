import emptyCartIcon from '../../assets/icons/illustration-empty-cart.svg'
import removeItemIcon from '../../assets/icons/icon-remove-item.svg'
import carbonIcon from '../../assets/icons/icon-carbon-neutral.svg'

function OrderCart({ cartItems, onRemove }) {
    const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    return (
        <div>
            <h2>Your Cart ({totalCartItems})</h2>
            {cartItems.length === 0 ? <div><img src={emptyCartIcon} /></div> : 
            <div>
                <ul>
                    {cartItems.map(item => {
                        const subtotal = item.price * item.quantity

                        return <li key={item.name}>
                            <h3>{item.name}</h3>
                            <div>
                                <p>{item.quantity}</p>
                                <p>$ {item.price.toFixed(2)}</p>
                                <p>$ {subtotal.toFixed(2)}</p>
                            </div>
                            <div>
                                <button onClick={() => onRemove(item)}><img src={removeItemIcon} /></button>
                            </div>
                        </li>
                    })}
                </ul>
                <div>
                    <p>Order total</p>
                    <p>$ {totalCartPrice.toFixed(2)}</p>
                </div>
                <div>
                    <img src={carbonIcon} />
                    <p>This is a <span>carbon-neutral</span>delivery</p>
                </div>
                <button>Confirm Order</button>
            </div>}
        </div>
    )
}

export default OrderCart