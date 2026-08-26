import removeItemIcon from '../../assets/icons/icon-remove-item.svg'

function CartItem({ item, showImage, showRemoveButton, onRemove }) {

    const subtotal = item.price * item.quantity

    return (
        <li>
            {showImage && <div><img src={item.image.thumbnail} /></div>}
            <h3>{item.name}</h3>
            <div>
                <p>{item.quantity}</p>
                <p>$ {item.price.toFixed(2)}</p>
                <p>$ {subtotal.toFixed(2)}</p>
            </div>
            {showRemoveButton && <div><button onClick={() => onRemove(item)}><img src={removeItemIcon} /></button></div>}
        </li>
    )
}

export default CartItem