import { Fragment } from "react";
import LayerHeader from "./components/Layers/LayerHeader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <Fragment>
      <LayerHeader />
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
