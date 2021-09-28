import "./assets/globalScss/index.scss";
import { CartProvider } from "./store/cartProvider";

import { Home } from "./layouts/Home";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;
