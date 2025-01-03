import CartIcon from "../Cart/CartIcon";
import "./CartButton.css"

const CartButton = () => {
    return (
        <button className="cart-button">
            <span className="cart-icon">
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className="cart-badge">0</span>
        </button>
    )
}

export default CartButton;