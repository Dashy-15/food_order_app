import { Fragment } from "react";
import CartButton from "./CartButton";
import classes from "./LayerHeader.module.css"
import mealsImage from "../../Assets/meals.jpg"

const LayerHeader = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['header-content']}>
                    <h1>React Meals</h1>
                    <CartButton />
                </div>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A bunch of delicious food!" />
            </div>
        </Fragment>
    )
}

export default LayerHeader;