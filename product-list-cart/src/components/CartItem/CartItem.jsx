import removeItemIcon from '../../assets/icons/icon-remove-item.svg'

function CartItem({ item, showImage, showRemoveButton, onRemove }) {

    const subtotal = item.price * item.quantity

    return (
        <li className="border-b border-rose-100">
            {showImage ? <div className="flex gap-4 py-4">
            <img src={item.image.thumbnail} className="size-13 rounded-md" />
            <div className="flex flex-col mr-auto">
                <h3 className="pt-1 font-semibold text-sm text-rose-900">{item.name}</h3>
                <div className="flex gap-4 pt-1">
                    <p className=" text-sm font-semibold text-red">{item.quantity}x</p>
                    <p className="text-sm text-rose-500">@ ${item.price.toFixed(2)}</p>
                </div>
            </div>
            <p className="pt-3 text-md font-semibold text-rose-900">${subtotal.toFixed(2)}</p>
        </div> : <div>
                <h3 className="font-semibold text-sm py-2 text-rose-900">{item.name}</h3>
                <div className="flex justify-between pb-2">
                    <div className="flex gap-2 items-center">
                        <p className="pr-2 text-sm font-semibold text-red">{item.quantity}x</p>
                        <p className="text-sm text-rose-500">@ ${item.price.toFixed(2)}</p>
                        <p className="text-sm font-semibold text-rose-500">${subtotal.toFixed(2)}</p>
                    </div>
                    {showRemoveButton && <div className="flex pb-2 relative bottom-2"><button onClick={() => onRemove(item)} className="p-0.5 border rounded-[50%] border-rose-400"><img src={removeItemIcon} /></button></div>}
                </div>
            </div>}
        </li>
    )
}

export default CartItem