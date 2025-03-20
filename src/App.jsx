import React, { StrictMode } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { createRoot } from "react-dom/client";
import Order from "./Order"

const App = () => {
  return (
    <StrictMode>
          <div>
      <h1 className="logo">Padre Gino's - Order Now</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
    </StrictMode>
  )
 };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
