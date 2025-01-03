import { Fragment } from "react";
import CartButton from "./CartButton";
import "./LayerHeader.css"
import mealsImage from "../../Assets/meals.jpg"

const LayerHeader = () => {
    return (
        <Fragment>
            <header className="layer-header">
                <div className="layer-header-content">
                    <h1>React Meals</h1>
                    <CartButton />
                </div>
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="A bunch of delicious food!" />
            </div>
        </Fragment>
    )
}

export default LayerHeader;