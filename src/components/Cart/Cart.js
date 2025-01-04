import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
    const cartItems = [{ id: "c1", name: "sushi", price: 22.39 }];
    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartItems.map((cartItem) => (
                    <li>{cartItem.name}</li>
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.19</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;