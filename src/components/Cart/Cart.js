import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItems from "./CartItems";


const Cart = (props) => {
    // const cartItems = [{ id: "c1", name: "sushi", price: 22.39 }];
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const addHandler = (item) => {
        cartCtx.addItem({...item, amount:1})
    }

    const removeHandler = (id) => {
        cartCtx.removeItem(id);
    }

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartCtx.items.map((item) => (
                    <CartItems 
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={addHandler.bind(null, item)}
                    onRemove={removeHandler.bind(null, item.id)}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;