import React from "react";
import { CartContext } from "./core/cartContext";
import Router from "./routes";
import StartScreen from "./screens/additional-screen/StartScreen";

function App() {
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [helper, setHelper] = React.useState(0);
  const [order, setOrder] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <StartScreen />
      ) : (
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
      )}
    </>
  );
}

export default App;
