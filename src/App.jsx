import React from "react";
import { CartContext } from "./core/cartContext";
import Router from "./routes";

function App() {
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [helper, setHelper] = React.useState(0);
  const [order, setOrder] = React.useState([]);

  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        helper,
        setHelper,
        order,
        setOrder,
      }}
    >
      <Router />
    </CartContext.Provider>
  );
}

export default App;
