import { Fragment } from "react";
import LayerHeader from "./components/Layers/LayerHeader";
import Meals from "./components/Meals/Meals";


function App() {
  return (
    <Fragment>
      <LayerHeader />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
