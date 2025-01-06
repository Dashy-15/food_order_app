import classes from "./MealItems.module.css";
import MealItemsForm from "./MealItemsForm";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

const MealItems = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            price: props.price,
            amount: amount
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemsForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItems;