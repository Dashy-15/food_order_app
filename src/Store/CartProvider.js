import CartContext from "./cart-context"
import { useReducer } from "react";

const defaultCart = {
    items: [],
    totalAmount: 0
}

const cartReducerFun = (state, action) => {
    if(action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];

        let updatedItems;
        if(existingItem) {
            const updatedExistingItem = {...existingItem, amount: existingItem.amount + action.item.amount};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedExistingItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } 
    if(action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id)
        } else {
            const updatedExistingItem = {...existingItem, amount: existingItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedExistingItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCart;
}

const CartProvider = (props) => {

    const [cartState, cartDispatch] = useReducer(cartReducerFun, defaultCart);

    const addItemToCartHandler = (item) => {
        cartDispatch({type: "ADD", item: item});
    }

    const removeItemFromCartHandler = (id) => {
        cartDispatch({type: "REMOVE", id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;