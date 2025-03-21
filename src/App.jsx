import React, { StrictMode, useState } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { createRoot } from "react-dom/client";
import Order from "./Order"
import { CartContext } from "./contexts" 
import Header from "./Header";
const App = () => {
  
  const cartHook = useState([])
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
       </div>
      </CartContext.Provider>

    </StrictMode>
  )
 };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
