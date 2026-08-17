import { useState } from 'react';

import cartIcon from '../../../../assets/icons/icon-add-to-cart.svg'
import decrementIcon from '../../../../assets/icons/icon-decrement-quantity.svg'
import incrementIcon from '../../../../assets/icons/icon-increment-quantity.svg'

function ProductButton() {
    const [quantity, setQuantity] = useState(0);

    return (
        <div>
            {quantity === 0 ? <button><img src={cartIcon} alt="Add to Cart" />Add to Cart</button> : <div><button><img src={decrementIcon} /></button>{quantity}<button><img src={incrementIcon} /></button></div>}
        </div>
    )
}

export default ProductButton