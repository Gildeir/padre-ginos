
import { useState, useEffect, use } from "react";
import Pizza from "./Pizza"

const intl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

export default function Order (props) {
    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [pizzaType, setPizzaType] = useState("Pepperoni");
    const [pizzaSize, setPizzaSize] = useState("L");
    const [loading, setLoadig] = useState(true);
    console.log(pizzaType);
    console.log("clicou:", pizzaSize);
    
    let price, selectedPizza; 

    if(!loading) {
        selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    }
    
    async function fetchPizzaTypes() {
        const pizzaRes = await fetch("http://localhost:3000/api/pizzas");
        const pizzaJson = await pizzaRes.json();
        setPizzaTypes(pizzaJson);
        setLoadig(false);
    }

    useEffect(() => {
        fetchPizzaTypes();
    }, []);
    
    return (
        <div className="order">
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                            <select 
                                onChange={(e) => setPizzaType(e.target.value)}
                                name="pizza-type" 
                                value = { pizzaType }
                                >
                                    {/* <option value="pepperoni">The pepperoni Pizza</option>
                                    <option value="hawaiian">The Hawaiian Pizza</option>
                                    <option value="big_meat">The Big Meat Pizza</option> */}

                                <option value="" disabled>Select a pizza</option> {/* Default empty option */}
                                {pizzaTypes.map((pizza) => (
                                    <option key={pizza.id} value={pizza.id}>
                                        {pizza.name}
                                    </option>
                                ))}
                            </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input
                                    checked={pizzaSize==="S"}
                                    type='radio'
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzaSize==="M"}
                                    type='radio'
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                
                                <input
                                    checked={pizzaSize==="L"}
                                    type='radio'
                                    name="pizza-size"
                                    value="L"
                                    id="pizza-l"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to cart</button>
                    <div className="order-pizza">
                    <Pizza
                        name="Pepperoni"
                        description="another pep pizza"
                        image="../Public/pizzas/classic_dlx.webp"
                        />
                         <p>$13.39</p>
                    </div>
                </div>
            </form>
        </div>
    );
}