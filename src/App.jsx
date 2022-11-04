import React from "react";
import { UserContext } from "./core/userContext";
import Router from "./routes";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [orderItems, setOrderItems] = React.useState([]);
  const [order, setOrder] = React.useState([]);
  const [selectedColor, setSelectedColor] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState(null);

  return (
    <UserContext.Provider
      value={{
        cartItems,
        setCartItems,
        orderItems,
        setOrderItems,
        order,
        setOrder,
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize,
      }}
    >
      <Router />
    </UserContext.Provider>
  );
}

export default App;
