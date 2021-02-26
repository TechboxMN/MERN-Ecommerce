import { addToCart } from '../actions/cartActions'

export const handleChange = (type, item, dispatch, cartItems) => {
    if (type === '-' && item.qty > 0) {
        addToCart(item.product, item.qty - 1)(dispatch, cartItems)
    } else if (type === '+' && item.countInStock > item.qty) {
        addToCart(item.product, item.qty + 1)(dispatch, cartItems)
    }
}
