// import React from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { createRoot } from "react-dom/client";
import Order from "./Order"

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  )

 };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
