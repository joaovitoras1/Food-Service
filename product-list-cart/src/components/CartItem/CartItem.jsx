import removeItemIcon from '../../assets/icons/icon-remove-item.svg'

function CartItem({ item, showImage, showRemoveButton, onRemove }) {

    const subtotal = item.price * item.quantity

    return (
        <li>
            {showImage && <div><img src={item.image.thumbnail} /></div>}
            <h3 className="font-semibold text-sm pb-1.5 text-rose-900">{item.name}</h3>
            <div className="flex justify-between pb-2">
                <div className="flex gap-2 items-center">
                    <p className="pr-2 text-sm font-semibold text-red">{item.quantity}x</p>
                    <p className="text-sm text-rose-500">@ ${item.price.toFixed(2)}</p>
                    <p className="text-sm font-semibold text-rose-500">${subtotal.toFixed(2)}</p>
                </div>
                {showRemoveButton && <div><button onClick={() => onRemove(item)} className="p-0.5 border rounded-[50%] border-rose-400"><img src={removeItemIcon} /></button></div>}
            </div>
        </li>
    )
}

export default CartItem