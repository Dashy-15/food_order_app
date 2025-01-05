import { Fragment, useState } from "react";
import LayerHeader from "./components/Layers/LayerHeader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <Fragment>
      <LayerHeader onShowCart={showCartHandler}/>
      {showCart && <Cart onClose={hideCartHandler}/>}
      
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
