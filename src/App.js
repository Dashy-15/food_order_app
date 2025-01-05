import { useState } from "react";
import LayerHeader from "./components/Layers/LayerHeader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";


function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      <LayerHeader onShowCart={showCartHandler}/>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
