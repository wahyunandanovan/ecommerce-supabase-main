import React from "react";
import { UserContext } from "./core/UserContext";
import Router from "./routes";

function App() {
  const [user, setUser] = React.useState(null);
  const [cartItems, setCartItems] = React.useState([]);
  const [helper, setHelper] = React.useState(0);
  const [order, setOrder] = React.useState([]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        cartItems,
        setCartItems,
        helper,
        setHelper,
        order,
        setOrder,
      }}
    >
      <Router />
    </UserContext.Provider>
  );
}

export default App;
