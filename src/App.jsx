import React from "react";
import { CartContext } from "./core/cartContext";
import Router from "./routes";

function App() {
  const [selectedProduct, setSelectedProduct] = React.useState([]);

  return (
    <CartContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      <Router />
    </CartContext.Provider>
  );
}

export default App;
