import ConfirmedIcon from '../../assets/icons/icon-order-confirmed.svg'
import CartItem from '../CartItem/CartItem';

function OrderModal({ cartItems, onNewOrder }) {
    const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <div><img src={ConfirmedIcon} /></div>
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div>
                <ul>
                    {cartItems.map(item => {
                        return <CartItem key={item.name} item={item} showImage={true} showRemoveButton={false} />
                    })}
                </ul>
                <div>
                    <p>Order Total</p>
                    <p>$ {totalCartPrice.toFixed(2)}</p>
                </div>
            </div>
            <button onClick={() => onNewOrder()}>Start New Order</button>
        </div>
    )
}

export default OrderModal