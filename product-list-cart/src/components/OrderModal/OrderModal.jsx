import ConfirmedIcon from '../../assets/icons/icon-order-confirmed.svg'
import CartItem from '../CartItem/CartItem';

function OrderModal({ cartItems, onNewOrder }) {
    const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="flex items-end justify-center fixed inset-0 bg-black/50">
            <div className="bg-white rounded-t-2xl fixed left-0 right-0">
                <div className="px-5 py-8 flex flex-col gap-5">
                    <div>
                        <img src={ConfirmedIcon} />
                        <h2 className="py-3 text-4xl font-bold text-rose-900">Order <br />Confirmed</h2>
                        <p className="pb-3 text-rose-500">We hope you enjoy your food!</p>
                    </div>
                    <div className="bg-rose-50 rounded-lg">
                        <ul className="p-6">
                            {cartItems.map(item => {
                                return <CartItem key={item.name} item={item} showImage={true} showRemoveButton={false} />
                            })}
                        </ul>
                        <div className="px-4 pb-4 flex items-center justify-between">
                            <p className="pl-2 text-sm text-rose-900">Order Total</p>
                            <p className="pr-2 text-2xl font-bold text-rose-900">${totalCartPrice.toFixed(2)}</p>
                        </div>
                    </div>
                    <button onClick={() => onNewOrder()} className="p-3 rounded-3xl bg-red text-rose-50">Start New Order</button>
                </div>
            </div>
        </div>
    )
}

export default OrderModal